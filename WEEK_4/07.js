// 가장 좋은 방법 -> bind메서드를 활용
// bind : this를 바인딩해서 새로운 함수를 return 해준다.
var obj1 = {
  name: "obj1",
  func: function () {
    console.log(this.name);
  },
};
// 함수 자체를 obj1에 바인딩
// 원래 선언해놓은 그 this를 bind한 거!
// obj1.func를 실행할 때 무조건 this는 obj1로 고정해줘!
setTimeout(obj1.func.bind(obj1), 1000);

var obj2 = { name: "obj2" };
// 함수 자체를 obj2에 바인딩
// 위 this뿐만 아니라 어떤 this든 원하는 대로 bind한 거!
// obj1.func를 실행할 때 무조건 this는 obj2로 고정해줘!
setTimeout(obj1.func.bind(obj2), 1500);
