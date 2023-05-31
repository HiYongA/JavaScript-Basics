// 01. 나이든 유저 (객체 복사에 관한 문제)
// 가장 아래의 코드가 실행 되었을 때, "Passed ~"가 출력되도록 getAge함수를 채워주세요

var user = {
  name: "john",
  age: 20,
};

// user: 20, passedTime: 6
var getAged = function (user, passedTime) {
  return {
    name: user.name,
    age: user.age + passedTime,
  };
};

var agedUser = getAged(user, 6);

var agedUserMustBeDifferentFromUser = function (user1, user2) {
  console.log(user1);
  console.log(user2);
  if (!user2) {
    console.log("Failed! user2 doesn't exist!");
  } else if (user1 !== user2) {
    console.log(
      "Passed! If you become older, you will be different from you in the past!"
    );
  } else {
    console.log("Failed! User same with past one");
  }
};

agedUserMustBeDifferentFromUser(user, agedUser); //{name: 'john', age: 20}, {name: 'john', age: 26}

// 튜터님 해설 답안
// var getAged = function (user, passedTime) {
//   var newUser = {};
//   for (var prop in user) {
//     newUser[prop] = user[prop];
//   }
//   newUser.age += passedTime;
//   return newUser;
// };
