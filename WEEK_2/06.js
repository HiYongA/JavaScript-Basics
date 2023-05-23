// Map
// JS => 객체, 배열 : 많고, 다양하고, 복잡한 프로그램을 만들어 왔죠!
// 그럼에도, 현실세게 반영하기는 좀 많이 어려웠죠...!
// Map, Set 추가적인 자료구조가 등장했습니다.
// 자료구조: 여러가지 자료 형태

// Map, Set의 목적 : 기존의 객체 또는 배열보다 데이터의 구성, 검색, 사용을 훨씬 더 빠르고 효율적으로 처리

// (1) Map
// - key / value pair로 저장한다.
// - key에 어떤 데이터 타입(유형)도 다 들어올 수 있다.
// - Map은 키가 정렬된 순서로 저장되기 때문이다.
// - 기능
//  > 검색, 삭제, 제거, 여부 확인
// - Map을 쓰는 이유는 대량 데이터를 처리하려고 사용한다. 그러기 때문에 반복적인 부분이 중요하다!

const myMap = new Map(); // 맵을 만든다.
// myMap.set("key", "value"); // key를 이용해 value를 저장한다.

// // ...
// // ...

// myMap.get("key"); // key에 해당하는 값을 반환한다.
// 반복...!! -> method: keys(), values(), entries()
// Iterator: 반복자

myMap.set("one", 1);
myMap.set("two", 2);
myMap.set("three", 3);

console.log(myMap.keys()); // [Map Iterator] { 'one', 'two', 'three' }
for (const key of myMap.keys()) {
  console.log(key);
}

console.log(myMap.values()); // [Map Iterator] { 1, 2, 3 }
for (const value of myMap.values()) {
  console.log(value);
}

console.log(myMap.entries()); // [Map Entries] { [ 'one', 1 ], [ 'two', 2 ], [ 'three', 3 ] }
for (const entry of myMap.entries()) {
  console.log(entry);
}

// Map의 크기랑 존재여부를 확인하는 방법
// Map의 사이즈(길이)
console.log(myMap.size); // 3
// key 기반 검색
console.log(myMap.has("two")); // true
