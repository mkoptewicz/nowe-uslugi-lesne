const nav = document.querySelector(".nav-container");
const header = document.querySelector("header");
const sliders = document.querySelectorAll(".slide-in");
const headerOptions = {
  rootMargin: "-100% 0px 0px 0px",
};
const headerObserver = new IntersectionObserver(function (
  entries,
  headerObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      nav.classList.add("nav-container--scrolled");
    } else {
      nav.classList.remove("nav-container--scrolled");
    }
  });
},
headerOptions);
headerObserver.observe(header);
const sliderOptions = {
  rootMargin: "150px 0px 0px 0px",
};

const showOnScroll = new IntersectionObserver(function (entries) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    else {
      entry.target.classList.add("active");
      showOnScroll.unobserve(entry.target);
    }
  });
}, sliderOptions);
sliders.forEach(slider => {
  showOnScroll.observe(slider);
});
