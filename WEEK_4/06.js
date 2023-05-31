// [콜백 함수 내부의 this에 다른 값 바인딩하기]
// 콜백 함수 내부에서 this가 문맥에 맞는 객체를 바라보게 할 수는 없을까요?
// 콜백 함수 내부의 this에 다른 값을 바인딩하는 방법

// closure 방식이 들어 있음!
var obj1 = {
  name: "obj1",
  func: function () {
    var self = this; //이 부분!
    // 바깥에서 참조하고 있는 self가 아직 살아 있음 (클로저 방식)
    // -> return값을 출력한 건데, 바깥에 있는 self.name을 출력한 거예요.
    return function () {
      console.log(self.name); // 1초 뒤에 obj1가 출력
    };
  },
};

// 단순히 함수만 전달한 것이기 때문에, obj1 객체와는 상관이 없어요.
// 메서드가 아닌 함수로서 호출한 것과 동일하죠.
// func은 실행한 결과를 담았어요.
// 그 말은 return한 값을 func() <- 이 소괄호 안에 담았다는 말!
var callback = obj1.func();
setTimeout(callback, 1000);

// ---------------------------------

// 이 방법은 조금 번거롭긴 해도
// this를 우회적으로나마 활용하여 원하는 객체를 바라보게 할 수 있음
var obj1 = {
  name: "obj1",
  func: function () {
    var self = this; //이 부분!
    return function () {
      console.log(self.name);
    };
  },
};

// obj1의 func를 직접 아래에 대입해보면 조금 더 보기 쉽습니다!
var obj2 = {
  name: "obj2",
  func: obj1.func,
};
var callback2 = obj2.func();
setTimeout(callback2, 1500);

// 역시, obj1의 func를 직접 아래에 대입해보면 조금 더 보기 쉽습니다!
var obj3 = { name: "obj3" };
var callback3 = obj1.func.call(obj3);
setTimeout(callback3, 2000);
