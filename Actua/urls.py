"""
URL configuration for Actua project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from apps.category import views
from django.contrib import admin
from django.urls import path, include, re_path
from django.conf.urls.static import static
from django.conf import settings
from django.views.generic import TemplateView
urlpatterns = [
    path('admin/', admin.site.urls),
   
    path('', TemplateView.as_view(template_name='index.html')),
    path('login/', TemplateView.as_view(template_name='pages/login.html')),


    path('api/category/', include('apps.category.urls')),
    path('api/product/', include('apps.product.urls')),
    path('api/cart/', include('apps.cart.urls')),
    path('api/shipping/', include('apps.shipping.urls')),
    path('api/orders/', include('apps.orders.urls')),
    path('api/payment/', include('apps.payment.urls')),
    path('api/profile/', include('apps.user_profile.urls')),
    
    path('category/', views.ListCategoriesView.as_view()),
    path("__reload__/", include("django_browser_reload.urls")),
]
# + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# urlpatterns += [

#     re_path(r'^.*', TemplateView.as_view(template_name='index.html')),
# ]
