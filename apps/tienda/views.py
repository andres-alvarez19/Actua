from django.shortcuts import render, redirect
from django.contrib.auth import logout

# Create your views here.


def index (request):
    return render(request, 'pages/index.html')


def login (request):
    return render(request, 'account/login.html')


def profile (request):
    return render(request, 'account/profile.html')

def cart (request):
    return render(request, 'store/cart.html')

def logout_view (request):
    logout(request)
    return redirect('index')

def about (request):
    return render(request, 'company/about.html')

def service (request):
    return render(request, 'company/services.html')

def contact (request):
    return render(request, 'company/contact.html')

def settings (request):
    return render(request, 'account/settings.html')