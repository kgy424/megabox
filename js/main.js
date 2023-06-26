//banner slider
const swiper = new Swiper('.slider', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

//movie
const swiper2 = new Swiper(".swiper-container2", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 10,

  breakpoints: {
    // 뷰포터의 넓이가 320px보다 클 때 >= 320px
    0: {
      slidesPerView: 1.4,
      spaceBetween: 24
    },
    // 뷰포터의 넓이가 480px보다 클 때 >= 480px
    600: {
      slidesPerView: 2,
      spaceBetween: 24
    },
    // 뷰포터의 넓이가 640px보다 클 때 >= 640px
    768: {
      slidesPerView: 3,
      spaceBetween: 24
    },
    // 뷰포터의 넓이가 960px보다 클 때 >= 960px
    960: {
      slidesPerView: 4,
      spaceBetween: 24
    }
  }
});

//movie tab menu
let movBtn = $('.movie_tit ul li');
let movCont = $('.movie_chart>div');

movCont.hide().eq(0).show();
movBtn.click(function (e) {
  e.preventDefault();
  let target=$(this);//클릭한 li
  let index=target.index();//클릭한 li의 index번호 추출
  console.log(index)
  movCont.hide().eq(index).show();//모두 지우고 해당 index번호의 슬라이드 보이기
  movBtn.removeClass('active')//모든 li에 active 지우기
  target.addClass('active')//클릭한 li에 active 추가
});

//공지사항 notice
//전체공지-영화관광지

let tabmenu=$(".notice");

tabmenu.find("ul>li>ul").hide();
tabmenu.find("ul>li.active>ul").show();

tabmenu.find("ul>li>a").click(function(eve){
  eve.preventDefault();
  let target=$(this);
  //.next() --> 내 바로 아래 동생
  //.nextAll() --> 내 바로 아래 동생들
  tabmenu.find("ul>li>a").next().hide();
  target.next().show();

  tabmenu.find("ul>li").removeClass("active");
  // .parent() --> 상위 요소(부모)를 부를 때
  // .parents() --> 모든 상위 요소(부모)를 부를 때
  target.parent().addClass("active");
})
