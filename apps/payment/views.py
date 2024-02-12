
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from transbank import webpay
from .models import Transaccion
from .serializers import TransaccionSerializer
from django.conf import settings

class PagoAPIView(APIView):
    def post(self, request, format=None):
        amount = request.data.get('amount', 1000)  # Obtén el monto desde los datos de la solicitud

        transbank_init = webpay.Webpay(
            settings.TRANSBANK['code'],
            webpay.IntegrationType[settings.TRANSBANK['integration_type']],
            api_key=settings.TRANSBANK['api_key'],
            cert_path=settings.TRANSBANK['webpay_cert_path'],
            key_path=settings.TRANSBANK['webpay_key_path']
        )

        response = transbank_init.initTransaction(amount, 'ID_DEL_PEDIDO', settings.TRANSBANK['return_url'])

        # Guarda el token o la información necesaria en tu modelo de pedido
        nueva_transaccion = Transaccion(
            token=response['token'],
            order_id='ID_DEL_PEDIDO',  # Reemplaza con tu lógica de generación de IDs de pedido
            amount=amount,
            # Otros campos de tu modelo según sea necesario
        )
        nueva_transaccion.save()

        return Response({'response': response}, status=status.HTTP_200_OK)

class RetornoTransbankAPIView(APIView):
    def get(self, request, format=None):
        token_ws = request.GET.get('token_ws')
        
        if not token_ws:
            return Response({'error': 'Token no encontrado en la respuesta de Transbank'}, status=status.HTTP_400_BAD_REQUEST)

        transaccion = Transaccion.objects.get(token=token_ws)

        transbank_result = PagoAPIView.transbank_init.getTransactionResult(token_ws)

        # Procesa la respuesta de Transbank y actualiza el estado de tu modelo según sea necesario
        if transbank_result['detailOutput']['responseCode'] == 0:
            # Transacción aprobada
            transaccion.aprobada = True
            # Actualiza otros campos según sea necesario
        else:
            # Transacción rechazada
            transaccion.aprobada = False
            # Maneja otros casos de respuesta según sea necesario

        transaccion.save()

        return Response({'transbank_result': transbank_result}, status=status.HTTP_200_OK)
