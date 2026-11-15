### 웹프로그래밍 Ch 04: CSS3로 웹 페이지 꾸미기
이 저장소는  **웹프로그래밍 Ch 04** 의 CSS3 개요, 스타일시트 작성법(내부, style 속성, 외부 파일), 다양한 셀렉터(태그, class, id, 조합, 속성, 가상 클래스), 텍스트/폰트 스타일, 박스 모델(margin, border, padding, content) 및 배경·그림자·커서 효과 활용법을 정리한 README 문서입니다.

--------------------------------------------------------------------------------

#### 1. 개요 및 학습 정보
*   **학습 주제:**  CSS3 개념 및 기능, 스타일시트 작성 및 적용 방식 3가지, CSS3 셀렉터 작성법, 텍스트·폰트 꾸미기, 박스 모델 구조 및 배경/그림자/마우스 커서 제어

--------------------------------------------------------------------------------

#### 2. CSS3 개요 및 스타일시트 적용 3가지 방식
CSS3(Cascading Style Sheets)는 HTML 문서의 색상, 폰트, 레이아웃 등 외관을 꾸미는 전용 스타일시트 언어입니다.
##### CSS3 스타일시트 정의 방식 및 적용 방법
*   **`<style>` 태그 내 작성 (내부 스타일시트):**  `<head>` 태그 내 `<style> ... </style>` 블록에 작성하여 현재 문서 전체에 적용합니다.
*   **`style` 속성에 작성 (인라인 스타일시트):**  개별 HTML 태그의 `style="..."` 속성에 작성하여 해당 요소에만 적용합니다.
*   **외부 파일 불러오기 (외부 스타일시트):**  `.css` 파일로 스타일을 분리한 후 `<head>` 내 `<link rel="stylesheet" href="...">` 또는 `@import url(...)` 구문으로 호출하여 여러 페이지에서 재사용합니다.
##### 스타일 상속 및 캐스케이딩(Cascading) 규칙
*   **부모 스타일 상속:**  자식 태그는 부모 태그의 글자색(color), 폰트(font) 등 일부 스타일 속성을 기본적으로 상속받습니다.
*   **캐스케이딩 (우선순위 오버라이딩):**  하나의 요소에 여러 스타일이 충돌할 경우 `인라인 style 속성 > id 셀렉터 > class 셀렉터 > 태그 이름 셀렉터 > 부모 상속` 순으로 우선순위가 결정됩니다.

--------------------------------------------------------------------------------

#### 3. CSS3 셀렉터(Selector) 유형별 구분
CSS3 셀렉터는 HTML 문서 내에서 스타일을 적용할 대상을 정밀하게 선택하는 규칙입니다.
| 구분 | 역할 및 특징 | 작성 형식 및 사용 예시 |
| ------ | ------ | ------ |
| **태그 이름 셀렉터** | 지정한 태그 이름을 가진 모든 요소에 일괄 적용 | `h3, li { color : brown; }` |
| **Class 셀렉터** | `class` 속성값이 동일한 요소들을 그룹으로 묶어 적용 | `.warning { color : red; }`, `body.main { background : aliceblue; }` |
| **ID 셀렉터** | `id` 속성을 가진 단일 요소에 고유 스타일 적용 | `#list { background : mistyrose; }` |
| **조합 셀렉터** | 부모-자식(`>`) 또는 자손(공백) 관계 요소를 조합하여 지정 | `div > strong { background : yellow; }`, `ul strong { color : dodgerblue; }` |
| **전체 및 속성 셀렉터** | 모든 요소(`*`) 또는 특정 속성값(`[attr=val]`)을 가진 요소 선택 | `* { color : green; }`, `input[type=text] { color : red; }` |
| **가상 클래스 셀렉터** | 마우스 조작(`:hover`, `:active`), 포커스(`:focus`), 구조(`:nth-child`) 등 상태 선택 | `li:hover { background : yellowgreen; }`, `h3:first-letter { color : red; }` |

--------------------------------------------------------------------------------

#### 4. HTML5 / CSS3 구문 및 실습 코드 사용법
##### 스타일시트 작성 및 불러오기 예시
내부 `<style>` 태그, 인라인 `style` 속성, 그리고 외부 `.css` 파일 `<link>` 불러오기를 적용한 HTML5 완전한 코드 구조입니다.
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>CSS3 스타일시트 적용 예제</title>
  <!-- 외부 스타일시트 파일 불러오기 -->
  <link rel="stylesheet" type="text/css" href="mystyle.css">
  <style>
    /* 내부 스타일시트 작성 */
    body {
      background-color: mistyrose;
      color: green;
      margin: 30px;
    }
    h3 {
      color: purple;
      text-align: center;
    }
    p {
      color: red;
      font-size: 15px;
    }
  </style>
</head>
<body>
  <h3>CSS3 스타일시트 기초</h3>
  <hr>
  <p>모든 p 태그는 기본적으로 빨간색 글자입니다.</p>
  <!-- 인라인 style 속성으로 특정 요소 오버라이딩 -->
  <p style="color: blue; font-size: 20px;">이 문단은 인라인 스타일이 적용되었습니다.</p>
</body>
</html>
```

##### 셀렉터 조합 및 가상 클래스 활용 예시
태그, class, id, 자식/자손 조합 셀렉터 및 `:hover` 가상 클래스를 활용한 HTML5 완전한 코드 구조입니다.
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>CSS3 다양한 셀렉터 활용</title>
  <style>
    /* 태그 이름 셀렉터 */
    h3, li { color: brown; }
    /* 자식 셀렉터 (div 바로 밑의 strong) */
    div > div > strong { background: yellow; }
    /* 자손 셀렉터 (ul 내부의 모든 strong) */
    ul strong { color: dodgerblue; }
    /* Class 셀렉터 */
    .warning { color: red; font-weight: bold; }
    /* ID 셀렉터 */
    #list { background: mistyrose; padding: 10px; }
    /* 가상 클래스 셀렉터 */
    h3:first-letter { color: red; font-size: 150%; }
    li:hover { background: yellowgreen; cursor: pointer; }
  </style>
</head>
<body class="main">
  <h3>Web Programming</h3>
  <hr>
  <div>
    <div>2학기 <strong>학습 내용</strong>입니다.</div>
    <ul id="list">
      <li>HTML5</li>
      <li><strong>CSS3</strong></li>
      <li>JAVASCRIPT</li>
    </ul>
    <div class="warning">60점 이하는 F 학점입니다!</div>
  </div>
</body>
</html>
```

##### 박스 모델(Box Model), 배경, 그림자 및 커서 효과 예시
콘텐츠 영역, 패딩(padding), 테두리(border), 여백(margin), 배경 및 `text-shadow`/`box-shadow` 효과를 지정한 HTML5 완전한 코드 구조입니다.
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>박스 모델 및 그림자 효과</title>
  <style>
    /* 박스 모델 및 배경 지정 */
    div.box {
      width: 200px;
      height: 80px;
      background-color: yellow;
      border: 5px dotted red;
      padding: 20px;
      margin: 30px;
      /* 박스 그림자 효과 */
      box-shadow: 10px 10px 5px skyblue;
    }
    /* 텍스트 그림자 및 마우스 커서 지정 */
    .shadow-text {
      font: bold 24px verdana;
      color: darkblue;
      text-shadow: 3px 3px 5px gray;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <h3>박스 모델과 Visual 효과</h3>
  <hr>
  <div class="box">
    <span class="shadow-text">Box Model</span>
  </div>
</body>
</html>
```

--------------------------------------------------------------------------------

#### 5. 문서 요소별 주요 속성 및 활용법 정리
##### 텍스트·폰트 및 박스 모델 관련 주요 속성
1.  **텍스트 제어 속성:**  `text-align` (정렬: left, right, center, justify), `text-decoration` (none, underline, line-through, overline), `text-indent` (들여쓰기 em/px).
2.  **박스 모델 구성 4요소:**  콘텐츠(content: width, height), 내부 여백(padding), 테두리(border: width, style, color), 외부 여백(margin).
3.  **배경 및 그림자 단축 속성:**  `background` (color image position/size repeat), `text-shadow` (h-shadow v-shadow blur color), `box-shadow` (h-shadow v-shadow blur spread color).
##### 개발자 도구를 활용한 스타일 디버깅 절차
1.  **요소 검사 (Inspect):**  크롬 브라우저에서 `F12` 또는 마우스 우클릭 ➔ `검사` 클릭하여 Elements 탭 접속.
2.  **스타일 패널 확인:**  우측 Styles 패널에서 선택된 HTML 요소에 적용된 스타일 규칙, 상속 관계, 오버라이딩(취소선) 상태를 실시간 확인.
3.  **Computed 박스 모델 검증:**  Computed 탭에서 마우스로 계산된 margin, border, padding, content 실측 크기를 그래픽 박스로 시각적 디버깅.
