
from administrador.forms import VehiculoForm
from administrador.models import Vehiculo
from django.shortcuts import render, redirect

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
        return redirect('crud')

    return render(request, 'administrador/form_vehiculo.html', datos)

def form_mod_vehiculo(request,id):
    vehiculo = Vehiculo.objects.get(patente = id)
    datos = {
        'form':VehiculoForm(instance = vehiculo)
    }

    if request.method == 'POST' :
        formulario = VehiculoForm(data=request.POST,instance=vehiculo)
        if formulario.is_valid:
            formulario.save()

            datos['mensaje'] = "Modificado Correctamente"

    return render(request, 'administrador/form_mod_vehiculo.html', datos)

def form_del_vehiculo(request, id):

    vehiculo = Vehiculo.objects.get(patente=id)

    vehiculo.delete()

    return redirect(to='crud')



