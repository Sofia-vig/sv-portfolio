function navComponent(elementHtml) {
  const navElement = document.createElement("header");
  navElement.classList.add("nav");
  navElement.innerHTML = `
  <a href="index.html"><img src="img/logo.svg" alt="logo-fotografia" class="nav__logo"/></a>
<div class="nav__burger">
  <div></div>
  <div></div>
  <div></div>
</div>
<nav class="nav-bar">
  <a href="portfolio.html">Portfolio</a>
  <a href="servicios.html">Servicios</a>
  <a href="contacto.html">Contacto</a>
</nav>`;

  elementHtml.appendChild(navElement);
}
