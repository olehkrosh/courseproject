function locations_button_toggle() {
  const buttons = document.querySelectorAll(".locations__toggle");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (!button.classList.contains("button--green")) {
        buttons.forEach((btn) => btn.classList.remove("button--green"));
        button.classList.add("button--green");
      }
    });
  });
}

function locations_swiper() {
  const swiper = new Swiper(".locations__swiper", {
    initialSlide: 1,

    breakpoints: {
      320: {
        slidesPerView: 1,
      },

      700: {
        slidesPerView: 2,
        spaceBetween: 52,
      },

      1024: {
        slidesPerView: 3,
        spaceBetween: 104,
      },
    },

    navigation: {
      nextEl: ".locations__swiper-button-next",
      prevEl: ".locations__swiper-button-prev",
    },
  });
}

locations_swiper();
locations_button_toggle();