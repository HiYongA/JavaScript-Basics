// while문
let i = 0;
// while(조건) {
//   // 메인로직
//   // 증감
// }

// 0부터 9까지의 숫자를 출력
while (i < 10) {
  console.log(i);
  i++;
}

// while문을 활용해서, 3 초과 100 미만의 숫자 중 5의 배수인 것만 출력하는 예
let j = 3;
while (j < 100) {
  if (j % 5 === 0 && j >= 5) {
    console.log(j + "는 5의 배수입니다!");
  }
  j++;
}

// do ~ while
// 0부터 9까지의 숫자를 출력
// 일단 한 번은 코드를 실행하고, 그 후에 조건식을 체크하여 반복 여부를 결정한다.
let z = 0;
do {
  console.log(z);
  z++;
} while (i > 10);

// break문
// break문을 만나면 for문을 stop한다.
// 0부터 4까지의 숫자만 출력
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

// continue문
// 그 다음 순서로 넘어간다.
// 5를 제외한 0부터 9까지의 숫자를 출력
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}
