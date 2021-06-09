function serviceComponent(sectionEl, info) {
  const itemServiceElement = document.createElement("div");
  itemServiceElement.classList.add("service");
  itemServiceElement.innerHTML = `
    <div class="service__item">
      <img
        src="${info.imagen}"
        alt="camara-de-fotos"
        class="service__image"
      />
      <h3 class="service__foot-image">${info.title}</h3>
      <p class="service__ paragraph">
       ${info.subtitle}
      </p>
    </div>    
`;

  sectionEl.appendChild(itemServiceElement);
}
