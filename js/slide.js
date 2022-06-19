$(document).ready(function () {
  var i = 0;
  $(".right").click(function () {
    // $(".img_wrap").animate({
    //   left: -1000
    // });
    // // 다음 3페이지로 안감 => 변수를 이용

    i++;
    // console.log(i);
    // 이렇게만 하면 콘솔로 찍었을때 계속 숫자증가--------->>여기까지는 됨
    if (i > 2) {
      i = 0;
      console.log(i);
    }
  });
});
