from django.shortcuts import render
# Create your views here.


def probando(request):

    return render(request, 'administrador/probando.html')