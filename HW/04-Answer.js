// 정답

class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = "HttpError";
    this.response = response;
  }
}

async function loadJson(url) {
  // promise then 부분
  const response = await fetch(url);
  if (response.status == 200) {
    return response.json();
  } else {
    throw new HttpError(response);
  }
}

async function narutoIsNotOtaku() {
  let title;
  let res;
  // 어떤 조건에 충족될 때까지 내부가 영원히 돌도록 True한다.
  while (true) {
    // while문이 돌 때 할당만 되도록, 위에 let title을 선언하고 title만 적는다.
    title = prompt("애니메이션 제목을 입력하세요.", "naruto");
    // promise 체이닝 catch 부분 -> try catch문 사용해서 동일 로직 시행 가능
    try {
      // 매번 선언할 필요없게 할당만 한다.
      res = await loadJson(
        `https://animechan.vercel.app/api/random/anime?title=${title}`
      );
      break;
    } catch (err) {
      if (err instanceof HttpError && err.response.status == 404) {
        alert(
          "일치하는 애니메이션이 없습니다. 일반인이시면 naruto, onepiece정도나 입력해주세요."
        );
        // while문으로 인해서 자동으로 실행되기 때문에 자기 자신(narutoIsNotOtaku())을 바로 호출할 필요는 없다.
        // return narutoIsNotOtaku();
      } else {
        throw err;
      }
    }
  }

  alert(`${res.character}: ${res.quote}.`);
  return res;
}

narutoIsNotOtaku();
