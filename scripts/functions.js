function components() {
  //NAV
  const sectionELementNav = document.querySelector(".container-principal");
  navComponent(sectionELementNav);

  //SERVICE
  const divElementService = document.querySelector(".service-container");
  for (let i = 0; i < 5; i++) {
    serviceComponent(divElementService);
  }

  //FOOTER
  const divElementFooter = document.querySelector(".footer-container");
  footerComponent(divElementFooter);
}

function main() {
  components();
}

main();
