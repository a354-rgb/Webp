### 웹프로그래밍 Ch 04: CSS3로 웹 페이지 꾸미기
이 저장소는  **웹프로그래밍 Ch 04** 의 CSS3 개요 및 기본 개념, 스타일 시트 작성 및 3가지 삽입 방식, 셀렉터(선택자) 종류 및 활용법, 스타일 상속과 캐스케이딩(Cascading) 우선순위, 텍스트·폰트·박스 모델 및 배경·그림자 효과 구성을 정리한 README 문서입니다.

--------------------------------------------------------------------------------

#### 1. 개요 및 학습 정보
*   **학습 주제:**  CSS3 스타일 시트 개요, 작성 및 삽입 방법(<style>, style 속성, 외부 .css 파일 불러오기), 셀렉터 종류 및 활용법, 스타일 상속 및 캐스케이딩 규칙, 텍스트·폰트·박스 모델 및 배경·그림자 스타일 적용

--------------------------------------------------------------------------------

#### 2. CSS3 스타일 시트 개념 및 기본 규칙
CSS(Cascading Style Sheets)는 HTML 문서의 색상, 폰트, 레이아웃 등 외관을 꾸미는 스타일시트 언어입니다.
##### CSS3 문법 구조 및 구성 요소
*   **문법 구조:**  셀렉터(Selector), 프로퍼티(Property), 값(Value)으로 구성되며, `셀렉터 { 프로퍼티 : 값; }` 형태로 선언합니다.
*   **대소문자 미구분:**  CSS3 셀렉터 및 프로퍼티 이름은 대소문자를 구분하지 않습니다.
*   **주석문 처리:**  여러 줄 주석을 지원하며 `/* 주석 내용 */` 형식으로 작성합니다.
##### 스타일 시트 적용 방법 3가지 및 불러오기
*   **`<style>` 태그 작성 (임베디드):**  `<head>` 태그 내에 `<style> ... </style>` 블록을 작성하여 웹 페이지 전체에 스타일을 적용합니다.
*   **`style` 속성 작성 (인라인):**  HTML 태그 내에 `style="..."` 속성을 직접 작성하여 해당 요소에만 단독으로 적용합니다.
*   **외부 CSS3 파일 불러오기:**  `.css` 파일로 별도 작성 후 `<link href="mystyle.css" rel="stylesheet" type="text/css">` 태그를 사용하거나, `<style>` 내 `@import url('mystyle.css');` 지시어로 불러옵니다.

--------------------------------------------------------------------------------

#### 3. 웹 페이지 스타일 요소별 구분 및 셀렉터 유형
CSS3 셀렉터는 스타일을 적용할 대상을 선택하는 기능으로 태그, 클래스, ID, 조합 및 상황에 따라 다양하게 구분됩니다.
| 구분 | 역할 | 주요 셀렉터 및 담당 영역 |
| ------ | ------ | ------ |
| **기본 셀렉터 (Basic Selector)** | 태그 이름, 클래스명, ID명 및 전체 요소 지정 | 태그명 (`h3`, `p`), class (`.warning`, `body.main`), id (`#list`), 전체 (`*`) |
| **조합 셀렉터 (Combinator Selector)** | 자식 및 자손 관계에 따른 직계/후손 요소 지정 | 자식 셀렉터 (`div > strong`), 자손 셀렉터 (`ul strong`) |
| **속성 셀렉터 (Attribute Selector)** | HTML 태그의 특정 속성과 값 일치 여부 지정 | `input[type=text]`, `img[src]` 등 |
| **가상 클래스 셀렉터 (Pseudo-class)** | 동적 마우스 상태, 폼 포커스, 링크 및 위치 조건 지정 | `:hover`, `:active`, `:focus`, `:first-letter`, `:first-line`, `:nth-child()` |
| **박스 모델 & 배경 (Box & Background)** | 사각형 박스 구조, 테두리, 여백, 그림자 및 배경 제어 | `width`, `height`, `padding`, `margin`, `border`, `box-shadow`, `background` |

--------------------------------------------------------------------------------

#### 4. CSS3 구문 및 실습 코드 사용법
##### 스타일 시트 삽입 및 텍스트/폰트 꾸미기
<head> 영역의 <style> 태그 내에 텍스트 들여쓰기(text-indent), 정렬(text-align), 데코레이션(text-decoration) 및 폰트 단축 속성(font)을 적용합니다.
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>텍스트 및 폰트 꾸미기</title>
  <style>
    body {
      font-family: "Times New Roman", Times, serif;
      font-size: 16px;
      background-color: linen;
    }
    h3 {
      text-align: center;
      color: darkred;
      font: italic bold 30px consolas, sans-serif;
    }
    .p1 {
      text-indent: 3em;
      text-align: justify;
    }
    .p2 {
      text-indent: 1em;
      text-align: center;
    }
    a {
      text-decoration: none;
    }
  </style>
</head>
<body>
  <h3>Consolas Font Title</h3>
  <hr>
  <p class="p1">HTML 태그만으로 세밀한 텍스트 제어를 할 수 없습니다.</p>
  <p class="p2">스타일 시트를 이용하면 들여쓰기와 정렬이 가능합니다.</p>
  <a href="http://www.naver.com">밑줄 없는 네이버 링크</a>
</body>
</html>
```
##### 복합 셀렉터 및 가상 클래스(:hover, :first-letter) 활용
class 셀렉터, id 셀렉터, 자식/자손 셀렉터 및 :hover 가상 클래스를 조합하여 개별 및 그룹 요소를 제어합니다.
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>셀렉터 활용 실습</title>
  <style>
    /* 태그 이름 셀렉터 */
    h3, li { color: brown; }
    /* 자식 셀렉터 (div의 직계 자식 strong) */
    div > div > strong { background: yellow; }
    /* 자손 셀렉터 (ul 내부의 자손 strong) */
    ul strong { color: dodgerblue; }
    /* class 및 id 셀렉터 */
    .warning { color: red; }
    #list { background: mistyrose; }
    /* 가상 클래스 셀렉터 */
    h3:first-letter { color: red; font-size: 140%; }
    li:hover { background: yellowgreen; }
  </style>
</head>
<body class="main">
  <h3>Web Programming</h3>
  <hr>
  <div>
    <div>2학기 <strong>학습 내용</strong>입니다.</div>
    <ul id="list">
      <li><span>HTML5</span></li>
      <li><strong>CSS</strong></li>
      <li>JAVASCRIPT</li>
    </ul>
    <div class="warning">60점 이하는 F</div>
  </div>
</body>
</html>
```
##### 박스 모델, 테두리, 배경 및 그림자 효과 적용
HTML 요소의 박스 모델(콘텐츠, 패딩, 테두리, 여백), border-radius, background 및 box-shadow/text-shadow 사용법입니다.
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>박스 모델 및 그림자 효과</title>
  <style>
    /* 박스 모델 및 둥근 모서리 */
    div.box {
      width: 200px;
      height: 80px;
      background: yellow;
      padding: 20px;
      margin: 30px;
      border: 5px dotted red;
      border-radius: 20px;
      box-shadow: 10px 10px 5px skyBlue;
    }
    /* 배경 이미지 및 반복 제어 */
    div.bg {
      background-color: skyblue;
      background-image: url("media/spongebob.png");
      background-size: 100px 100px;
      background-repeat: repeat-y;
      background-position: center center;
    }
    /* 텍스트 그림자 */
    .glow {
      font-size: 24px;
      text-shadow: 3px 3px 5px red;
    }
  </style>
</head>
<body>
  <h3>박스 모델과 스타일 효과</h3>
  <hr>
  <div class="box glow">Drop Shadow Text</div>
  <div class="box bg">SpongeBob Background</div>
</body>
</html>
```

--------------------------------------------------------------------------------

#### 5. 스타일 적용 규칙 및 디버깅 활용법 정리
##### 스타일 우선순위 및 상속 규칙
1.  **부모 스타일 상속:**  자식 태그는 부모 태그의 CSS 스타일(color, font-size 등)을 상속받으며, 자식 태그에 별도 스타일을 정의할 경우 상속받은 값을 오버라이딩합니다.
2.  **캐스케이딩(Cascading) 우선순위:**  여러 스타일 시트가 중첩될 때 `style 속성(인라인)` > `id 셀렉터` > `class 셀렉터` > `태그 이름 셀렉터` > `브라우저 기본 스타일` 순으로 우선 적용됩니다.
3.  **스타일 합치기(Cascading):**  중첩된 스타일 선언 중 충돌하지 않는 프로퍼티는 하나로 합쳐져(Cascading) 태그에 최종 적용됩니다.
##### 셀렉터 활용 및 브라우저 검사 절차
1.  **단원별 셀렉터 선택 기준:**  유일한 단일 요소 지정 시 `#id` 셀렉터를 사용하고, 복수의 요소 그룹 지정 시 `.class` 셀렉터를 활용합니다.
2.  **크롬 개발자 도구(DevTools) 스타일 검사:**  브라우저 요소 검사(F12)의 `Elements` 탭에서 특정 HTML 태그를 선택한 후 `Styles` 패널을 통해 적용된 계산 스타일(Computed) 및 캐스케이딩 취소선 현상을 직접 실시간 디버깅합니다.

