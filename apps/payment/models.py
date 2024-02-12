from django.db import models



class Transaccion(models.Model):
    token = models.CharField(max_length=100)  # Almacena el token de la transacción
    order_id = models.CharField(max_length=50, unique=True)  # Identificador único de la orden
    amount = models.DecimalField(max_digits=10, decimal_places=2)  # Monto de la transacción
    aprobada = models.BooleanField(default=False)  # Indica si la transacción fue aprobada
    fecha_creacion = models.DateTimeField(auto_now_add=True)  # Fecha de creación de la transacción

    # Puedes agregar más campos según sea necesario para tu aplicación

    def __str__(self):
        return f"Transaccion #{self.id} - Orden #{self.order_id}"
