from django.shortcuts import render
import requests

 
# Create your views here.

def login(requests):
    return render(requests,'login.html')

def register(requests):
    return render(requests,'register.html')

