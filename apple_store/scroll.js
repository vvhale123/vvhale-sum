function scrollTrigger(selector, options = {}) {
  let els = document.querySelectorAll(selector);
  els = Array.from(els);
  els.forEach((el) => {
    addObserver(el, options);
  });
}

function addObserver(el, options) {
  if (!("IntersectionObserver" in window)) {
    if (options.cb) {
      options.cb(el);
    } else {
      entry.target.classList.add("active");
    }
    return;
  }
  let observer = new IntersectionObserver((entries, observer) => {
    //this takes a callback function which receives two arguments: the elemts list and the observer instance
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (options.cb) {
          options.cb(el);
        } else {
          entry.target.classList.add("active");
        }
        observer.unobserve(entry.target);
      }
    });
  }, options);
  observer.observe(el);
}
// Example usages:

scrollTrigger(".ani-box", {
  rootMargin: "-200px",
});

// tab 코드

// $(document).ready(function () {
//   // $(".tab-link").click(function () {
//   //   $(".content").removeClass("tab-active");
//   //   $(".content[data-id='" + $(this).attr("data-id") + "']").addClass(
//   //     "tab-active"
//   //   );
//   //   $(".tabMenu").removeClass("active-a");
//   //   $(this).parent().find(".tab-menu").addClass("active-a");
//   // });
// });

function clickTabEvent(tabData, tabNum) {
  document.getElementById("tab1").classList.remove("tab-active");
  document.getElementById("tab2").classList.remove("tab-active");
  document.getElementById("tab3").classList.remove("tab-active");
  // 해당 부분 for문으로 변경요망

  document.getElementById("tab_1").classList.remove("active-a");
  document.getElementById("tab_2").classList.remove("active-a");
  document.getElementById("tab_3").classList.remove("active-a");

  document.getElementById(tabData).classList.add("tab-active");

  document.getElementsByClassName("tab-menu").className = "tab-menu tab-item";

  document.getElementById(tabNum).classList.add("active-a");
}

var test1 = document.getElementById("tab_1");
test1.onclick = function () {
  clickTabEvent("tab1", "tab_1");
};
var test2 = document.getElementById("tab_2");
test2.onclick = function () {
  clickTabEvent("tab2", "tab_2");
};
var test3 = document.getElementById("tab_3");
test3.onclick = function () {
  clickTabEvent("tab3", "tab_3");
};
var test4 = document.getElementById("tab_4");
test4.onclick = function () {
  clickTabEvent("tab4", "tab_4");
};
// for문으로 바꿔보기!!

// 신규 탭
// const tabList = document.querySelectorAll(".content");

// for (var i = 0; i < 3; i++) {
//   tabList[i].querySelector(".tab-item").addEventListener("click", function (e) {
//     e.preventDefault();
//     for (var j = 0; j < tabList.length; j++) {
//       tabList[j].classList.remove("tab-active");
//     }
//     this.parentNode.classList.add("tab-active");
//   });
// }
