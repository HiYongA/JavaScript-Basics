// 상속 (Inheritance)
// Class -> 유산으로 내려주는 주요 기능!!
// 부모 <-> 자식

// 동물 전체에 대한 클래스에요
class Animal {
  // 생성자 함수, 이름을 필수로 받아야 해요
  constructor(name) {
    this.name = name;
  }

  // 동물의 행동을 정의하는 메소드(짖다))
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

// 동물 클래스를 상속받는 Dog 클래스를 만들어요
class Dog extends Animal {
  // 상속받을 때, speak()를 입맛에 맞게 재정의해요.
  // overriding : 부모로부터 내려 받아서 재정의 한다.
  speak() {
    console.log(`${this.name} barks.`);
  }
}

// Dog를 만들 때는 Animal의 상속을 받은 class이기 때문에 이름을 필수로
// 받아야 해요!
let cuttyPuppy = new Dog("복실이");

// speak는 'makes a noise'가 아니라, 'barks'가 출력되네요.
cuttyPuppy.speak(); // "복실이 barks."
