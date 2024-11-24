const dialog = document.getElementById("mobileOverlay");

function closeMobileOverlay() {
  dialog.close();
}

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

function healthcare_swiper() {
  const swiper = new Swiper(".healthcare__swiper", {
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
  });
}

function opportunities_swiper() {
  const swiper = new Swiper(".opportunities__content-swiper", {
    slidesPerView: 1,

    pagination: {
      el: ".opportunities__content-swiper-pagination",
    },

    navigation: {
      nextEl: ".opportunities__content-swiper-button-next",
      prevEl: ".opportunities__content-swiper-button-prev",
    },
  });
}

function news_swiper() {
  const swiper = new Swiper(".news__swiper", {
    spaceBetween: 73,

    breakpoints: {
      320: {
        slidesPerView: 2,
      },

      700: {
        slidesPerView: 4,
      },

      1024: {
        slidesPerView: 6,
      },
    },
  });
}

function healthcare_jobs__toggle() {
  const buttons = document.querySelectorAll(".healthcare-jobs__toggle");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (!button.classList.contains("button--green")) {
        buttons.forEach((btn) => btn.classList.remove("button--green"));
        button.classList.add("button--green");
      }
    });
  });
}

function feedback_modal() {
  const refs = {
    openModalBtns: document.querySelectorAll("[data-feedback-open]"),
    closeModalBtn: document.querySelector("[data-feedback-close]"),
    modal: document.querySelector("[data-feedback-modal]"),
  };
  
  const toggleModal = () => {
    refs.modal.classList.toggle("hidden");
  };

  refs.openModalBtns.forEach((btn) => {
    btn.addEventListener("click", toggleModal);
  });
  refs.closeModalBtn.addEventListener("click", toggleModal);
}

locations_swiper();
locations_button_toggle();
healthcare_swiper();
opportunities_swiper();
news_swiper();
healthcare_jobs__toggle();
feedback_modal();
