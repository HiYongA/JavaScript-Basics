// forEach, map, filter, find

// 3-7. forEach() : 배열의 각 요소에 대해 콜백 함수를 실행한다.
let numbers = [4, 2, 3, 1, 5];
// 매개변수 자리에 함수를 넣는 것 : 콜백 함수
numbers.forEach(function (item) {
  console.log(item);
});

// 3-8. map()
// 기존에 있었던 이 배열을 가공해서 새로운 배열을 생산해 내는 역할
// 항상 원본 배열의 길이만큼이 return된다.
let newNumbers = numbers.map(function (item) {
  return item * 2;
});
console.log(newNumbers); // [ 8, 4, 6, 2, 10 ]

// 3-9. filter()
// 배열의 각 요소에 대해 콜백 함수를 실행하고, 그 결과가 true인 요소만 새로운 배열로 반환한다.
numbers = [4, 1, 5, 4, 5];

let filteredNumbers = numbers.filter(function (item) {
  return item !== 5;
});
console.log(filteredNumbers); // [4, 1, 4 ]

// 3-10. find() : true인 첫 번째 요소만 반환한다.
let foundNumber = numbers.find(function (item) {
  return item > 3;
});

console.log(foundNumber); // 4
