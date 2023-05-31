// 무슨 제어권?
// 1. 호출 시점에 대한 제어권을 갖는다.
// setInterval() : 반복해서 매개변수로 받은 콜백함수의 로직을 수행
var count = 0;
var cbFunc = function () {
  console.log(count);
  // ++한 count의 값이 4보다 크면 타이머를 종료해라!
  if (++count > 4) clearInterval(timer);
};

// timer : 콜백 내부에서 사용할 수 있는 '어떤 게 돌고있는지'
// 알려주는 id값
// 0.3초에 대한 제어권을 setInterval()이 가지고 있다.
var timer = setInterval(cbFunc, 300);

// 실행 결과
// 0 (0.3sec)
// 1 (0.6sec)
// 2 (0.9sec)
// 3 (1.2sec)
// 4 (1.5sec)

// → 원래 cbFunc()를 수행한다면 그 `호출주체`와 `제어권`은 모두 사용자가 되죠.
// → setInterval로 넘겨주게 되면 그 `호출주체`와 `제어권`은 모두 setIntervals이 돼요.
