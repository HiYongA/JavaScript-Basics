// 더 나은 방법: 얕은 복사
// 얕은 복사 : 중첩된 객체에 대해서는 완벽한 복사를 할 수 없음

//이런 패턴은 어떨까요?
var copyObject = function (target) {
  var result = {};

  // for ~ in 구문을 이용하여, 객체의 모든 프로퍼티에 접근할 수 있습니다.
  // 하드코딩을 하지 않아도 괜찮아요.
  // 이 copyObject로 복사를 한 다음, 복사를 완료한 객체의 프로퍼티를 변경하면
  // 되겠죠!?
  for (var prop in target) {
    result[prop] = target[prop];
  }
  return result;
};

// 바로 아래 단계의 값만 복사
// 문제점 : 중첩된 객체의 경우 참조형 데이터가 저장된 프로퍼티를 복사할 때, 주소값만 복사
//위 패턴을 우리 예제에 적용해봅시다.
var user = {
  name: "wonjang",
  gender: "male",
};

var user2 = copyObject(user);
user2.name = "twojang";

if (user !== user2) {
  console.log("유저 정보가 변경되었습니다.");
}

console.log(user.name, user2.name);
console.log(user === user2);
