import animate from "animateplus";
import "css/main-entry";
import "fonts/icomoon/style";
import "images/logo2.svg";
import "images/latestProject.jpg";
import "images/headshot.jpg";
import "images/cursor.png";
import "images/bank_tower.png";
import "images/office_development.png";
import "images/news-1.png";
import "images/news-2.png";
import "images/news-3.png";
// https://css-tricks.com/styling-based-on-scroll-position/
//https://developers.google.com/web/updates/2017/09/sticky-headers
//https://codepen.io/brissmyr/pen/egidw
/* Feature detection */

history.scrollRestoration = "manual";

var passiveIfSupported = false;

try {
  window.addEventListener(
    "test",
    null,
    Object.defineProperty({}, "passive", {
      get: function() {
        passiveIfSupported = { passive: true, capture: true };
      }
    })
  );
} catch (err) {}

const headerElement = document.querySelector("header");
window.addEventListener(
  "scroll",
  evt => {
    let scrollY = evt.srcElement.scrollingElement.scrollTop;
    if (scrollY > 32) {
      headerElement.classList.add("scrolled");
    } else {
      headerElement.classList.remove("scrolled");
    }
  },
  passiveIfSupported
);

const root = document.scrollingElement;
const aboutElement = document.querySelector("#about");
const mouseAnchor = document.querySelector(".mouse-scroll");

mouseAnchor.addEventListener("click", evt => {
  const from = root.scrollTop;
  const { top } = aboutElement.getBoundingClientRect();
  animate({
    easing: "in-quintic",
    duration: 500,
    change: progress => (root.scrollTop = from + progress * top)
  });
  evt.preventDefault();
});

animate({
  elements: "h1",
  duration: 1000,
  easing: "out-quintic",
  delay: 550,
  transform: ["translate(-200%)", "translate(0)"]
});

animate({
  elements: "h6",
  duration: 1000,
  easing: "out-quintic",
  delay: 900,
  transform: ["translate(-200%)", "translate(0)"]
});

if (module.hot) {
  module.hot.accept();
}
