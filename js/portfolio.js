const html = document.querySelector("html");
const body = document.querySelector("body");
const loader = document.querySelector(".loading");

const marker = document.querySelector(".marker");
const items = document.querySelectorAll(".item");

const content = "PortFolio";
const text = document.querySelector(".typing");
const project = document.querySelectorAll(".project");

let i = 0;
html.style.overflow = "hidden"; //로딩중 스크롤 방지

//로딩화면
window.addEventListener("load", () => {
  //로딩속도 구현
  setTimeout(() => {
    loader.style.opacity = "0";
    html.style.overflow = "auto"; //스크롤 방지 해제

    setTimeout(() => {
      loader.style.display = "none";
    }, 400);
  }, 3000);
});

//타이핑
function typing() {
  if (i < content.length) {
    let txt = content.charAt(i);
    text.innerHTML += txt;
    i++;
  }
}
setInterval(typing, 300);

//헤더 스크롤 이벤트
var didScroll;
var lastScrollTop = 0;
var delta = 5; //동작의 구현이 시작되는 위치
var navbarHeight = $("header").outerHeight();

$(window).scroll(function(event) {
  didScroll = true;
});

setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

//동작을 구현
function hasScrolled() {
  var st = $(this).scrollTop();

  if (Math.abs(lastScrollTop - st) <= delta) {
    return;
  }

  if (st > lastScrollTop && st > navbarHeight) {
    //스크롤 down
    $("header").removeClass("nav-down").addClass("nav-up");
  } 
  else {
    //스크롤 up
    if (st + $(window).height() < $(document).height()) {
      $("header").removeClass("nav-up").addClass("nav-down");
    }
  }
  lastScrollTop = st;
}

//nav의 이벤트
function handleIndicator(el) {
  items.forEach(item => {
    item.classList.remove('is-active');
    item.removeAttribute('style');
  });

  marker.style.width = '${el.offsetWidth}px';
  marker.style.left = '${el.offsetLeft}px';
  marker.style.backgroundColor = el.getAttribute('active-color');

  el.classList.add('is-active');
  el.style.color = el.getAttribute('active-color');
}

items.forEach(item => {
  item.addEventListener('click', (e) => {handleIndicator(e.target)});
  item.classList.contains('is-active') && handleIndicator(item);
});