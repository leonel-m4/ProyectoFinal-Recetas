document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const footer = document.getElementById("footer");

  if (navbar){
    navbar.innerHTML=`
        <div class="navbar-logo">
            <h1>La Receta del Sabor</h1>
        </div>
        <a href="#" class="menu-toggle" onclick="toggleMenu()">
            <i class="fa-solid fa-bars"></i>
        </a>
        <ul>
            <li><a href="index.html">Inicio</a></li>
            <li><a href="recetas.html">Recetas</a></li>
        </ul>
  `;}

  if(footer){
    footer.innerHTML=`
        <ul class="footer-social">
            <li><a href="https://wa.me/902800186" target="_blank" rel="noopener noreferrer"><i
                        class="fa-brands fa-whatsapp"></i></a></li>
            <li><a href="https://mail.google.com/mail/?view=cm&to=karim.sovero@tecsup.edu.pe" target="_blank" rel="noopener noreferrer"><i
                        class="fa-solid fa-envelope"></i></a></li>
        </ul>
        <ul class="footer-menu">
            <li><a href="index.html">Inicio</a></li>
            <li><a href="equipo.html">Equipo</a></li>
            <li><a href="sobre.html">Sobre nosotros</a></li>
        </ul>
        <p class="footer-copy">@2025 | Todos los derechos reservados </p>
  `;}
});

/*head icon*/
const link = document.createElement("link");
link.rel = "icon";
link.type = "image/png";
link.href = "img/icon.png";
document.head.appendChild(link);
