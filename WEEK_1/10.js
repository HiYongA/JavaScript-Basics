// 조건문
// - if, else if, else, switch

// 1. if문
// if (true 또는 false가 나올 수 있는 조건) {
//   // main logic
// }

let x = 10;

// 1-1
if (x > 0) {
  // main logic
  console.log("x는 양수입니다.");
}

// 1-2
// y의 길이가 5보다 크거나 같으면 길이를 콘솔로 출력
let y = "hello world";
if (y.length >= 5) {
  console.log(y.length);
}

// 2. if - else문
if (x > 0) {
  // main logic #1
  console.log("x는 양수입니다."); // x는 양수입니다.
} else {
  // main logic #2
  console.log("x는 음수입니다.");
}

// 3. if - else if - else문
if (x < 0) {
  // main logic #1
  console.log("1");
} else if (x >= 0 && x < 10) {
  // main logic #2
  console.log("2");
} else {
  // main logic #3
  console.log("3"); // 3
}

// 4. switch
// 변수의 값에 따라 여러 개의 경우(case) 중 하나를 선택
// default : 모든 경우에 맞지 않는 경우에 실행되는 코드
let fruit = "사과";

switch (fruit) {
  case "사과":
    console.log("사과입니다.");
    break;
  case "바나나":
    console.log("바나나입니다.");
    break;
  case "오렌지":
    console.log("키위입니다.");
    break;
  default:
    console.log("해당하는 과일이 없습니다.");
    break;
}
