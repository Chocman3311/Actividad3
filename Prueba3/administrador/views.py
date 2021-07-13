
from administrador.forms import VehiculoForm
from administrador.models import Vehiculo
from django.shortcuts import render
# Create your views here.


def crud(request):
    vehiculos = Vehiculo.objects.all()
    datos = {
        "vehiculos":vehiculos
    }
    return render(request, 'administrador/crud.html', datos)

def form_vehiculo(request):
    datos = {
        'form' : VehiculoForm
    }

    if request.method == 'POST' :
        formulario = VehiculoForm(request.POST)
        if formulario.is_valid:
            formulario.save()

            datos['mensaje'] = "Guardado Correctamente"

    return render(request, 'administrador/form_vehiculo.html', datos)