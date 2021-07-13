from django.urls import path
from .views import probando

urlpatterns = [
    path('', probando, name="probando")
]