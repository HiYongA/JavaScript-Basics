// 비동기 작업 => 순서를 보장하지 않는다.
// 그래서 비동기 작업의 동기적 표현이 필요하다!
// Promise, generator(es6), async/await(es7)

// 비동기 작업의 동기적 표현(1) - Promise
// 처리가 끝나면 알려달라는 '약속'이다.
// new연산자로 호출한 Promise 인자로 넘어가는 콜백은 바로 실행된다.
// 그 내부의 resolve(또는 reject) 함수를 호출하는 구문이 있을 경우
// resolve(또는 reject) 둘 중 하나가 실행되기 전까지는 다음(then), 오류(catch)로 넘어가지 않아요.
// 내부의 resolve는 성공, reject는 실패!
// 비동기작업이 완료될 때 비로소 resolve, reject 호출한다.

new Promise(function (resolve) {
  setTimeout(function () {
    var name = "에스프레소";
    console.log(name); // 출력 결과 : 에스프레소
    // resolve(name)를 실행함으로써 그 다음 약속으로 갈 수 있도록 세팅해준다.
    resolve(name);
  }, 500);
}) // resolve가 실행되면 then으로 넘어간다. prevName(= 이전 네임)
  .then(function (prevName) {
    // 이 안에서도 새롭게 Promise를 만든다. 계속 chaining을 건다~
    return new Promise(function (resolve) {
      setTimeout(function () {
        var name = prevName + ", 아메리카노";
        console.log(name); // 출력 결과 : 에스프레소, 아메리카노
        resolve(name);
      }, 500);
    });
  })
  .then(function (prevName) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        var name = prevName + ", 카페모카";
        console.log(name); // 출력 결과 : 에스프레소, 아메리카노, 카페모카
        resolve(name);
      }, 500);
    });
  })
  .then(function (prevName) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        var name = prevName + ", 카페라떼";
        console.log(name); // 출력 결과 : 에스프레소, 아메리카노, 카페모카, 카페라떼
        resolve(name);
      }, 500);
    });
  });
