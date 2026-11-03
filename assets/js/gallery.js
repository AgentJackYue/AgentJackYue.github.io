
(() => {
  "use strict";

  // =====================================
  // Horizontal Gallery
  // =====================================

  function initHorizontalGallery(gallery) {
    const viewport = gallery.querySelector(
      ".photo-gallery__viewport"
    );
    const items = Array.from(
      gallery.querySelectorAll(".photo-gallery__item")
    );
    const counter = gallery.querySelector(
      ".photo-gallery__counter"
    );
    const prev = gallery.querySelector(".photo-gallery__prev");
    const next = gallery.querySelector(".photo-gallery__next");

    if (!viewport || !items.length || !counter || !prev || !next) {
      return;
    }

    gallery.classList.add("is-enhanced");

    let currentIndex = 0;
    let scrollTimer = null;

    function getNearestIndex() {
      const left = viewport.getBoundingClientRect().left;

      let nearest = 0;
      let minDistance = Infinity;

      items.forEach((item, index) => {
        const distance = Math.abs(
          item.getBoundingClientRect().left - left
        );

        if (distance < minDistance) {
          minDistance = distance;
          nearest = index;
        }
      });

      return nearest;
    }

    function update() {
      currentIndex = getNearestIndex();

      counter.textContent =
        `${currentIndex + 1} / ${items.length}`;

      prev.disabled = currentIndex === 0;
      next.disabled = currentIndex === items.length - 1;
    }

    function navigate(direction) {
      const target = Math.max(
        0,
        Math.min(getNearestIndex() + direction, items.length - 1)
      );

      items[target].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start"
      });
    }

    prev.addEventListener("click", () => navigate(-1));
    next.addEventListener("click", () => navigate(1));

    viewport.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        navigate(1);
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        navigate(-1);
      }
    });

    viewport.addEventListener("scroll", () => {
      window.clearTimeout(scrollTimer);

      scrollTimer = window.setTimeout(update, 80);
    }, { passive: true });

    update();
  }


  // =====================================
  // Coverflow Gallery — Swiper
  // =====================================

  function initCoverflowGallery(gallery) {
    const container = gallery.querySelector(
      ".photo-gallery__swiper"
    );

    const counter = gallery.querySelector(
      ".photo-gallery__counter"
    );

    const caption = gallery.querySelector(
      ".photo-gallery__active-caption"
    );

    if (!container || !counter || !caption ) {
      return;
    }

    if (typeof Swiper === "undefined") {
      console.error("Swiper is not loaded.");
      return;
    }

    gallery.classList.add("is-enhanced");

    const slides = Array.from(
      container.querySelectorAll(".swiper-slide")
    );

    function updateInfo(swiper) {
      const index = swiper.realIndex;

      counter.textContent =
        `${index + 1} / ${slides.length}`;

      caption.textContent =
        slides[index]?.dataset.caption || "";

    }

    const swiper = new Swiper(container, {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      initialSlide: 0,
      speed: 600,

      coverflowEffect: {
        rotate: 35,
        stretch: 0,
        depth: 120,
        modifier: 1,
        slideShadows: false
      },

      slideToClickedSlide: true,

      keyboard: {
        enabled: true,
        onlyInViewport: true
      },

      on: {
        init: updateInfo,
        slideChange: updateInfo
      }
    });
    updateInfo(swiper);
  }


  // =====================================
  // Initialize all galleries
  // =====================================

  function initAllGalleries() {
    document.querySelectorAll(".photo-gallery").forEach(
      (gallery) => {
        if (gallery.dataset.galleryReady === "true") {
          return;
        }

        gallery.dataset.galleryReady = "true";

        if (gallery.classList.contains("photo-gallery--coverflow")) {
          initCoverflowGallery(gallery);
        } else {
          initHorizontalGallery(gallery);
        }
      }
    );
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      initAllGalleries,
      { once: true }
    );
  } else {
    initAllGalleries();
  }
})();
