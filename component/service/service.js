function serviceComponent(sectionEl) {
  const itemServiceElement = document.createElement("div");
  itemServiceElement.classList.add("service");
  itemServiceElement.innerHTML = `
    <div class="service__item">
      <img
        src="img/note.png"
        alt="camara-de-fotos"
        class="service__image"
      />
      <h3 class="service__foot-image">Sesiones de fotos</h3>
      <p class="service__ paragraph">
        Acá vas a poder encontrar las fotografias que más disfrute
        hacer.Podes encontrar fotografias de eventos (bodas,bautismos,
        recibidas, exteriores) así como sesiones de fotos.
      </p>
    </div>    
`;

  sectionEl.appendChild(itemServiceElement);
}
