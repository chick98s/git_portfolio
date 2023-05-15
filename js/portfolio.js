//javascript
const html = document.querySelector("html");
const body = document.querySelector("body");
const Header = document.querySelector("header");

const loader = document.querySelector(".loading");
const items = document.querySelectorAll(".item");

const content = "PortFolio";
const text = document.querySelector(".typing");

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
document.addEventListener('scroll', function(){
  let scroll = window.scrollY;
  if(scroll > 50) {
    Header.classList.add('active');
  }
  else {
    Header.classList.remove('active');
  }
});

//nav의 메뉴 색상 이벤트
function handleIndicator(el) {
  items.forEach(item => {
    item.classList.remove("is-active");
    item.removeAttribute("style");
  });

  el.classList.add("is-active");
  el.style.color = el.getAttribute('active-color');
}

items.forEach((item, index) => {
  item.addEventListener('click', (e) => {
    handleIndicator(e.target)});
  item.classList.contains('is-active') && handleIndicator(item);
});

//토글메뉴
function tgMenu() {
  let tgmenu = document.querySelector(".nav_toggle");
  tgmenu.classList.toggle("active");

  let menu = document.querySelector(".nav");
  menu.classList.toggle("active");
}

//스크롤 이벤트
function onScroll() {
  var $animation_elements = $(".onScroll");
  var $window = $(window);

  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = window_top_position + window_height;

  $.each($animation_elements, function () {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = element_top_position + element_height;

    if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
      $element.addClass("active");
    } 
    else {
      $element.removeClass("active");
    }
  });
}

function profileOn() {
  //profile의 좌표를 구함
  var pfTop = $("#profile").offset().top;
  //y축 방향으로 스크롤한 거리
  var scroll = document.documentElement.scrollTop; 
  $("body")[scroll < pfTop ? "addClass" : "removeClass"]("top");
}

function skillsChart() {
  var pfTop = $("#profile").offset().top;
  var skTop = $("#skill").offset().top;
  var scroll = document.documentElement.scrollTop;

  $("#skill")[scroll > skTop - 500 ? "addClass" : "removeClass"]("on");

  if (scroll > pfTop + 100) {
    $(".chart").easyPieChart({
      barColor: "#EC2027",
      trackColor: "#ccc",
      scaleColor: false,
      lineCap: "round",
      lineWidth: 20, //차트선 두께
      size: 180, //차트크기
      onStart: $.noop,
      onStop: $.noop,
      onStep: function (from, to, percent) {
        $(this.el).find(".percent").text(Math.round(percent));
      },
    });
  }
}

//jquery
$(function () {
  $(window).on({
    load: function () {
      onScroll();
    },
    resize: function () {
      onScroll();
    },
    scroll: function () {
      skillsChart();
      onScroll();
    },
  });
});
