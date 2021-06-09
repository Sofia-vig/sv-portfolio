function components() {
  //NAV
  const sectionELementNav = document.querySelector(".container-principal");
  navComponent(sectionELementNav);

  //FORM
  const divElementForm = document.querySelector(".form-container__div");
  formComponent(divElementForm);

  //FOOTER
  const divElementFooter = document.querySelector(".footer-container");
  footerComponent(divElementFooter);
}

function main() {
  components();
}
main();
