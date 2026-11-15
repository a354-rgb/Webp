### 웹프로그래밍 Ch 06: 자바스크립트 언어
이 저장소는  **웹프로그래밍 Ch 06** 의 자바스크립트 기본 문법, 변수 선언 및 스코프, 연산자 활용, 제어문(조건문·반복문), 사용자 정의 함수 및 전역 함수 활용법을 정리한 README 문서입니다.

--------------------------------------------------------------------------------

#### 1. 개요 및 학습 정보
*   **학습 주제:**  자바스크립트 언어 개요 및 코드 삽입 위치, 데이터 타입 및 변수(let, const, var), 연산자, 제어문(if-else, switch, for, while), 사용자 정의 함수 및 전역 함수(eval, parseInt, isNaN)

--------------------------------------------------------------------------------

#### 2. 자바스크립트 특징 및 코드 작성 위치
자바스크립트는 웹 브라우저에서 실행되는 인터프리터 스크립트 언어로, HTML 문서의 동적 동작과 브라우저 제어를 담당합니다.
##### 자바스크립트 코드 작성 4가지 위치
*   **HTML 태그의 이벤트 리스너 속성:**  `<img src="apple.png" onmouseover="this.src='banana.png'">` 처럼 태그 내부 속성에 직접 작성.
*   **`<script>` 태그 내 작성:**  `<head>`나 `<body>` 내에 `<script>` 블록을 두고 함수 및 제어 로직 작성.
*   **외부 자바스크립트 파일(.js) 불러오기:**  `<script src="lib.js"></script>` 형태로 외부 파일로 분리하여 재사용성 향상.
*   **URL 위치(href) 작성:**  `<a href="javascript:alert('클릭')">` 형태로 앵커 태그의 URL 부분에 자바스크립트 작성.
##### 다이얼로그(Dialog) 함수 및 입출력
*   **`prompt("메시지", "기본값")`:**  사용자로부터 문자열을 입력받아 리턴 (취소 시 `null`, 입력 없이 확인 시 `""` 리턴).
*   **`confirm("메시지")`:**  확인/취소 버튼 다이얼로그 출력 (확인 클릭 시 `true`, 취소 시 `false` 리턴).
*   **`alert("메시지")`:**  경고 메시지와 확인 버튼을 가진 다이얼로그 출력.
*   **`document.write()` / `document.writeln()`:**  웹 문서 본문에 HTML 콘텐츠를 직접 출력 (`writeln`은 공백 하나만 추가되며 줄바꿈은 `<br>` 사용).

--------------------------------------------------------------------------------

#### 3. 자바스크립트 데이터 타입, 변수 및 연산자 구분
자바스크립트는 변수 타입을 명시하지 않는 동적 타입 언어이며, `let`, `const`, `var`로 변수 및 상수를 선언합니다.
| 구분 | 역할 | 주요 기능 및 키워드/연산자 |
| ------ | ------ | ------ |
| **변수 및 상수 (Variables & Scope)** | 데이터 저장 공간 및 접근 범위 설정 | `let` (블록 스코프, 재선언 불가), `const` (상수, 재할당 불가), `var` (전역/지역 스코프) |
| **산술 및 대입 연산자 (Arithmetic & Assign)** | 값의 연산 및 결과 저장 | `+`, `-`, `*`, `/`, `%`, `+=`, `-=`, `*=`, `/=`, `%=` |
| **비교 및 논리 연산자 (Comparison & Logical)** | 참/거짓 비교 및 조건 결합 | `>`, `<`, `>=`, `<=`, `==`, `!=`, `&&` (AND), `||` (OR), `!` (NOT) |
| **조건 및 비트 연산자 (Conditional & Bitwise)** | 삼항 조건 처리 및 비트 단위 이동/논리 | `condition ? expT : expF`, `&`, `|`, `^`, `~`, `<<`, `>>`, `>>>` |
| **전역 함수 (Global Functions)** | 수식 계산, 문자열 수치 변환, 유효성 검사 | `eval()`, `parseInt()`, `parseFloat()`, `isNaN()`, `isFinite()` |

--------------------------------------------------------------------------------

#### 4. HTML5 / JavaScript 구문 및 실습 코드 사용법
##### 스크립트 작성 및 다이얼로그 입출력
<head> 영역 내 <script> 태그에 함수를 선언하고, prompt()로 입력받아 parseInt() 변환 후 조건문으로 화면에 출력합니다.
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>자바스크립트 입출력 및 조건문</title>
  <script>
    function checkGrade() {
      let score = prompt("점수를 입력하세요", "100");
      if (score === null || score === "") {
        alert("점수가 입력되지 않았습니다.");
        return;
      }
      let n = parseInt(score);
      let grade = "";
      if (n >= 90) grade = "A";
      else if (n >= 80) grade = "B";
      else if (n >= 70) grade = "C";
      else grade = "F";
      
      document.write("<h3>입력한 점수: " + n + "점 (" + grade + "학점)</h3>");
    }
  </script>
</head>
<body>
  <h3>학점 확인 프로그램</h3>
  <hr>
  <script>
    checkGrade();
  </script>
</body>
</html>
```
##### 반복문 및 전역 함수 활용 예제
for, while 반복문과 eval(), isNaN() 전역 함수를 조합하여 구구단 출력을 수행합니다.
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>구구단 출력 및 전역 함수</title>
  <script>
    function printGugudan(dan) {
      let m = parseInt(dan);
      if (isNaN(m) || m < 1 || m > 9) {
        alert("1~9 사이의 숫자를 입력하세요.");
        return;
      }
      document.write("<h4>" + m + "단 출력</h4>");
      for (let i = 1; i <= 9; i++) {
        document.write(m + " x " + i + " = " + (m * i) + "<br>");
      }
    }
  </script>
</head>
<body>
  <h3>구구단 계산기</h3>
  <hr>
  <script>
    let input = prompt("구구단 몇 단을 출력할까요?", "5");
    printGugudan(input);
  </script>
</body>
</html>
```
##### 사용자 정의 함수 작성 및 리턴 값 처리
매개변수를 전달받아 결과를 계산하고 return 문으로 반환하는 함수 구현 예제입니다.
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>사용자 정의 함수</title>
  <script>
    // 두 수를 매개변수로 받아 합을 리턴하는 함수
    function adder(a, b) {
      let sum = a + b;
      return sum;
    }
  </script>
</head>
<body>
  <h3>adder() 함수 호출</h3>
  <hr>
  <script>
    let result = adder(24567, 98374);
    document.write("24567 + 98374 = <strong>" + result + "</strong>");
  </script>
</body>
</html>
```

--------------------------------------------------------------------------------

#### 5. 주요 문법 규격 및 활용 절차 정리
##### 변수 선언 및 스코프 사용 규격
1.  **변수 선언 방식:**  `let`은 동일한 이름의 재선언을 금지하고 블록 범위(block scope)를 가지므로 `var` 대신 우선 사용하며, 상수는 `const`로 선언합니다.
2.  **전역변수와 지역변수:**  함수 밖에서 선언된 변수는 전역 변수, 함수 내 `let` 선언은 지역 변수, `if`/`for` 블록 내 `let` 선언은 블록 변수가 됩니다.
3.  **식별자 규칙:**  첫 글자는 알파벳, `_`, `$`만 가능하며 숫자로 시작하거나 자바스크립트 예약어를 사용할 수 없습니다.
##### 제어문 및 함수 활용 절차
1.  **제어문 흐름:**  `switch` 문의 `case` 라벨에는 리터럴이나 `const` 상수만 올 수 있으며, 각 `case` 끝에 `break`를 명시하여 아랫 문장으로의 연속 실행을 방지합니다.
2.  **전역 함수 활용:**  `prompt()`로 받은 문자열은 `parseInt()`나 `parseFloat()`를 통해 숫자로 변환한 뒤 `isNaN()`으로 유효성을 검증하여 안전하게 연산을 수행합니다.

