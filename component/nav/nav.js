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
  <button class="close">X</button>
  <a href="portfolio.html">Portfolio</a>
  <a href="servicios.html">Servicios</a>
  <a href="contacto.html">Contacto</a>
</nav>
`;

  elementHtml.appendChild(navElement);
}

function burgerMobile() {
  const burger = document.querySelector(".nav__burger");
  const nav = document.querySelector(".nav-bar");
  const close = document.querySelector(".close");
  burger.addEventListener("click", () => {
    nav.classList.add("nav-mobile");
    nav.style.display = "flex";
    close.style.display = "block";
    close.addEventListener("click", () => {
      nav.style.display = "none";
    });
  });
}
