function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
}
function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    let a = formatNumber(Math.floor(progress * (end - start) + start));
    obj.innerHTML = a;
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

const obj = document.getElementsByClassName("impressive-item-number-count");
let end = document.getElementsByClassName("impressive-item-number-count");
for (let i = 0; i < end.length; i++) {
  end[i].innerHTML = end[i].innerHTML.replace(/ /g, "");
}
// jQuery('.impressive-list').one('inview', function (event, visible) {
//     if (visible == true) {
//        animateValue(obj[0], 0, end[0].innerHTML, 4000);
//       animateValue(obj[1], 0, end[1].innerHTML, 5000);
//       animateValue(obj[2], 0, end[2].innerHTML, 4000);
//       animateValue(obj[3], 0, end[3].innerHTML, 5000);
//     }
// });
let flag = 1;
$(window).scroll(function () {
  var hT = $("#impressive-list").offset().top,
    hH = $("#impressive-list").outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
  var hT1 = (hT * 60) / 100;
  var hT2 = (hT * 70) / 100;
  console.log(Math.round(hT1), Math.round(wS));
  //   (hT + hH - wH)

  if (
    Math.round(wS) >= Math.round(hT1) &&
    Math.round(wS) <= Math.round(hT2) &&
    flag == 1
  ) {
    // const obj = document.getElementsByClassName("impressive-item-number-count");
    // let end = document.getElementsByClassName("impressive-item-number-count");
    // for (let i = 0; i < end.length; i++) {
    //   end[i].innerHTML = end[i].innerHTML.replace(/ /g, "");
    // }
    animateValue(obj[0], 0, end[0].innerHTML, 4000);
    animateValue(obj[1], 0, end[1].innerHTML, 5000);
    animateValue(obj[2], 0, end[2].innerHTML, 4000);
    animateValue(obj[3], 0, end[3].innerHTML, 5000);
    flag = 0;
    // $('.count').each(function() {
    //     $(this).prop('Counter', 0).animate({
    //         Counter: $(this).text()
    //     }, {
    //         duration: 900,
    //         easing: 'swing',
    //         step: function(now) {
    //             $(this).text(Math.ceil(now));
    //         }
    //     });
    // }); {
    //     $('.count').removeClass('count').addClass('counted');
    // };
  }
});
// $(document).on("scroll", function () {

//   if ($(this).scrollTop() >= $("#impressive-list").position().top) {

//     animateValue(obj[0], 0, end[0].innerHTML, 4000);
//     animateValue(obj[1], 0, end[1].innerHTML, 5000);
//     animateValue(obj[2], 0, end[2].innerHTML, 4000);
//     animateValue(obj[3], 0, end[3].innerHTML, 5000);
//   console.log(1);

//   }
// });

//   console.log(parseInt(end));
