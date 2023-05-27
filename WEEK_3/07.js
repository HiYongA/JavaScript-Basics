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
