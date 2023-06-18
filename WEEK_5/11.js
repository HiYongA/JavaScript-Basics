// 카운트 상태 변경 함수 #1
// 함수가 호출될 때마다 호출된 횟수를 누적하여 출력하는 카운터를 구현해요!

// 카운트 상태 변수
let num = 0;

// 카운트 상태 변경 함수
const increase = function () {
  // 카운트 상태를 1만큼 증가시킨다.
  return ++num;
};

console.log(increase());
// num = 100; // 치명적인 단점이 있어요.
console.log(increase());
console.log(increase());

// 보완해야 할 사항
// 1. 카운트 상태 (num 변수의 값)
//  => increase 함수가 호출되기 전까지는 변경되지 않아야 한다.
// 2. 이를 위해서 count상태(num 변수의 값)는 increase 함수만이 변경할 수 있어야 한다.
// 3. 전역변수 num이라 생긴 문제이다. -> 지역 변수로 바꿔볼까?
