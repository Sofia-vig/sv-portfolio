function components() {
  //NAV
  const sectionELementNav = document.querySelector(".container-principal");
  navComponent(sectionELementNav);

  //FOOTER
  const divElementFooter = document.querySelector(".footer-container");
  footerComponent(divElementFooter);
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
  getServices();
}

main();
