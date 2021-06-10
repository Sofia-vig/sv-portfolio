function workComponent(sectionEl, info) {
  const itemServiceElement = document.createElement("div");
  itemServiceElement.classList.add("service");
  itemServiceElement.innerHTML = `
      <div class="service__item">
        <img
          src="${info.img}"
          alt="camara-de-fotos"
          class="service__image"
        />
        <h3 class="service__foot-image">${info.title}</h3>
        <p class="service__ paragraph">
         ${info.subtitle}
        </p>
        <a href="${info.link}" class="service__link" target="_blank">Link Repo GitHub</a>
      </div>    
  `;

  sectionEl.appendChild(itemServiceElement);
}
