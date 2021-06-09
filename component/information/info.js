function infoComponent(elementHtml, info) {
  const infoElement = document.createElement("div");
  infoElement.classList.add("information-container");
  infoElement.innerHTML = `
  <img src="img/sofi.png" alt="image-sofi" class="information-container__image" />
  <div class="information-container__block">
        <h2 class="block__subtitle">${info.title}</h2>
        <p class="block__biography">
        ${info.description}
        </p>
  </div>`;

  elementHtml.appendChild(infoElement);
}
