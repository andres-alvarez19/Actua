from django.urls import path
from .views import PagoAPIView, RetornoTransbankAPIView
app_name="payment"

urlpatterns = [
    path('iniciar-pago/', PagoAPIView.as_view(), name='iniciar_pago'),
    path('retorno-transbank/', RetornoTransbankAPIView.as_view(), name='retorno_transbank'),
    # Puedes agregar más rutas según sea necesario para tu aplicación
]
