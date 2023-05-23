// 스코프, 전역변수, 지역변수

// 스코프
// 변수의 영향 범위, 변수가 어디까지 영향을 끼칠 수 있는가

// 전역변수
// 전역 스코프에서 선언된 변수는 어디에서든지 참조할 수 있다.
let x = 10;

function printX() {
  console.log(x);
}

console.log(x); // 10
printX(); // 10

// 지역변수
// 스코프가 좀 더 작다.
// 지역 스코프에서 선언된 변수는 해당 함수 내에서만 참조할 수 있다.
// 바깥에서는 참조할 수 없는 값
function printY() {
  let y = 10;
  console.log(y);
}

console.log(y); // y가 정의되지 않았다.
printY();
