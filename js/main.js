console.log('hh');
$(document).ready(() => {
  applySliderController('.reviews__items');
  applySlider('.certificates__items');
  applyMobileSlider('.certificates__items-mobile');
  applyMenuController();
});

function applyMobileSlider(item) {
  $(item).owlCarousel({
      items: 1,
      mouseDrag: true,
      margin: 30,
      loop: false,
      nav: false,
      dots: true,
      autoplay: false,
      responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 1,
        },
        1024: {
            items: 1,
        },

        1240: {
            items: 1,
        },
    },
  });
}

function applySlider(item) {
  $(item).owlCarousel({
      items: 1,
      mouseDrag: true,
      margin: 30,
      loop: false,
      nav: false,
      dots: true,
      autoplay: false,
      responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 1,
        },
        1024: {
            items: 1,
        },

        1240: {
            items: 4,
        },
    },
  });
}

function applySliderController(item) {
  $(item).owlCarousel({
      items: 1,
      mouseDrag: true,
      margin: 30,
      loop: false,
      nav: true,
      dots: true,
      autoplay: false,
      responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 1,
        },
        1024: {
            items: 1,
        },

        1240: {
            items: 1,
        },
    },
  });
}

function applyMenuController() {
  const burger = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const cross = document.querySelector('.mobile-menu__cross');

  function showMobileMenu() {
    mobileMenu.style.display = "flex";
  }

  function hideMobileMenu() {
    mobileMenu.style.display = "none";
  }

  burger.addEventListener('click', showMobileMenu);
  cross.addEventListener('click', hideMobileMenu);
}
