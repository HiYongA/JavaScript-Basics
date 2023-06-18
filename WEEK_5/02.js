// 클래스 연습해보기!

// [요구사항]
// 1. Car라는 새로운 클래스를 만들되, 처음 객체를 만들 때는
//    다음 네 개의 값이 필수로 입력돼야 합니다!
//    (1) modelName
//    (2) modelYear
//    (3) type : 가솔린, 전기차, 디젤
//    (4) price
// 2. makeNoise() 메서드를 만들어 클락션을 출력해 주세요.
// 2-1. 해당 자동차가 몇년도 모델인지 출력하는 메서드 작성!
// 3. 이후 자동차를 3개 정도 만들어 주세요. (객체 생성)

class Car {
  constructor(modelName, modelYear, type, price) {
    // 이 객체에 실체의 모델이름에 외부에서 받아온 modelName을 매핑하겠다.
    this.modelName = modelName;
    this.modelYear = modelYear;
    this.type = type;
    this.price = price;
  }

  //클락션을 울리는 메서드
  makeNoise() {
    console.log(`${this.modelName} : 빵!`);
  }

  // 몇년도 모델인지 출력하는 메서드
  printModelYear() {
    console.log(`${this.modelName}은 ${this.modelYear}년도의 모델이에요!`);
  }
}

// 자동차 만들기
const car1 = new Car("Sorento", "2023", "e", 5000);
const car2 = new Car("SM5", "1999", "g", 3000);
const car3 = new Car("Palisade", "2010", "d", 4000);

car1.makeNoise(); // Sorento : 빵!
car1.printModelYear(); // Sorento은 2023년도의 모델이에요!
car2.makeNoise(); // SM5 : 빵!
car2.printModelYear(); // M5은 1999년도의 모델이에요!
car3.makeNoise(); // Palisade : 빵!
car3.printModelYear(); // Palisade은 2010년도의 모델이에요!
