// 무슨 제어권?
// 2. 인자에 대한 제어권을 갖는다.
// map() : 배열에 대한 api, 배열에 대한 메서드
// map함수의 역할 :
// 배열의 하나하나를 순회하면서 가공해서 새로운 배열을 return한다.
// 기존 배열을 변경하지 않고 새로운 배열을 생성한다.

// map 함수에 의해 새로운 배열을 생성해서 newArr에 담고 있네요!
// index, currentValue : 사람이 이해할 수 있는 변수명일 뿐
var newArr = [10, 20, 30].map(function (currentValue, index) {
  console.log(currentValue, index);
  return currentValue + 5;
});

// 결과는 뭐가 될까?
console.log(newArr);

// -- 실행 결과 --
// 10 0
// 20 1
// 30 2
// [ 15, 25, 35 ]
