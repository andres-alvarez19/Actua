from django.apps import AppConfig


<<<<<<<< HEAD:apps/tienda/apps.py
class TiendaConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'apps.tienda'
========
class ProductConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'product'
>>>>>>>> nenufar:apps/product/apps.py
