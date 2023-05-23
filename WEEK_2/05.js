// 일급 객체로써의 함수 (2)
// (4) 객체의 프로퍼티로 함수를 할당
const person = {
  name: "John",
  age: 31,
  isMarried: true,
  // 화살표 함수
  // sayHello: () => {
  //   console.log(`Hello, My name is ${this.name}`);
  // },
  sayHello: function () {
    console.log(`Hello, My name is ${this.name}`); // this: person
  },
};
person.sayHello(); // Hello, My name is John

// 화살표 함수를 사용할 경우 this.name이 undefined로 반환된다.
// 이유는, 화살표 함수는 this를 바인딩하지 않는다.
// Hello, My name is undefined

// (5) 배열의 요소로 함수를 할당
const myArr = [
  function (a, b) {
    return a + b;
  },
  function (a, b) {
    return a - b;
  },
];
// 더하기
console.log(myArr[0](1, 3)); // 4
// 빼기
console.log(myArr[1](10, 7)); // 3

// --------------------------------------
// 예시)
function multiplyBy(num) {
  return function (x) {
    return x * num;
  };
}

function add(x, y) {
  return x + y;
}

// 리팩토링한다.
const multiplyByTwo = multiplyBy(2);
// const multiplyByTwo = function (x) {
//   return x * 2;
// };

const multiplyByThree = multiplyBy(3);
// const multiplyByTwo = function (x) {
//   return x * 3;
// };

console.log(multiplyByTwo(10)); // 20
console.log(multiplyByThree(10)); // 30

const result = add(multiplyByTwo(5), multiplyByThree(10));
console.log(`FINAL => ${result}`); // FINAL => 40
