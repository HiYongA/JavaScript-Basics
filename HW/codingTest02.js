// 2. 반복문, 조건문 연습하기
// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/76501

// signs[i]가 참이면, absolutes[i]의 실제 정수가 양수임을, 그렇지 않으면 음수임을 의미

function solution(absolutes, signs) {
  // 1. return해야 하는 answer 생성
  let answer = 0;
  // 2. 두 배열의 비교해 가면서 값을 더하거나 빼줄 것
  // 2-1. 두 배열은 길이가 같음
  for (let i = 0; i < absolutes.length; i++) {
    // 부호(+, -)에 따른 처리
    signs[i] ? (answer += absolutes[i]) : (answer -= absolutes[i]);
  }
  // 3. 출력
  return answer;
}

console.log(solution([4, 7, 12], [true, false, true])); // 9
console.log(solution([1, 2, 3], [false, false, true])); // 0
