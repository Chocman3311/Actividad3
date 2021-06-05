function cargarNavbar(){
    $("#contenedor").append(`<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="logo" href="./index.html"><img src="https://st.depositphotos.com/1006018/3132/v/600/depositphotos_31322065-stock-illustration-automotive-mechanic-car-repair-retro.jpg" alt="Logito"
        width="100px"> </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item me-4">
            <a class="nav-link active" href="./index.html">Inicio</a>
          </li>
          <li class="nav-item me-4">
            <a class="nav-link" href="./PAGINAS/trabajos.html">Trabajos</a>
          </li>
          <li class="nav-item me-4">
            <a class="nav-link" href="./PAGINAS/acercade.html">Acerca De</a>
          </li>
          <li class="nav-item me-4">
            <a class="nav-link" href="./PAGINAS/formulario.html">Formulario contacto</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Buscar por
            </a>
            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
              <li><a class="dropdown-item" href="./PAGINAS/API.html">Solicitar Datos API</a></li>
            </ul>
        </ul>
        <div class="me-4">
        <button id="PedirClima" class="btn btn-primary">Pedir Clima</button>        
         <div class="alert m-1" role="alert" id="msg" style="color: white;">
    </div>
    </div>
   
        <form class="d-flex me-4 ">
        
          <button class="btn btn-outline-success me-4" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal7">Ingresar</button>
          <button class="btn btn-outline-success" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal8">Registrar</button>
          
        </form>
<!-- Modal -->
<div class="modal fade" id="exampleModal7" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Ingreso</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label" style="color: black;">Correo Electronico</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          <div id="emailHelp" class="form-text">No compartas tu correo.</div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label" style="color: black;">Contraseña</label>
          <input type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <button type="submit" class="btn btn-primary">Ingresar</button>
        <button type="submit" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
      </form>
    </div>
  </div>
</div>
</div>

<!-- Modal -->
<div class="modal fade" id="exampleModal8" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
  <div class="modal-header">
    <h5 class="modal-title" id="exampleModalLabel">Registro</h5>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body">
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail2" class="form-label" style="color: black;">Correo Electronico</label>
        <input type="email" class="form-control" id="exampleInputEmail2" aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text">No compartas tu correo.</div>
      </div>
      <div class="mb-3">
        <label for="excampleInputName" class="form-label" style="color: black;">Nombre</label>
        <input type="text" class="form-control" id="excampleInputName">
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword2" class="form-label" style="color: black;">Contraseña</label>
        <input type="password" class="form-control" id="exampleInputPassword2">
      </div>
      <button type="submit" class="btn btn-primary">Registrarse</button>
      <button type="submit" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
    </form>
  </div>
</div>
</div>
</div>
</div>
</div>
</nav>`);
}

function cargarNavbar2(){
    $("#contenedor2").append(`  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="logo" href="../index.html"><img src="https://st.depositphotos.com/1006018/3132/v/600/depositphotos_31322065-stock-illustration-automotive-mechanic-car-repair-retro.jpg" alt="Logito"
        width="100px"> </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item me-4">
            <a class="nav-link" href="../index.html">Inicio</a>
          </li>
          <li class="nav-item me-4">
            <a class="nav-link " href="./trabajos.html">Trabajos</a>
          </li>
          <li class="nav-item me-4">
            <a class="nav-link" href="./acercade.html">Acerca De</a>
          </li>
          <li class="nav-item me-4">
            <a class="nav-link" href="./formulario.html">Formulario contacto</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Buscar por
            </a>
            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
              <li><a class="dropdown-item" href="./API.html">Solicitar Datos API</a></li>
            </ul>
        </ul>
        <div class="me-4">
        <button id="PedirClima" class="btn btn-primary">Pedir Clima</button>        
         <div class="alert m-1" role="alert" id="msg" style="color: white;">
    </div>
    </div>
        <form class="d-flex me-4 ">
          <button class="btn btn-outline-success me-4" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal7">Ingresar</button>
          <button class="btn btn-outline-success" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal8">Registrar</button>
        </form>
<!-- Modal -->
<div class="modal fade" id="exampleModal7" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Ingreso</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label" style="color: black;">Correo Electronico</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          <div id="emailHelp" class="form-text">No compartas tu correo.</div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label" style="color: black;">Contraseña</label>
          <input type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <button type="submit" class="btn btn-primary">Ingresar</button>
        <button type="submit" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
      </form>
    </div>
  </div>
</div>
</div>

<!-- Modal -->
<div class="modal fade" id="exampleModal8" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
  <div class="modal-header">
    <h5 class="modal-title" id="exampleModalLabel">Registro</h5>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body">
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail2" class="form-label" style="color: black;">Correo Electronico</label>
        <input type="email" class="form-control" id="exampleInputEmail2" aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text">No compartas tu correo.</div>
      </div>
      <div class="mb-3">
        <label for="excampleInputName" class="form-label" style="color: black;">Nombre</label>
        <input type="text" class="form-control" id="excampleInputName">
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword2" class="form-label" style="color: black;">Contraseña</label>
        <input type="password" class="form-control" id="exampleInputPassword2">
      </div>
      <button type="submit" class="btn btn-primary">Registrarse</button>
      <button type="submit" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
    </form>
  </div>
</div>
</div>
</div>
</div>
</div>
</nav>`);
}