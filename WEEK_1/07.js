// 함수 = function(기능)
// 함수의 input -> 매개변수(매개체가 되는 변수!)
// 반환값 output -> return문 뒤에 오는 값

// 1. 함수 선언문
function add(매개변수) {
  // 함수 내부에서 실행할 로직
}

// 두 개의 숫자를 입력 받아서 덧셈을 한 후 내보내는 함수
function add(x, y) {
  return x + y;
}

// 2. 함수 표현식
let add = function (x, y) {
  return x + y;
};

// 함수를 호출한다(= 사용한다)
// 함수명() -> add(입력값)
console.log(add(2, 3)); // 5

let functionResult = add(3, 4);
console.log(functionResult); // 7

// add2를 가지고 10과 20을 더한 값을 출력해보세요!
let functionResult2 = add(10, 20);
console.log(functionResult2); // 30
