// 2. 문자 : string(문자열 = 문자의 나열)
// ' ' = " "
let str = "Hello World!";
console.log(str); // Hello World!
console.log(typeof str); // string

// 2-1. 문자열 길이 확인하기
console.log(str.length); // 12

// 2-2. 문자열 결합하기(concatenation)
let str1 = "Hello, ";
let str2 = "world!";
let result = str1.concat(str2);
console.log(result); // "Hello, world!"

// 2-3. 문자열 자르기
let str3 = "Hello, world!";
console.log(str3.substr(7, 5)); // "world" 7번째부터 5개까지만 출력해줘!
console.log(str3.slice(7, 12)); // "world" 7번째부터 12번째까지 출력해줘!

// 2-4. 문자열 검색
let str4 = "Hello, world!";
console.log(str4.search("world")); // 7

// 2-5. 문자열 대체
let str5 = "Hello, world!";
let result01 = str5.replace("world", "JavaScript");
console.log(result01); // "Hello, JavaScript!"

// 2-6. 문자열 분할
let str6 = "apple, banana, kiwi";
let result02 = str6.split(",");
console.log(result02); // ["apple", " banana", " kiwi"]
