// 기억하기!
// -> 비동기적인 요소를 왜 동기적으로 바꾸려고 하는가?
// : 순서를 보장할 수 없으니까 순서 보장에 필요한 어떤 로직에서 순서를 보장 받기 위해서 그렇게 한다.

// 비동기 작업의 동기적 표현(3) - Generator
// 기본적으로 이터러블 객체를 반환하고,
// 반복할 수 있는 이터러블 객체를 생성한다.
// * 이터러블 객체(Iterable = 반복된다)
// * yield(일드): 양보하다, 미루다

// 제너레이터 함수는 실행하면,
// iterable객체가 반환(next()메서드를 가지고 있음)된다.

// (1) 제너레이터 함수 안에서 쓸 addCoffee 함수 선언
var addCoffee = function (prevName, name) {
  setTimeout(function () {
    coffeeMaker.next(prevName ? prevName + ", " + name : name);
  }, 500);
};
// 별표(*)가 붙은 함수가 바로 generator함수이다.
// 이 함수를 실행하면 -> 이터러블 객체가 반환된다!
// (2) 제너레이터 함수 선언!!!
// yield 키워드로 순서 제어 -> yield키워드를 만나면 멈춘다.
var coffeeGenerator = function* () {
  var espresso = yield addCoffee("", "에스프레소");
  console.log(espresso);
  var americano = yield addCoffee(espresso, "아메리카노");
  console.log(americano);
  var mocha = yield addCoffee(americano, "카페모카");
  console.log(mocha);
  var latte = yield addCoffee(mocha, "카페라떼");
  console.log(latte);
};
// coffeMaker가 이터러블 객체라는 거~~
var coffeeMaker = coffeeGenerator();
// next메서드로 계속해서 순환할 수 있는 객체라는 거~
coffeeMaker.next();
