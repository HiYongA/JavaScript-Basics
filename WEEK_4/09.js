// 콜백 지옥의 예시
// 들여쓰기 수준
// 값 전달 순서: 아래 -> 위
setTimeout(
  function (name) {
    var coffeeList = name;
    console.log(coffeeList);

    setTimeout(
      function (name) {
        coffeeList += ", " + name;
        console.log(coffeeList);

        setTimeout(
          function (name) {
            coffeeList += ", " + name;
            console.log(coffeeList);

            setTimeout(
              function (name) {
                coffeeList += ", " + name;
                console.log(coffeeList);
              },
              500,
              "카페라떼"
            );
          },
          500,
          "카페모카"
        );
      },
      500,
      "아메리카노"
    );
  },
  500,
  "에스프레소"
);

// 출력 결과
// 에스프레소
// 에스프레소, 아메리카노
// 에스프레소, 아메리카노, 카페모카
// 에스프레소, 아메리카노, 카페모카, 카페라떼

// 기명함수로 변환하는 방법
// 가독성이 좋지만, 한번밖에 안 쓸 건데, 이름을 다 붙여줘야 한ㄷ.
// 인적 리소스의 엄청난 낭비다!
var coffeeList = "";

var addEspresso = function (name) {
  coffeeList = name;
  console.log(coffeeList);
  setTimeout(addAmericano, 500, "아메리카노");
};

var addAmericano = function (name) {
  coffeeList += ", " + name;
  console.log(coffeeList);
  setTimeout(addMocha, 500, "카페모카");
};

var addMocha = function (name) {
  coffeeList += ", " + name;
  console.log(coffeeList);
  setTimeout(addLatte, 500, "카페라떼");
};

var addLatte = function (name) {
  coffeeList += ", " + name;
  console.log(coffeeList);
};

setTimeout(addEspresso, 500, "에스프레소");

// 출력 결과
// 에스프레소
// 에스프레소, 아메리카노
// 에스프레소, 아메리카노, 카페모카
// 에스프레소, 아메리카노, 카페모카, 카페라떼
