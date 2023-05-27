// 깊은 복사 : 내부의 모든 값들을 하나하나 다 찾아서 모두 복사하는 방법
// 결국, user.urls 프로퍼티도 불변 객체로 만들어야 한다.
// 중첩된 객체에 대한 깊은 복사 살펴보기
var user = {
  name: "wonjang",
  urls: {
    portfolio: "http://github.com/abc",
    blog: "http://blog.com",
    facebook: "http://facebook.com/abc",
  },
};

// 1차 copy
var user2 = copyObject(user);

// 2차 copy -> 이렇게까지 해줘야만 해요..!!
user2.urls = copyObject(user.urls);

user.urls.portfolio = "http://portfolio.com";
console.log(user.urls.portfolio === user2.urls.portfolio);

user2.urls.blog = "";
console.log(user.urls.blog === user2.urls.blog);

// 결론 : 객체의 프로퍼티 중, 기본형 데이터는 그대로 복사 + 참조형 데이터는 다시 그 내부의 프로퍼티를 복사
// -> 재귀적 수행!
// : 함수나 알고리즘이 자기 자신을 호출하여 반복적으로 실행되는 것

// 결론을 적용한 코드 -> 완벽히 다른 객체를 반환
var copyObjectDeep = function (target) {
  var result = {};
  if (typeof target === "object" && target !== null) {
    for (var prop in target) {
      result[prop] = copyObjectDeep(target[prop]);
    }
  } else {
    result = target;
  }
  return result;
};

//결과 확인
var obj = {
  a: 1,
  b: {
    c: null,
    d: [1, 2],
  },
};
var obj2 = copyObjectDeep(obj);

obj2.a = 3;
obj2.b.c = 4;
obj2.b.d[1] = 3;

console.log(obj);
console.log(obj2);
