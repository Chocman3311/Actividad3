from django.urls import path
from .views import crud, form_vehiculo, form_mod_vehiculo, form_del_vehiculo

urlpatterns = [
    path('', crud, name="crud"),
    path('form-vehiculo/', form_vehiculo, name="form_vehiculo"),
    path('form-mod-vehiculo/<id>', form_mod_vehiculo, name="form_mod_vehiculo"),
    path('form-del-vehiculo/<id>', form_del_vehiculo, name="form_del_vehiculo")

]