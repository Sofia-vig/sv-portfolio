function components() {
  //NAV
  const sectionELementNav = document.querySelector(".container-principal");
  navComponent(sectionELementNav);

  //HEADER
  const sectionElementHeader = document.querySelector(".container-principal");
  headerComponent(sectionElementHeader);

  //FORM
  const divElementForm = document.querySelector(".form-container__div");
  formComponent(divElementForm);

  //FOOTER
  const divElementFooter = document.querySelector(".footer-container");
  footerComponent(divElementFooter);
}

//INFORMATION
function getMe() {
  const sectionElementInformation = document.querySelector(".info-content");
  fetch(
    "https://cdn.contentful.com/spaces/ibdptpyrbdej/environments/master/entries?access_token=z9Me_ot5ZG8xZjmsDWjH3yXP6gmtr-ggAW8HvHR2hhE&content_type=me"
  ).then((response) => {
    response.json().then((data) => {
      const object = {
        title: data.items[0].fields.title,
        description:
          data.items[0].fields.description.content[0].content[0].value,
      };
      infoComponent(sectionElementInformation, object);
    });
  });
}

//SERVICE
function getServices() {
  const divElementService = document.querySelector(".service-container");
  fetch(
    "https://cdn.contentful.com/spaces/ibdptpyrbdej/environments/master/entries?access_token=z9Me_ot5ZG8xZjmsDWjH3yXP6gmtr-ggAW8HvHR2hhE&content_type=services"
  ).then((response) => {
    response.json().then((data) => {
      data.items.forEach((item) => {
        const object = {
          title: item.fields.title,
          subtitle: item.fields.subtitle.content[0].content[0].value,
          imagen: item.fields.imagen,
        };
        serviceComponent(divElementService, object);
      });
    });
  });
}

function main() {
  components();
  getMe();
  getServices();
  burgerMobile();
}

main();
