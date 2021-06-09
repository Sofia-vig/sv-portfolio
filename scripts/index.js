//NAV
const sectionELementNav = document.querySelector(".container-principal");
navComponent(sectionELementNav);

//HEADER
const sectionElementHeader = document.querySelector(".container-principal");
headerComponent(sectionElementHeader);

//INFORMATION
const sectionElementInformation = document.querySelector(".info-content");
infoComponent(sectionElementInformation);

//SERVICE
const divElementService = document.querySelector(".service-container");
for (let i = 0; i < 3; i++) {
  serviceComponent(divElementService);
}

//FORM
const divElementForm = document.querySelector(".form-container__div");
formComponent(divElementForm);

//FOOTER
const divElementFooter = document.querySelector(".footer-container");
footerComponent(divElementFooter);
