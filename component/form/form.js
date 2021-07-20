function formComponent(sectionEl) {
  const formElement = document.createElement("div");
  formElement.innerHTML = ` 
    <form class="form" method="POST">
    <div class="form__input-container">
      <label for="name">NAME</label>
      <input type="text" name="name" id="name" class="form__input" />
    </div>
    <div class="form__input-container">
      <label for="email">EMAIL</label>
      <input type="email" name="email" id="email" class="form__input" />
    </div>
    <div class="form__input-container">
      <label for="message">MESSAGE</label>
      <textarea
        name="message"
        id="message"
        class="form__input form__input-message"
      ></textarea>
    </div>
    <div class="form__input-container">
      <p class="isSend"></p>
      <input type="submit" class="form__input form__input-button" value="Send" />
    </div>
  </form> `;

  sectionEl.appendChild(formElement);
}

function sendData(elementForm) {
  elementForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const objeto = Object.fromEntries(formData.entries());
    const newObjeto = {
      to: "sofiavign@gmail.com",
      message: objeto.name + ": " + objeto.message,
    };
    var url = "https://apx-api.vercel.app/api/utils/dwf ";

    fetch(url, {
      method: "POST",
      body: JSON.stringify(newObjeto),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => {
        const send = elementForm.querySelector(".isSend");
        send.style.marginBottom = "20px";
        send.textContent = "Sent successfully";
        console.log("Success:", response);
      });
  });
}
