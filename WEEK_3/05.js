// undefined : 값이 있어야 할 것 같은데 없는 경우, 자동으로 부여한다.
// 3가지 경우)
var a;
console.log(a); // (1) 값을 대입하지 않은 변수에 접근

var obj = { a: 1 };
console.log(obj.a); // 1
console.log(obj.b); // (2) 존재하지 않는 property에 접근
// console.log(b); // 오류 발생

var func = function () {};
var c = func(); // (3) 반환 값이 없는 function
console.log(c); // undefined

// null : '없음'을 명시적으로 표현할 때
// 주의 : typeof null
//       typeof null이 object인 것은 유명한 JS 자체 버그이다. 조심!!!
var n = null;
console.log(typeof n); // object

//동등연산자(equality operator)
console.log(n == undefined); // true
console.log(n == null); // true

//일치연산자(identity operator)
console.log(n === undefined); // false
console.log(n === null); // true
