//javascript
const html = document.querySelector("html");
const body = document.querySelector("body");
const Header = document.querySelector("header");

const loader = document.querySelector(".loading");
const items = document.querySelectorAll(".item");

const content = "PortFolio\u00A0";
const text = document.querySelector(".typing");

const menuTrigger = document.querySelector(".nav_toggle");

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

//nav의 메뉴 이벤트
function handleIndicator(el) {
  items.forEach((item) => {
    item.classList.remove("is-active");
    item.removeAttribute("style");
  });

  el.classList.add("is-active");
}

items.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    handleIndicator(e.target);
  });
  item.classList.contains("is-active") && handleIndicator(item);
});

//a태그 active 유지
Array.prototype.forEach.call(items, function (elem) {
  elem.addEventListener("click", function () {
    Array.prototype.forEach.call(items, function (elem) {
      elem.classList.remove("active");
    });
    this.classList.add("active");
  });
});

//토글메뉴
const button=()=> {
  const burger = document.querySelector('.nav_toggle');
  burger.addEventListener('click', ()=> {
    burger.classList.toggle('toggle');
  });
}

button();

$(function () {
  //헤더 스크롤 이벤트
  var lastScrollTop = 0,
    delta = 15;
  $(window).scroll(function (event) {
    var st = $(this).scrollTop();

    if (Math.abs(lastScrollTop - st) <= delta) return; // 스크롤값을 받아서 리턴한다.
    if (st > lastScrollTop && lastScrollTop > 0) {
      // scroll down
      $("#header").css("top", "-80px"); // 스크롤을 내렸을때 #header의 CSS 속성중 top 값을 -80px로 변경한다.
    } else {
      // scroll up
      $("#header").css("top", "0px"); // 스크롤을 올렸을때 #header의 CSS 속성중 top 값을 0px로 변경한다.
    }
    lastScrollTop = st;
  });

  //햄버거 버튼
  $('.nav_toggle').click(function(){
    if($(".nav").css("display") == "none"){
      $(".nav").show();
    }
    else {
      $(".nav").hide();
    }
  });

  //skill 버튼
  $(".skills li:eq(0)").click(function (e) {
    $(".s_li:eq(0)").show();

    $(".s_li:eq(1)").hide();
    $(".s_li:eq(2)").hide();
    $(".s_li:eq(3)").hide();
    e.preventDefault();
  });

  $(".skills li:eq(1)").click(function (e) {
    $(".s_li:eq(1)").show();

    $(".s_li:eq(0)").hide();
    $(".s_li:eq(2)").hide();
    $(".s_li:eq(3)").hide();
    e.preventDefault();
  });

  $(".skills li:eq(2)").click(function (e) {
    $(".s_li:eq(2)").show();

    $(".s_li:eq(0)").hide();
    $(".s_li:eq(1)").hide();
    $(".s_li:eq(3)").hide();
    e.preventDefault();
  });

  $(".skills li:eq(3)").click(function (e) {
    $(".s_li:eq(3)").show();

    $(".s_li:eq(0)").hide();
    $(".s_li:eq(1)").hide();
    $(".s_li:eq(2)").hide();
    e.preventDefault();
  });
});
