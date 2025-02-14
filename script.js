function mostrarSeccion(seccion) {
    document.querySelectorAll(".activo").forEach(el => el.classList.remove("activo"));
    document.getElementById(seccion).classList.add("activo");
}

function reproducirMusica() {
    document.getElementById("cancion").play();
}