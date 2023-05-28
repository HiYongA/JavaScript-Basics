var obj1 = {
  outer: function () {
    console.log("test =>", this); // (1)
    var innerFunc = function () {
      console.log("test =>", this); // (2), (3)
    };
    // 함수로서의 호출
    innerFunc();

    var obj2 = {
      innerMethod: innerFunc,
    };
    // 메서드로서의 호출
    obj2.innerMethod();
  },
};
obj1.outer();

// 실행 결과 : (1) : obj1, (2) : 전역객체, (3) : obj2

// 화살표 함수(=this를 바인딩하지 않는 함수)
// ES6에서는 함수 내부에서 this가 전연객체를 바라보는 문제 때문에 화살표 함수를 도입함
// 일반 함수와 화살표 함수의 가장 큰 차이점은 무엇인가요? this binding여부!
let obj = {
  outer: function () {
    console.log(this); // (1) obj
    // 화살표 함수
    let innerFunc = () => {
      console.log(this); // (2) obj
    };
    innerFunc();
  },
};
obj.outer();
