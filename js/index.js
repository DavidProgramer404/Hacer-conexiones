function mostrarModal(elemento){
    const modal = document.querySelector('.modal');
    modal.classList.add('showModal');
    const contendorPrincipal = document.querySelector('.main');
    contendorPrincipal.classList.add('mainOpacity');
    document.querySelector('#editUserName').value = "";
} 

function cambiarNombre(evento){
    evento.preventDefault();
    console.log(evento);
    const elementoNombreUsuario = document.querySelector('#userName');
    const nuevoNombreDeUsuario = document.querySelector('#editUserName').value;

    elementoNombreUsuario.innerText = nuevoNombreDeUsuario;
    const modal = document.querySelector('.modal');
    modal.classList.remove('showModal');
    const contendorPrincipal = document.querySelector('.main');
    contendorPrincipal.classList.remove('mainOpacity');
}

function removerUsuario(elemento){
    elemento.closest('.card-list-item').remove();
    let elementoNumeroDeConexiones = document.querySelector('#connectionRequestNumber');
    let numeroDeConexiones = elementoNumeroDeConexiones.innerText;
    numeroDeConexiones -= 1;
    elementoNumeroDeConexiones.textContent = numeroDeConexiones;
}

function addUsuario(elemento){
    let misConexiones = document.querySelector('#myConnections');
    let imagenDeAvatar = elemento.closest('.card-list-item').querySelector('.avatar-s');
    let nombreDeConexion = elemento.closest('.card-list-item').querySelector('span').innerText;
    console.log(imagenDeAvatar)
    misConexiones.innerHTML += `
                <li class="card-list-item start">
                    <img src="${imagenDeAvatar.src}" alt="${imagenDeAvatar.alt}" class="avatar-s">
                    ${nombreDeConexion}
                </li>`;

    let elementoTotalDeConexiones = document.querySelector('#totalConnections');
    let numeroDeConexiones = elementoTotalDeConexiones.innerText;
    numeroDeConexiones ++;
    elementoTotalDeConexiones.innerText = numeroDeConexiones;

    removerUsuario(elemento);

}


function ViewMore(elemento){
    alert("Your Connecctions number.");
}

function cambiarFondo(elemento){
    elemento.classList.add('extra');
}

function quitarFondo(elemento){
    elemento.classList.remove('extra');
}
