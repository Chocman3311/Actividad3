from django.urls import path
from .views import index, trabajos, acercade, formulario, api, register
from django.contrib.auth.views import LoginView

urlpatterns = [
    path('', index,name="index"),
    path('trabajos/',trabajos,name="trabajos"),
    path('acercade/',acercade,name="acercade"),
    path('formulario/',formulario,name="formulario"),
    path('api/',api,name="api"),
    path('register/', register, name="register"),
    path('login/', LoginView.as_view(template_name="administrador/login.html"), name="login"),


]