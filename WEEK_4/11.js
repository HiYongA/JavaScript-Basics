// 비동기 작업의 동기적 표현(2) - Promise(2)
// Promise 리팩토링
// refactoring
// re : 다시, factoring : 짓는다. 구조화를 한다.
// 비효율적인 코드를 효율적인 코드로 변경하는 작업을 말한다.

var addCoffee = function (name) {
  return function (prevName) {
    // 이 안에서도 새롭게 Promise를 만든다.
    return new Promise(function (resolve) {
      setTimeout(function () {
        var newName = prevName ? `${prevName}, ${name}` : name;
        var name = console.log(newName);
        resolve(newName);
      }, 500);
    });
  };
};

// 2번째 return을 실행하려면 ()을 한번 더 적어야 한다.
addCoffee("에스프레소")()
  .then(addCoffee("아메리카노"))
  .then(addCoffee("카페모카"))
  .then(addCoffee("카페라떼"));

// 출력 결과
// 에스프레소
// 에스프레소, 아메리카노
// 에스프레소, 아메리카노, 카페모카
// 에스프레소, 아메리카노, 카페모카, 카페라떼
