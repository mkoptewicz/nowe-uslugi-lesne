const nav = document.querySelector(".nav-container");
const header = document.querySelector("header");
const headerOptions = {
 rootMargin:"-100% 0px 0px 0px"
};
const headerObserver = new IntersectionObserver(function (
  entries,
  headerObserver
) {
  entries.forEach(entry => {
    if(!entry.isIntersecting){
     nav.classList.add('nav-container--scrolled')
    } else {
     nav.classList.remove('nav-container--scrolled')
    }
  });
},
headerOptions);
headerObserver.observe(header);
