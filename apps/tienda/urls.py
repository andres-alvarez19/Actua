from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('profile/login/', views.login, name='login'),
    path('profile/', views.profile, name='profile'),
    path('profile/logout/', views.logout_view, name='logout'),
    path('cart/', views.cart, name='cart'),
    path('about/', views.about, name='about'),
    path('service/', views.service, name='service'),
    path('contact/', views.contact, name='contact'),
    path('profile/settings', views.settings, name='settings'),
]
