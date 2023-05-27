//효율
var numbers = [10, 20, 3, 16, 45];

// apply -> ({}, [])
var max = Math.max.apply(null, numbers);
var min = Math.min.apply(null, numbers);
console.log("apply => ", max, min); // apply => 45, 3

// 펼치기 연산자(Spread Operation)를 통하면 더 간편하게 해결도 가능해요
console.log(...numbers); // 10, 20, 3, 16, 45
const numbers = [10, 20, 3, 16, 45];
const max = Math.max(...numbers);
const min = Math.min(...numbers);
console.log("spread => ", max, min); // spread => 45, 3
