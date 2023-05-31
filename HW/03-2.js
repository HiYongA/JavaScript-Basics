// 02. 어떤 매치가 성사될까?
// 출력의 결과를 제출해주세요. 그리고 그 이유를 최대한 상세히 설명해주세요.
// 주의사항: 브라우저에서 테스트해주세요.(chrome -> 개발자 도구 -> 콘솔에 입력하여 실행)
var fullname = "Ciryl Gane";

var fighter = {
  fullname: "John Jones",
  opponent: {
    fullname: "Francis Ngannou",
    getFullname: function () {
      // 1. 객체 this 바인딩: 프란시스 은가누
      return this.fullname;
    },
  },

  getName: function () {
    // 2. 객체 this 바인딩: 존 존스
    return this.fullname;
  },

  getFirstName: () => {
    // 3. 객체 this 바인딩: 시릴
    return this.fullname.split(" ")[0];
  },

  getLastName: (function () {
    // 4. 객체 this 바인딩: 시릴
    return this.fullname.split(" ")[1];
  })(),
};

console.log("Not", fighter.opponent.getFullname(), "VS", fighter.getName());
console.log(
  "It is",
  fighter.getName(),
  "VS",
  fighter.getFirstName(),
  fighter.getLastName
);

// - 출력 결과
// Not Francis Ngannou VS John Jones
// It is John Jones VS Ciryl Gane

// --------------------------------------

// - 출력 결과에 대한 나의 생각
// 첫번째 출력값은 호출 주체인 opponent 객체 안에 getFullname함수를 실행하여 this가 "Francis Ngannou"를 가리키고,
// 그 뒤에는 fighter.getName함수를 실행하여 this가 호출 주체인 fighter객체 안에 있는 fullname: "John Jones"를 가리킨다.

// 두번째 출력값은 위에 값과 동일하게 fullname: "John Jones"를 가리키고, 그 뒤에는 getFirstName이 화살표 함수이므로,
// 전역객체(window)인 "Ciryl Gane"를 가리키는데, split을 사용해 ["Ciryle", "Gane"]의 0번째 인덱스인 "Ciryle"를 가져온다.
// 쉼표 뒤에 getLastName는 콜백함수를 사용하였는데, ()<-이 없기 때문에 호출되지 않는데, 왜 "Gane" 출력값이 나왔는지 모르겠다.

// --------------------------------------

// - 출력 결과에 대한 튜터님의 해설
// 첫번째 출력값은 메서드로서의 호출, 호출의 주체가 명확하면 메서드이므로, 여기서의 this는 "Francis Ngannou"이고,
// 그 뒤에는 fighter인 호출 객체가 명확히 있으므로, 객체 안에 맨 위에 있는 fullname: "John Jones"가 나오게 된다.

// 두번째 출력값은 위에 값과 동일하게 fullname: "John Jones"를 가리키고, 그 뒤에는 화살표 함수로 선언되었는데,
// 화살표 함수는 this를 바인딩하지 않고, 상위 this를 바라보게 되어있다.
// 따라서 this는 외부 스코프의 this값을 상속하여 Ciryl Gane의 fullname을 가리키게 되고,
// split을 사용해 0번째 인덱스인 "Ciryle"를 가져온다.
// 쉼표 뒤에 getLastName는 클로저라는 개념을 이해 할 필요가 있고, getLastName는 호출부가 없다는 거에 주목해야 한다.
// fighter.getLastName는 그냥 (function () { return this.fullname.split(" ")[1];})()를 가져다 놓은건데,
// 해석하면 스스로 선언해 놓고, 호출까지 한거다. 이러한 함수는 호출 주체가 없고(= 전역 객체를 바라본다), 즉시 실행 함수라고 부른다.
// fighter.getLastName을 통해서 fighter안에 getLastName에 접근해 즉시 실행 함수를 콜한거라고 이해하면 된다.
// 그래서 1번째 인덱스인 "Gane"를 가져온다.
