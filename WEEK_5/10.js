// 클로저 : 중첩 함수에서 종료됐는데 여전히 참조한다

const x = 1;

// 1
function outer() {
  const x = 10;
  const inner = function () {
    console.log(x);
  };
  return inner;
}

// outer함수를 '실행'해서, innerFunc에 담죠...!
// outer함수의 return부분을 innerFunc에 담는다는 얘기..!
const innerFunc = outer();
// ---------------여기서는.. outer함수의 실행컨텍스트는? 날라가고 없어진다.

innerFunc(); // 10

// 콜스택 :
// outer -> inner
// 전역컨텍스트

// 즉, inner함수가 outer함수보다 더 오래 유지됐고, outer함수는 이미 생명주기가 종료됐다.
// outer함수의 변수였던 x=10이라는 변수를 여전히 참조할 수 있다.
// 이게 바로 클로저다!

// 이게 어떻게 가능할까요? (feat. 똑똑한 가비지 컬렉터)
// 안쓰는 것만 가져가요! outer함수의 렉시컬 환경은 참조하는 곳이 있으니 놔둘게요!
