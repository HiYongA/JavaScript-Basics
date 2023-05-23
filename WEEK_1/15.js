// 배열

// 1. 생성
// 1-1. 기본 생성
let fruits = ["사과", "바나나", "오렌지"];

// 1-2. 크기 지정
let numbers = new Array(5);
console.log(fruits.length); // 3
console.log(numbers.length); // 5

// 2. 요소 접근
console.log(fruits[0]); // "사과"
console.log(fruits[1]); // "바나나"
console.log(fruits[2]); // "오렌지"

// 3. 배열 메소드
// 3-1. push() : 추가
fruits = ["사과", "바나나"];
fruits.push("오렌지");
console.log(fruits); // ["사과", "바나나", "오렌지"]

// 3-2. pop() : 마지막 요소를 삭제
fruits.pop();
console.log(fruits); // ["사과", "바나나"]

// 3-3. shift() : 첫번째 요소를 삭제
fruits = ["사과", "바나나", "오렌지"];
fruits.shift();
console.log(fruits); // ["바나나", "오렌지"]

// 3-4. unshift() : 맨 앞에 요소를 추가
fruits = ["바나나", "오렌지"];
fruits.unshift("사과");
console.log(fruits); // ["사과", "바나나", "오렌지"]

//  3-5. splice() : 배열의 요소를 삭제하거나, 새로운 요소를 추가할 수 있다.
fruits = ["사과", "바나나", "오렌지"];
fruits.splice(1, 1, "포도"); // 첫번째 요소부터 시작해서, 1개를 삭제하고, 포도로 갈아 끼워줘!
console.log(fruits); // ["사과", "포도", "오렌지"]

// 3-6. slice() : 배열의 일부분을 새로운 배열로 만든다.
fruits = ["사과", "바나나", "키위"];
let sliceFruits = fruits.slice(1, 2); // 2번째 요소부터 3번째 요소까지 새로운 배열로 만들어서 반환해줘
console.log(sliceFruits); // ["바나나"]
