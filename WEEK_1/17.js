// for, while -> ~ 동안 : 반복문
// for (초기값; 조건식; 증감식) {}

// i라는 변수는 0부터 시작할거야!
// i라는 변수가 10에 도달하기 전까지 계속할거야!
// i라는 변수는 한 사이클이 돌고 나면 1을 더할거야!
for (let i = 0; i < 10; i++) {
  console.log("for문 돌아가고 있음 =>" + i);
}

// 출력값:
// for문 돌아가고 있음 =>0
// for문 돌아가고 있음 =>1
// for문 돌아가고 있음 =>2
// for문 돌아가고 있음 =>3
// for문 돌아가고 있음 =>4
// for문 돌아가고 있음 =>5
// for문 돌아가고 있음 =>6
// for문 돌아가고 있음 =>7
// for문 돌아가고 있음 =>8
// for문 돌아가고 있음 =>9

// 배열과 for문은 짝꿍이다.
const arr = ["one", "two", "three", "four", "five"];

for (let i = 0; i < arr.length; i++) {
  console.log(i);
  console.log(arr[i]);
}

// 출력값:
// 0
// one
// 1
// two
// 2
// three
// 3
// four
// 4
// five

// ex) 0부터 10까지의 수 중에서 2의 배수만 콘솔로 출력하는 예시
for (let j = 0; j < 11; j++) {
  if (j >= 2) {
    if (j % 2 === 0) {
      // 2의 배수
      console.log(j + "는 2의 배수입니다!");
    }
  }
}

// 출력값:
// 2는 2의 배수입니다!
// 4는 2의 배수입니다!
// 6는 2의 배수입니다!
// 8는 2의 배수입니다!
// 10는 2의 배수입니다!

// for ~ in 문
// 객체의 속성을 출력하는 문법
let person = { name: "John", age: 30, gender: "male" };

// person['key']
for (let key in person) {
  console.log(key + ": " + person[key]);
}

// 출력값:
// name: John;
// age: 30;
// gender: male;
