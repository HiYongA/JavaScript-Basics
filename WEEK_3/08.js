// 명시적 this binding
// call, apply, bind
// 지금은 전역 객체를 바라보는 현상에서 명시적 바인딩을 함!
// call : 기존에 있었던 메서드 뒤에 붙어서 즉시 실행을 해주되
// 앞에 this로 묶을 객체를 붙여주고 나서 나머지 매개변수를 넣어주면 된다.
var func = function (a, b, c) {
  console.log(this, a, b, c);
};

// no binding
func(1, 2, 3); // Window{ ... } 1 2 3

// 명시적 binding
// func 안에 this에는 {x: 1}이 binding돼요
func.call({ x: 1 }, 4, 5, 6); // { x: 1 } 4 5 6

// apply : call랑 같으나 다른점은 뒤에 있는 매개변수를 대괄호로 묶어주는 것만 다름!
func.apply({ x: 1 }, [4, 5, 6]); // { x: 1 } 4 5 6
