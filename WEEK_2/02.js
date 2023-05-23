// (4) 구조분해할당 : de + structuring (de + structure + ing)
// de => not, structure => 구조
// 배열이나, 객체의 속성

// (1) 배열의 경우
let [value1, value2] = [1, "new"];
console.log("1", value1); // 1 1
console.log("2", value2); // 2 new

let arr = ["value1", "value2", "value3", "value4"];
let [a, b, c, d = 4, e = 5, f] = arr;
console.log(a, b, c, d, e, f); // value1 value2 value3 value4 5 undefined

// (2) 객체인 경우
let user = {
  name: "nbc",
  age: 30,
};

// let { name, age } = user;
// console.log(name, age); // nbc 30

// 새로운 이름으로 할당
// let { name: newName, age: newAge } = user;
// console.log(newName, newAge); // nbc 30

let { name, age, birthday = "today" } = user;
console.log(name, age, birthday); // nbc 30 today
