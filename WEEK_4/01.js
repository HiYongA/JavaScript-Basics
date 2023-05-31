// 콜백 함수
// 제어권을 넘겨줄테니, 너가 알고 있는 그 로직으로 처리해줘!
// ex1)
setTimeout(function () {
  console.log("hello");
}, 1000);

//ex2)
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (number) {
  console.log(number);
});
