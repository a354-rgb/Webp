### 웹프로그래밍 Ch 05: CSS3 고급 활용
이 저장소는  **웹프로그래밍 Ch 05** 의 CSS3 배치 기술(display, position, float, z-index), 리스트·표·폼 스타일링, 그리고 애니메이션(animation)·전환(transition)·변환(transform) 동적 효과 활용법을 정리한 README 문서입니다.

--------------------------------------------------------------------------------

#### 1. 개요 및 학습 정보
*   **학습 주제:**  CSS3 박스 배치 및 포지셔닝, 리스트 및 네비게이션 바 제작, 표/폼 스타일 제어, 동적 시각 효과(@keyframes, transition, transform)

--------------------------------------------------------------------------------

#### 2. 박스 포지셔닝 및 배치 메커니즘
HTML 태그의 기본 출력 순서(Normal Flow)를 변경하여 원하는 위치에 배치합니다.
##### display 프로퍼티를 통한 박스 유형 제어
*   **블록 박스 (display: block):**  항상 새 라인에서 시작하며, 부모 요소의 가로 너비 전체를 독점 점유합니다 (예: `<div>`). `width`, `height`, `margin`, `padding` 설정이 모두 가능합니다.
*   **인라인 박스 (display: inline):**  새 라인에서 시작하지 않고 라인 안(inline)에 연속 배치됩니다 (예: `<span>`). `width`, `height` 설정이 불가능하며 위아래 마진 조절이 제한됩니다.
*   **인라인 블록 박스 (display: inline-block):**  라인 안에 옆으로 연속 배치되면서 동시에 `width`, `height`, `margin`, `padding` 크기를 임의로 조절할 수 있는 혼합 유형입니다.
*   **보이지 않기 (display: none):**  요소를 화면에 출력하지 않으며 공간조차 차지하지 않고 숨깁니다.
##### position 프로퍼티를 통한 위치 지정 모드
*   **정적 배치 (position: static):**  기본 배치 모드로, 웹 페이지에 작성된 순서대로 Normal Flow를 따라 출력됩니다 (top, left 등 미적용).
*   **상대 배치 (position: relative):**  Normal Flow상의 기본 위치를 기준점으로 삼아 `top`, `bottom`, `left`, `right` 프로퍼티 값만큼 오프셋 이동합니다.
*   **절대 배치 (position: absolute):**  Normal Flow에서 제외되며, position 속성이 적용된 가장 가까운 조상 요소를 기준점으로 자리를 잡습니다.
*   **고정 배치 (position: fixed):**  브라우저 뷰포트(화면 창)를 기준점으로 삼아 항상 해당 위치에 고정 출력되며, 스크롤 시에도 이동하지 않습니다.
##### 유동 배치(float) 및 기타 배치 속성
*   **유동 배치 (float: left | right):**  요소를 화면 좌측 또는 우측에 유동 박스로 배치하여 텍스트나 다른 요소가 그 주변을 둘러싸도록 만듭니다 (`clear` 속성으로 해제).
*   **중첩 순서 (z-index):**  요소를 겹쳐 배치할 때 Z축 상의 위아래 순서를 정수로 지정합니다 (값이 클수록 위쪽에 출력).
*   **시각성 및 오버플로우 (visibility & overflow):**  `visibility: hidden`은 요소를 숨기되 공간은 유지하며, `overflow`(`visible`|`hidden`|`scroll`|`auto`)는 박스 범위를 벗어나는 콘텐츠 처리를 지정합니다.

--------------------------------------------------------------------------------

#### 3. CSS3 고급 스타일링 및 동적 효과 요소별 구분
CSS3 고급 기능은 문서 배치, 컴포넌트 디자인, 그리고 동적 그래픽 효과로 구분됩니다.
| 구분 | 역할 | 주요 프로퍼티 및 담당 영역 |
| ------ | ------ | ------ |
| **박스 배치 및 위치 (Placement)** | 요소의 박스 유형 변경, 포지셔닝, 층위 및 플로팅 제어 | `display`, `position`, `left/right/top/bottom`, `float`, `z-index`, `visibility`, `overflow` |
| **리스트 및 메뉴 (List & Menu)** | 마커 모양/위치/이미지 지정 및 네비게이션 바 구현 | `list-style-type`, `list-style-image`, `list-style-position`, `list-style` |
| **표 및 폼 디자인 (Table & Form)** | 테두리 합치기, 셀 여백/배경, 포커스/호버 반응형 스타일 | `border-collapse`, `nth-child()`, `:hover`, `:focus`, `border-radius` |
| **동적 변환 및 애니메이션 (Transform & Motion)** | 2D 기하학 변환, 상태 전환 효과, 키프레임 기반 애니메이션 | `transform` (`rotate`, `scale`, `skew`, `translate`), `transition`, `@keyframes`, `animation` |

--------------------------------------------------------------------------------

#### 4. HTML5 / CSS3 / JavaScript 구문 및 실습 코드 사용법
##### display 및 position 배치를 활용한 레이아웃 작성
<head> 영역에 메타 정보와 타이틀을 선언하고, <body> 영역에 출력할 요소를 배치한 뒤 <style>에 display: inline-block 및 position: relative/absolute/fixed 속성을 지정합니다.
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>CSS3 포지셔닝 및 배치</title>
  <style>
    /* 인라인 블록 및 상대/절대 배치 */
    .box {
      display: inline-block;
      width: 100px;
      height: 100px;
      background: powderblue;
      margin: 10px;
    }
    #relative-box:hover {
      position: relative;
      left: 20px;
      top: 20px;
      background: lightgreen;
    }
    #fixed-banner {
      position: fixed;
      bottom: 10px;
      right: 10px;
      background: red;
      color: white;
      padding: 10px;
    }
  </style>
</head>
<body>
  <h3>박스 포지셔닝 실습</h3>
  <hr>
  <div class="box">Static</div>
  <div class="box" id="relative-box">Relative</div>
  <div id="fixed-banner">고정 배너 (fixed)</div>
</body>
</html>
```
##### 리스트를 활용한 네비게이션 바(Navigation Menu) 및 표/폼 꾸미기
<ul>과 <li> 태그의 마커를 제거하고 display: inline-block을 지정하여 가로형 네비게이션 메뉴를 구축하며, 표 테두리 및 폼 포커스 효과를 스타일링합니다.
```html
<head>
  <meta charset="utf-8">
  <title>네비게이션 메뉴 및 폼 스타일</title>
  <style>
    /* 가로 네비게이션 바 */
    #menubar { background: olive; }
    #menubar ul { margin: 0; padding: 0; list-style-type: none; }
    #menubar ul li { display: inline-block; padding: 10px 20px; }
    #menubar ul li a { color: white; text-decoration: none; }
    #menubar ul li a:hover { color: violet; }

    /* 표 줄무늬 및 호버 효과 */
    table { border-collapse: collapse; width: 100%; }
    th, td { border-bottom: 1px solid gray; padding: 8px; text-align: left; }
    thead { background: darkgray; color: yellow; }
    tbody tr:nth-child(even) { background: aliceblue; }
    tbody tr:hover { background: pink; }

    /* 폼 입력 포커스 효과 */
    input[type=text] { border: 2px solid skyblue; border-radius: 5px; }
    input[type=text]:focus { font-size: 120%; background: aliceblue; }
  </style>
</head>
<body>
  <nav id="menubar">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Products</a></li>
      <li><a href="#">Notice</a></li>
    </ul>
  </nav>
</body>
```
##### CSS3 transform, transition 및 @keyframes 애니메이션 구현
자바스크립트 없이 CSS3 속성만으로 회전/확대(transform), 상태 변화 동적 전환(transition), 키프레임 무한 반복 애니메이션(@keyframes)을 작성합니다.
```html
<head>
  <style>
    /* 2D 변환 및 호버 반응 */
    .trans-box {
      display: inline-block;
      width: 100px;
      height: 50px;
      background: olivedrab;
      color: white;
      transform: rotate(20deg);
      transition: transform 1s, font-size 1s;
    }
    .trans-box:hover {
      transform: rotate(80deg) scale(1.5);
      font-size: 130%;
    }

    /* @keyframes 키프레임 애니메이션 정의 */
    @keyframes textColorAnimation {
      0% { color: blue; font-size: 100%; }
      50% { color: green; font-size: 150%; }
      100% { color: red; font-size: 100%; }
    }
    .animated-text {
      animation-name: textColorAnimation;
      animation-duration: 3s;
      animation-iteration-count: infinite;
    }
  </style>
</head>
<body>
  <div class="trans-box">Transform</div>
  <p class="animated-text">동적 무한 애니메이션 텍스트</p>
</body>
```

--------------------------------------------------------------------------------

#### 5. 문서 요소별 주요 속성 및 활용법 정리
##### 리스트, 표 및 폼 디자인 작성 규격
1.  **리스트 마커 제거 및 포지셔닝:**  `list-style-type: none`으로 기본 불릿을 제거하고, `list-style-image: url(...)`로 사용자 지정 마커를 삽입하거나 `list-style-position: inside | outside`로 마커 위치를 제어합니다.
2.  **표 테두리 및 줄무늬 처리:**  `table { border-collapse: collapse; }`로 이중 테두리를 단일선으로 합치며, `tbody tr:nth-child(even)` 가상 클래스로 짝수 행에 배경색을 부여하여 읽기 쉬운 줄무늬 테이블을 만듭니다.
3.  **폼 선택자 및 가상 클래스 활용:**  `input[type=text]` 속성 선택자로 특정 타입 요소를 조절하며, `:hover`(마우스 오버 시) 및 `:focus`(입력 포커스 획득 시) 가상 클래스를 활용해 사용자 인터랙션 반응 스타일을 부여합니다.
##### 포지셔닝 및 CSS3 동적 시각 효과 적용 절차
1.  **레이아웃 배치 기준점 설정:**  절대 배치(`position: absolute`) 사용 시 기준이 될 부모 컨테이너 요소에 `position: relative`를 지정하여 브라우저 화면 전체가 아닌 부모 요소를 기준으로 좌표(`top`, `left` 등)가 계산되도록 설정합니다.
2.  **변환(Transform) 함수 조합:**  `transform: rotate(각도deg) scale(비율) translateY(이동px) skew(기울임deg)`와 같이 다중 변환 함수를 공백으로 구분하여 한 줄에 복합적으로 적용할 수 있습니다.
3.  **애니메이션 및 전환 제어:**  `transition: 프로퍼티 시간`을 지정하여 상태 변경 시 지정한 시간 동안 점진적 변화를 일으키며, `@keyframes 이름 { from { ... } to { ... } }` 또는 `0%~100%` 단계별로 애니메이션 프레임을 선언한 후 `animation-name`, `animation-duration`, `animation-iteration-count: infinite` 속성을 지정해 실행합니다.

