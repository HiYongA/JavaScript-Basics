// Getters와 Setters
// 객체지향 프로그래밍 언어 -> G, S
// 클래스 --> 객체(인스턴스)
// 프로퍼티 (constructor)
// new Class(a, b, c) 프로퍼티에 접근하고 또 세팅하기 위한 G, S를 제공한다.

// 사각형 클래스
class Retangle {
  constructor(height, width) {
    // 사각형을 위한 필수 입력값
    // this에 접근하는 property의 이름은 항상 앞에 언더스코어(_)를 붙여주기로 약속!
    // underscore : private(은밀하고, 감춰야 할 때)
    // 즉 this._height는 인스턴스 내에서만 쓰이기 위한 변수로서 이제 분리해놓겠다는 의미
    // : getters랑 setters의 개념이 들어오면서 변수이름을 똑같이 써버리면 겹치게 되는 현상이 생기면서 언더스코어로 분리시켜야 되는 필요성이 생겼다!
    this._height = height;
    this._width = width;
  }

  // width를 위한 getter
  get width() {
    return this._width;
  }

  // width를 위한 setter
  set width(value) {
    // 검증 1: value가 음수이면 오류!
    if (value <= 0) {
      console.log("[오류] 가로길이는 0보다 커야 합니다!");
      return;
    } else if (typeof value !== "number") {
      console.log("[오류] 가로길이로 입력된 값이 숫자타입이 아닙니다!");
      return;
    }
    this._width = value;
  }

  // height를 위한 getter
  get height() {
    return this._height;
  }

  // height를 위한 setter
  set height(value) {
    // 검증 1: value가 음수이면 오류!
    if (value <= 0) {
      console.log("[오류] 세로길이는 0보다 커야 합니다!");
      return;
    } else if (typeof value !== "number") {
      console.log("[오류] 세로길이로 입력된 값이 숫자타입이 아닙니다!");
      return;
    }
    this._height = value;
  }

  // getArea : 가로 * 세로 => 넓이를 구하는 메서드
  getArea() {
    const a = this._width * this._height;
    console.log(`넓이는 => ${a}입니다. `);
  }
}

// instance 생성
const rect1 = new Retangle(10, 20);
rect1.getArea();
// const rect2 = new Retangle(10, 30);
// const rect3 = new Retangle(15, 20);
