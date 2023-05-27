// 호출주체가 있는 경우에서도 똑같이 처리할 수 있음
var obj = {
  a: 1,
  method: function (x, y) {
    console.log(this.a, x, y);
  },
};

// method 함수 안의 this는 항상 obj!!
obj.method(2, 3); // 1 2 3
// 명시적 binding
obj.method.call({ a: 4 }, 5, 6); // 4 5 6
obj.method.apply({ a: 4 }, [5, 6]); // 4 5 6
