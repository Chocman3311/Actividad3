from core.models import Carrusel, AcercaDe, FormularioContacto, Trabajos
from django.shortcuts import redirect, render
from django.contrib import messages
from .forms import UserRegisterForm
# Create your views here.
#PAGINAS

def index(request):
    carruselCompleto = Carrusel.objects.all()
    datos = {
        "carruselCompleto": carruselCompleto
    }
    
    return render(request, 'core/index.html', datos)

def trabajos(request):
    varTrabajos = Trabajos.objects.all()
    datosTrabajos = {
        "varTrabajos" : varTrabajos
    }

    return render(request, 'core/trabajos.html',datosTrabajos)

def acercade(request):
    varAcercaDe = AcercaDe.objects.all()

    datosAcercade = {
        "varAcercaDe": varAcercaDe
    }

    return render(request, 'core/acercade.html', datosAcercade)

def formulario(request):
    varFormulario = FormularioContacto.objects.all()

    datosFormulario = {
        "varFormulario": varFormulario

    }

    return render(request, 'core/formulario.html', datosFormulario)

def api(request):

    return render(request, 'core/api.html')


def register(request):
    if request.method == 'POST':
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data['username']
            messages.success(request, f'Usuario {username} creado')
            return redirect('index')
    else:
        form = UserRegisterForm()

    context = {'form' : form}
    return render(request, 'administrador/register.html', context)

#PAGINAS
