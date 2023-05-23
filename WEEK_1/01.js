// 변수, 상수
// 변수: 메모리에 저장한다. 읽어들여서 재사용한다.

// 변수의 5가지 주요 개념
// 변수 이름 : 저장된 값의 고유 이름
// 변수 값 : 변수에 저장된 값
// 변수 할당 : 변수에 값을 저장하는 행위
// 변수 선언 : 변수를 사용하기 위해 컴퓨터에 알리는 행위
// 변수 참조 : 변수에 할당된 값을 읽어오는것

// 변수를 선언할 수 있는 3가지 방법 : var, let, const
// 1. var
var myVar = "Hello";
var myVar = "World";
console.log(myVar); // "World"

// 2. let
let myLet = "Hello";
myLet = "World"; // 기존 값을 덮어쓰기
console.log(myLet); // "World"

// 3. const
const myConst = "Hello";
myConst = "World"; // 오류 발생
console.log(myConst);
