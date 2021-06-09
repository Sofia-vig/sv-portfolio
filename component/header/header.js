function headerComponent(elementHtml) {
  const navElement = document.createElement("div");
  navElement.classList.add("header-container");
  navElement.innerHTML = `
  <div class="header__text-content">
  <h1 class="text-content__title">Sofia Vigna</h1>
  <h2 class="text-content__subtitle">developer</h2>
</div>`;

  elementHtml.appendChild(navElement);
}
