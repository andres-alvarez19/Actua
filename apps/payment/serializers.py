# serializers.py

from rest_framework import serializers
from .models import Transaccion

class TransaccionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaccion
        fields = ['id', 'token', 'order_id', 'amount', 'aprobada', 'fecha_creacion']
        # Ajusta la lista de campos según sea necesario para tu aplicación
