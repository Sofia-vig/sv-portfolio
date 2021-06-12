function footerComponent(sectionEl) {
  const footerElement = document.createElement("div");
  footerElement.innerHTML = ` 
  <footer class="footer">
  <div class="block-footer">
    <img src="img/logo.svg" alt="logo" class="footer__logo" />
  </div>

  <ul class="list-social-footer">
    <li>
      <a href="https://www.instagram.com/sofi.vigna/" target="_blank"
        >Instagram</a
      >
      <img src="img/instagram.svg" alt="instagram" class="list-social-footer__icon" />
    </li>
    <li>
      <a href="https://www.linkedin.com/in/sofia-vigna/" target="_blank"
        >Linkedin</a
      >
      <img src="img/linkedin.svg" alt="linkedin" class="list-social-footer__icon" />
    </li>
    <li>
      <a href="https://github.com/Sofia-vig" target="_blank">Github</a>
      <img src="img/github.svg" alt="github" class="list-social-footer__icon" />
    </li>
  </ul>
</footer>`;

  sectionEl.appendChild(footerElement);
}
