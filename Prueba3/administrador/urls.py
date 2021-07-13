from django.urls import path
from .views import crud, form_vehiculo

urlpatterns = [
    path('', crud, name="crud"),
    path('form-vehiculo/', form_vehiculo, name="form_vehiculo")
]