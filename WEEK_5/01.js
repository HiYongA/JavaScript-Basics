// 클래스와 인스턴스의 관계
// 설계도(클래스)가 필요한 이유는 객체를 정확하고 빠르게 많이 만들어 낼 수 있기 때문이다.

// 클래스라는 설계도를 만들어봅시다!
class Person {
  // 우리는 사람이기 때문에 필수요소로 name, age를 넣어줘야 된다.
  // 생성자 함수
  constructor(name, age) {
    // 좌측 this는 우리가 실제로 만들 인스턴스를 말한다.
    // 우측은 외부로부터 받아온 값이다.
    this.name = name;
    this.age = age;
  }

  // 메서드 형태의 동사 표현
  sayHello() {
    // console.log(this.name + "님 안녕하세요!");
    console.log(`${this.name}님 안녕하세요!`);
  }

  // 내 나이는 몇 살이에요!라고 출력하는 메서드를 만들어 주세요!
  printMyAge() {
    console.log(`${this.name} 나이는 ${this.age}살이에요!`);
  }
}

// 설계도를 통해 인스턴스(실제 사물)를 만들어 봅시다!
// 이름은 홍길동이고, 나이는 30살인 사람 하나를 만들어줘!! (설계도에 근거해서!)
const person1 = new Person("홍길동", "30");
// 이름은 홍길순이고, 나이는 25살인 사람 하나를 만들어줘!! (설계도에 근거해서!)
const person2 = new Person("홍길순", "25");

person1.sayHello(); // 홍길동님 안녕하세요!
person2.sayHello(); // 홍길순님 안녕하세요!
person1.printMyAge(); // 홍길동 나이는 30살이에요!
person2.printMyAge(); // 홍길순 나이는 25살이에요!
