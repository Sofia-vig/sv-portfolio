function components() {
  //NAV
  const sectionELementNav = document.querySelector(".container-principal");
  navComponent(sectionELementNav);

  //FOOTER
  const divElementFooter = document.querySelector(".footer-container");
  footerComponent(divElementFooter);
}

//WORKS
function getWorks() {
  const divElementService = document.querySelector(".service-container");
  fetch(
    "https://cdn.contentful.com/spaces/ibdptpyrbdej/environments/master/entries?access_token=z9Me_ot5ZG8xZjmsDWjH3yXP6gmtr-ggAW8HvHR2hhE&content_type=portfolio"
  ).then((response) => {
    response.json().then((data) => {
      data.items.forEach((item) => {
        const object = {
          title: item.fields.title,
          subtitle: item.fields.subtitle,
          img: item.fields.img,
          link: item.fields.link,
        };
        workComponent(divElementService, object);
      });
    });
  });
}
function main() {
  components();
  getWorks();
  burgerMobile();
}

main();
