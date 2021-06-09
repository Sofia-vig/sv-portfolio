function infoComponent(elementHtml) {
  const infoElement = document.createElement("div");
  infoElement.classList.add("information-container");
  infoElement.innerHTML = `
  <img src="img/sofi.png" alt="image-sofi" class="information-container__image" />
  <div class="information-container__block">
        <h2 class="block__subtitle">Sobre mi</h2>
        <p class="block__biography">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore et
          voluptatibus necessitatibus a praesentium quo tempora expedita impedit
          pariatur blanditiis! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Beatae quisquam saepe cumque deleniti? Minus,
          repudiandae fugit, possimus autem delectus quos ullam nostrum ut
          inventore earum laboriosam numquam esse voluptatibus et. sobre mi
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dui
        </p>
  </div>`;

  elementHtml.appendChild(infoElement);
}
