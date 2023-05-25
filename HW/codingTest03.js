// 3. 문자열 내 마음대로 정렬하기
// 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/12915

// join() : 배열의 모든 값들을 연결한 문자열을 반환, unshift() : 배열 맨 앞에 요소를 추가, concat() : 문자열 결합

// 이번에는 문제 풀이 팁이 있어서 이 함수 저 함수를 사용해가며 꼭 스스로 풀기로 마음먹었다.
// ["sun", "bed", "car"], 1 이라면 → ["usun", "ebed", "acar"]
// 1. 위처럼 문자열 앞에, 인덱스에 해당하는 문자를 붙이는 기능은 어찌어찌 concat()함수로 만들었는데,
// 문제는 배열로 안 들어간다는거.. 배열 메소드를 사용해서 데이터 타입이 object여야 하는데 string이라는 거였다.
// answer = strings[i][n].concat(strings[i]);
// 2. 위 문제를 해결하기 위해 타입 변환을 시도했었고, 그 이후에는 많은 시간을 할애한 탓에 튜터님의 해설 영상을 보고 풀기로 했다.
// 몇 시간을 끙끙대며 꾸역꾸역 어찌어찌 겨우 만들어 낸 나와는 달리 튜터님 풀이는 정말 신박했다. 와! 이제야 소화가 잘되는 느낌.!

// 풀이)
function solution(strings, n) {
  let answer = [];
  // 1. 문자열 가장 앞 글자를 붙인 배열 만들기
  for (let i = 0; i < strings.length; i++) {
    // car -> a + car = acar
    strings[i] = strings[i][n] + strings[i];
  }
  // 2. 해당 배열을 사전순으로 정렬(sort)
  // array.sort(정렬 순서를 정의하는 함수)메소드 :
  // 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환한다.
  strings.sort();
  // console.log(strings);
  // 3. 앞글자 제거 후 리턴
  for (let j = 0; j < strings.length; j++) {
    // replace(바꿀 요소, 바뀐 요소) : 문자열 대체
    // "": 앞에 요소를 제거한다는 의미
    strings[j] = strings[j].replace(strings[j][0], "");
    // 제거된 요소를 하나씩 추가하여 배열을 완성한다.
    answer.push(strings[j]);
  }
  return answer;
}

console.log(solution(["sun", "bed", "car"], 1));
console.log(solution(["abce", "abcd", "cdx"], 2));
