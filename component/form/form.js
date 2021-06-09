function formComponent(sectionEl) {
  const formElement = document.createElement("div");
  formElement.innerHTML = ` 
    <div class="form">
    <div class="form__input-container">
      <label for="name">NOMBRE</label>
      <input type="text" id="name" class="form__input" />
    </div>
    <div class="form__input-container">
      <label for="email">EMAIL</label>
      <input type="email" id="email" class="form__input" />
    </div>
    <div class="form__input-container">
      <label for="message">MENSAJE</label>
      <textarea
        name="message"
        id="message"
        class="form__input form__input-message"
      ></textarea>
    </div>
    <div class="form__input-container">
      <input type="submit" class="form__input form__input-button" />
    </div>
  </div> `;

  sectionEl.appendChild(formElement);
}
