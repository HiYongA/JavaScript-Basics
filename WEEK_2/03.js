// (5) 단축 속성명 : property shorthand
const name = "nbc";
const age = 30;

// key - value가 똑같으면 생략할 수 있다.
const obj = { name, age };
const obj1 = { name: name, age: age };

// (6) 전개 구문 = spread operator
// 이 구조를 벗어버리고 새로운 구조로 덧입혀야 될 때 쓰인다.
// destructuring과 함께 가장 많이 사용되는 es6 문법 중 하나!
let arr = [1, 2, 3];
// console.log(arr); // [ 1, 2, 3 ]
// console.log(...arr); // 1 2 3

let newArr = [...arr, 4];
console.log(arr); // [ 1, 2, 3 ]
console.log(newArr); // [ 1, 2, 3, 4 ]

// 객체
let user = {
  name: "nbc",
  age: 30,
};

let user2 = { ...user };
console.log(user); // { name: 'nbc', age: 30 }
console.log(user2); // { name: 'nbc', age: 30 }

// (7) 나머지 매개변수 (rest parameter) / args: arguments의 약자
function exampleFunc(a, b, c, ...args) {
  console.log(a, b, c); // 1 2 3
  console.log(args); // [ 4, 5, 6, 7 ]
  console.log(...args); // 4 5 6 7
}

exampleFunc(1, 2, 3, 4, 5, 6, 7);

// (8) 템플릿 리터럴 (Template Literal)
const testValue = "안녕하세요!";
console.log(`Hello World ${testValue}`); // Hello World 안녕하세요!
// 멀티라인 사용 가능
console.log(`
    Hello
        My name is Javascript!!!!

        Nice to meet you!!!
`);

// 출력값:
// Hello
// My name is Javascript!!!!

// Nice to meet you!!!

// (9) named export vs default export
// default Export
// name.js
const Name = () => {};

export default Name;

// - other file
// 아무 이름으로 import 가능
import newName from "name.js";
import NameFromOtherModule from "name.js";

// - named export
// 하나의 파일에서 여러 변수/클래스 등을 export 하는 것이 가능

export const Name1 = () => {};

export const Name2 = () => {};

// other file
import { Name1, Name2 } from "name.js";
import { newName } from "name.js"; // x

// 다른 이름으로 바꾸려면 as 사용
import { Name1 as newName, Name2 } from "name.js";

// default export 처럼 가져오려면 * 사용
import * as NameModule from "name.js";

console.log(NameModule.Name1);
