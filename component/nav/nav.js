function navComponent(elementHtml) {
  const navElement = document.createElement("header");
  navElement.classList.add("nav");
  navElement.innerHTML = `
  <a href="index.html"><img src="img/logo.svg" alt="logo-fotografia" class="nav__logo"/></a>
<div class="nav__burger">
  <div class="first"></div>
  <div></div>
  <div></div>
</div>
<nav class="nav-bar">
  <a href="portfolio.html">Portfolio</a>
  <a href="servicios.html">Servicios</a>
  <a href="contacto.html">Contacto</a>
</nav>
<nav class="nav-bar-mobile">
  <button class="nav-bar-mobile__close">X</button>
  <a href="portfolio.html">Portfolio</a>
  <a href="servicios.html">Servicios</a>
  <a href="contacto.html">Contacto</a>
</nav>
`;

  elementHtml.appendChild(navElement);
}

function burgerMobile() {
  const burger = document.querySelector(".nav__burger");
  const nav = document.querySelector(".nav-bar-mobile");
  const close = document.querySelector(".nav-bar-mobile__close");
  burger.addEventListener("click", () => {
    nav.style.display = "flex";
    close.addEventListener("click", () => {
      nav.style.display = "none";
    });
  });
}
