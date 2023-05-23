// falsy한 값, truthy한 값
if (0) {
  console.log("이 코드는 실행되지 않습니다."); // falsy한 값
}

if ("") {
  console.log("이 코드는 실행되지 않습니다."); // falsy한 값
}

if (null) {
  console.log("이 코드는 실행되지 않습니다."); // falsy한 값
}

if (undefined) {
  console.log("이 코드는 실행되지 않습니다."); // falsy한 값
}

if (NaN) {
  console.log("이 코드는 실행되지 않습니다."); // falsy한 값
}

if (false) {
  console.log("이 코드는 실행되지 않습니다."); // falsy한 값
}

if (true) {
  console.log("이 코드는 실행합니다."); // 이 코드는 실행합니다. truthy한 값
}
