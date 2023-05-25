// 1. 문자열 비교하기
// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12916?language=javascript

// toUpperCase()메소드 : 문자열을 대문자로 변환한 값을 반환
// toLowerCase()메소드 : 문자열을 소문자로 변환한 값을 반환

let s = [...s.toLowerCase()]; // 출력값: ['p', 'p', 'o', 'o', 'o', 'y', 'y']
// 여기까지는 구글링을 통해 '문자열 분리 및 배열 변환, 소문자로 변환'까지 해줬는데,
// 이후 조건문을 어떻게 사용해야할지 모르겠어서 정답 코드, 해설 영상을 보고 이해할 수 있었다.

// 1번째 풀이)
function solution(s) {
  let answer = true;
  // 1. 대문자로 통일
  s = s.toUpperCase();
  let num = 0;
  // 2. for문을 통해서 문자열의 요소 하나하나씩을 비교
  // 2-1. p, y와 비교
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "P") {
      // p이면 갯수 더하기 pp = 2
      num++;
    }
    if (s[i] === "Y") {
      // y이면 갯수 빼기 yy = -2
      num--;
    }
  }
  // 3. 개수 체크 (p와 y의 개수가 같은지를 체크) ppyy(2-2 = 0)
  if (num !== 0) {
    answer = false;
  }
  return answer;
}

// 한 줄로 완성된 2번째 풀이)
function solution(s) {
  return (
    s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
  );
  // s를 대문자로 반환하고 "P" 문자를 제거하고 남은 길이(개수) === "Y" 문자를 제거하고 남은 길이(개수)
  // str1 = "PPOOOYY", "000YY" === "PP000"
  // str2 = "PYY", "YY" !== "P"
  // ===: 일치연산자를 쓰면 true/false 값이 출력된다.
}

let str1 = "pPoooyY";
let str2 = "Pyy";

console.log(solution(str1)); // true
console.log(solution(str2)); // false
