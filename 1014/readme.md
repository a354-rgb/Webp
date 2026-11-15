### 웹프로그래밍 Ch 07: 자바스크립트 코어 객체와 배열
이 저장소는  **웹프로그래밍 Ch 07** 의 자바스크립트 객체 개념, 코어 객체(Array, Date, String, Math) 활용법, 배열 조작 프로퍼티 및 메소드, 그리고 사용자 정의 객체 생성 3가지 방식을 정리한 README 문서입니다.

--------------------------------------------------------------------------------

#### 1. 개요 및 학습 정보
*   **학습 주제:**  자바스크립트 객체 및 코어 객체, Array 객체와 배열 메소드(concat, join, sort, slice, reverse), Date·String·Math 객체, 사용자 정의 객체 생성 3가지 방식(리터럴, new Object(), 프로토타입 생성자 함수)

--------------------------------------------------------------------------------

#### 2. 자바스크립트 객체 개념 및 주요 특징
자바스크립트 객체(Object)는 프로퍼티(Property, 상태 데이터)와 메소드(Method, 동작 함수)의 집합체입니다.
##### 객체의 구성 요소 및 접근 방법
*   **프로퍼티(Property):**  객체의 고유한 특성값을 저장하는 변수입니다. 마침표 표기법(`object.property`) 또는 대괄호 표기법(`object["property"]`)으로 접근합니다.
*   **메소드(Method):**  객체에 소속되어 특정 동작을 수행하는 함수입니다. `object.method()` 형태로 호출합니다.
##### 코어 객체 및 사용자 정의 객체 구분
*   **코어 객체(Core Object):**  자바스크립트 엔진이 기본 내장하여 제공하는 객체로 `Array`, `Date`, `String`, `Math` 등이 있습니다.
*   **사용자 정의 객체:**  개발자가 필요에 따라 직접 정의하여 사용하는 객체입니다.

--------------------------------------------------------------------------------

#### 3. 코어 객체 및 사용자 정의 객체 생성 방식 구분 표
코어 객체의 주요 기능과 사용자 정의 객체 생성 방식 구분입니다.
| 구분 | 주요 기능 및 역할 | 작성 형식 및 메소드 예시 |
| ------ | ------ | ------ |
| **Array 객체** | 동적 크기 배열 관리 및 요소 조작 | `new Array()`, `[1, 2, 3]`, `length`, `concat()`, `join()`, `sort()`, `slice()` |
| **Date 객체** | 날짜 및 시간 정보 처리 | `new Date()`, `getFullYear()`, `getMonth()`, `getDate()`, `getDay()` |
| **String 객체** | 문자열 데이터 처리 및 추출 | `"hello"`, `length`, `charAt()`, `indexOf()`, `slice()`, `replace()`, `split()` |
| **Math 객체** | 수학 연산 및 난수 생성 (정적 객체) | `Math.PI`, `Math.abs()`, `Math.round()`, `Math.sqrt()`, `Math.random()` |
| **사용자 정의 객체** | 리터럴, new Object(), 프로토타입 생성자 | `{ name: "KIM", age: 20 }`, `function Student(name) { this.name = name; }` |

--------------------------------------------------------------------------------

#### 4. HTML5 / JavaScript 구문 및 실습 코드 사용법
##### Array 객체 및 코어 객체(Date, String, Math) 활용 예시
Array, Date, String, Math 코어 객체를 활용하는 완전한 HTML5 코드 구조입니다.
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>코어 객체 및 배열 활용 예제</title>
  <script>
    function testCoreObjects() {
      // Array 객체 생성 및 정렬
      let plots = [20, 5, 8, 15, 20];
      plots.sort(function(a, b) { return a - b; }); // 오름차순 정렬

      // Date 객체 생성 및 정보 추출
      let now = new Date();
      let currentYear = now.getFullYear();

      // String 객체 활용
      let str = "HTML5,CSS3,JavaScript";
      let parts = str.split(",");

      // Math 객체 난수 생성 (1~10)
      let randomNum = Math.floor(Math.random() * 10) + 1;

      document.write("정렬된 배열: " + plots.join("-") + "<br>");
      document.write("현재 년도: " + currentYear + "<br>");
      document.write("분할된 문자열 첫 항목: " + parts[0] + "<br>");
      document.write("난수 추출 (1~10): " + randomNum + "<br>");
    }
  </script>
</head>
<body onload="testCoreObjects()">
  <h3>자바스크립트 코어 객체 실습</h3>
  <hr>
  <p>Array, Date, String, Math 객체 활용 결과입니다.</p>
</body>
</html>
```

##### 사용자 정의 객체 생성 3가지 방식 활용 예시
객체 리터럴, `new Object()`, 그리고 프로토타입 생성자 함수를 이용한 사용자 정의 객체 생성의 완전한 HTML5 예제입니다.
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>사용자 정의 객체 생성 3가지 방식</title>
  <script>
    // 1. 객체 리터럴 방식
    let tv = {
      code: "TV100",
      price: 500000,
      showInfo: function() {
        return this.code + " (가격: " + this.price + "원)";
      }
    };

    // 2. new Object() 방식
    let account = new Object();
    account.owner = "황기태";
    account.balance = 10000;
    account.deposit = function(amount) {
      this.balance += amount;
    };

    // 3. 프로토타입 생성자 함수 방식
    function Student(name, score) {
      this.name = name;
      this.score = score;
      this.getGrade = function() {
        return this.score >= 90 ? "A" : "B";
      };
    }

    function runExample() {
      let s1 = new Student("이재문", 95);
      account.deposit(5000);

      document.write("TV 정보: " + tv.showInfo() + "<br>");
      document.write("계좌 잔액: " + account.owner + "님 " + account.balance + "원<br>");
      document.write("학생 정보: " + s1.name + " (" + s1.getGrade() + "학점)<br>");
    }
  </script>
</head>
<body onload="runExample()">
  <h3>사용자 정의 객체 생성 실습</h3>
  <hr>
  <p>리터럴, new Object(), 프로토타입 생성자 함수 실행 결과입니다.</p>
</body>
</html>
```

--------------------------------------------------------------------------------

#### 5. 객체 및 배열 활용 절차 정리
##### 배열 및 코어 객체 활용 규격
1.  **배열의 동적 특성:**  자바스크립트 배열은 크기가 동적으로 변경되며 `length` 프로퍼티로 요소 개수를 파악합니다.
2.  **String 및 Math 특징:**  String 객체 메소드는 원본을 수정하지 않고 새 문자열을 반환하며, Math 객체는 생성자 없이 `Math.메소드()`로 직접 호출합니다.
##### 사용자 정의 객체 생성 방식 비교 절차
1.  **객체 리터럴:**  단일 객체를 빠르게 정의할 때 적합합니다.
2.  **프로토타입 생성자 함수:**  동일한 구조의 객체를 여럿 생성할 때 코드 재사용성을 대폭 높입니다.

