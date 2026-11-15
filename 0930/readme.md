### 웹프로그래밍 Ch 05: CSS3 고급 활용
이 저장소는  **웹프로그래밍 Ch 05** 의 CSS3 요소 배치 프로퍼티(display, position, float, z-index, overflow), 리스트 기반 네비게이션 메뉴 작성, 표 및 폼 스타일링, 그리고 @keyframes 애니메이션, transition 전환, transform 2D 변환 기술을 정리한 README 문서입니다.

--------------------------------------------------------------------------------

#### 1. 개요 및 학습 정보
*   **학습 주제:**  HTML 태그 배치 및 수평/수직 위치 제어(display, position, float, z-index, visibility, overflow), 리스트 기반 가로 메뉴, 표 및 폼 요소 스타일링, CSS3 동적 효과(애니메이션, 전환, 변환)

--------------------------------------------------------------------------------

#### 2. CSS3 요소 배치(Positioning) 메커니즘
HTML 태그는 일반적인 문서 흐름(normal flow)을 따라 위에서 아래로 순차 배치되지만, CSS3 배치 프로퍼티를 통해 자율적으로 재배치할 수 있습니다.
##### 박스 유형(display) 및 좌표 배치(position) 속성
*   **`display` 속성:**  요소의 박스 유형을 지정합니다. `block` (새 줄 시작), `inline` (텍스트 흐름 내 배치, 너비/높이 불가), `inline-block` (인라인 흐름 + 너비/높이 설정 가능), `none` (화면 및 레이아웃에서 완전 제거).
*   **`position` 속성:**  요소의 배치 방식을 결정합니다. `static` (기본 배치), `relative` (기본 위치 기준 상대 이동), `absolute` (부모 컨테이너 기준 절대 위치 지정), `fixed` (브라우저 뷰포트 기준 고정 배치).
##### 유동 배치(float) 및 계층/가시성 속성
*   **`float` 속성:**  요소를 왼쪽(`left`) 또는 오른쪽(`right`)으로 띄워 텍스트가 주변을 둘러싸게 만듭니다. `clear` 속성으로 유동 상태를 해제합니다.
*   **`z-index` / `overflow` / `visibility`:**  `z-index` (수직 쌓임 순서, 값이 클수록 위), `overflow` (콘텐츠가 박스를 넘칠 때: visible, hidden, scroll, auto), `visibility` (hidden으로 지정 시 공간은 유지한 채 숨김).

--------------------------------------------------------------------------------

#### 3. CSS3 고급 기능 및 동적 효과 구분
CSS3 고급 기능 및 시각적 동적 변화 기법의 구분입니다.
| 구분 | 역할 및 특징 | 주요 프로퍼티 및 사용 예시 |
| ------ | ------ | ------ |
| **디스플레이 & 위치 배치** | 박스 유형 변경, 위치 이동 및 겹침 제어 | `display: inline-block;`, `position: absolute; top: 10px; left: 20px;`, `z-index: 5;` |
| **리스트 & 표/폼 스타일링** | 목록 마커 제거, 가로 메뉴 구성, 폼 포커스 반응 | `list-style-type: none;`, `table { border-collapse: collapse; }`, `input:focus { font-size: 120%; }` |
| **@keyframes 애니메이션** | 시간 비율(% 또는 from/to)별 스타일 연속 변화 정의 | `@keyframes bomb { from { font-size: 400%; } to { font-size: 100%; } }` |
| **Transition (전환)** | 상태 변경 시 프로퍼티 값을 지정한 시간에 걸쳐 부드럽게 변경 | `transition: font-size 5s;`, `span:hover { font-size: 500%; }` |
| **Transform (2D 변환)** | 요소의 회전, 기울임, 이동, 크기 축소/확대 기하학적 변환 | `transform: rotate(20deg);`, `transform: scale(3, 1);`, `transform: translateY(100px);` |

--------------------------------------------------------------------------------

#### 4. HTML5 / CSS3 구문 및 실습 코드 사용법
##### 요소 배치(Position, Float, z-index) 및 가로 메뉴 구현 예시
`position: absolute`, `z-index` 배치 및 `<ul>/<li>` 요소를 이용한 가로 네비게이션 메뉴의 HTML5 완전한 코드 구조입니다.
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>CSS3 요소 배치 및 가로 메뉴</title>
  <style>
    /* 가로 네비게이션 메뉴 바 스타일 */
    #menubar {
      background: olive;
      padding: 5px;
    }
    #menubar ul {
      margin: 0;
      padding: 0;
    }
    #menubar ul li {
      display: inline-block;
      list-style-type: none;
      padding: 0px 15px;
    }
    #menubar ul li a {
      color: white;
      text-decoration: none;
      font-weight: bold;
    }
    #menubar ul li a:hover {
      color: violet;
    }

    /* Absolute 및 z-index 카드 배치 */
    .card-container {
      position: relative;
      margin-top: 20px;
      height: 160px;
    }
    .card {
      position: absolute;
      width: 100px;
      height: 140px;
      border: 1px solid black;
      background: white;
    }
    #cardA { z-index: 1; left: 10px; top: 10px; }
    #cardB { z-index: 2; left: 40px; top: 20px; }
  </style>
</head>
<body>
  <nav id="menubar">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Espresso</a></li>
      <li><a href="#">Cappuccino</a></li>
      <li><a href="#">Cafe Latte</a></li>
    </ul>
  </nav>

  <div class="card-container">
    <div id="cardA" class="card">Card A</div>
    <div id="cardB" class="card">Card B</div>
  </div>
</body>
</html>
```

##### 폼 스타일링 및 사용자 반응(:focus, :hover) 예시
`<form>`, `<label>`, `<input>` 요소에 `:hover` 및 `:focus` 가상 클래스를 적용하여 인터랙티브 반응을 구현한 HTML5 완전한 코드 구조입니다.
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>폼 스타일 및 반응형 제어</title>
  <style>
    label {
      display: block;
      margin: 10px 0;
    }
    label span {
      display: inline-block;
      width: 80px;
      text-align: right;
      padding-right: 10px;
    }
    input[type=text], input[type=email] {
      color: red;
      border: 2px solid skyblue;
      border-radius: 5px;
      padding: 5px;
    }
    /* 마우스 오버 시 배경색 변경 */
    input:hover, textarea:hover {
      background: aliceblue;
    }
    /* 포커스 획득 시 폰트 크기 확대 */
    input[type=text]:focus, input[type=email]:focus {
      font-size: 120%;
    }
  </style>
</head>
<body>
  <h3>Contact Us</h3>
  <hr>
  <form>
    <label><span>Name</span><input type="text" placeholder="Elvis"></label>
    <label><span>Email</span><input type="email" placeholder="elvis@graceland.com"></label>
    <label><span>Message</span><textarea placeholder="메시지 작성"></textarea></label>
  </form>
</body>
</html>
```

##### CSS3 동적 효과 (@keyframes 애니메이션, Transition, Transform) 예시
`@keyframes` 애니메이션과 `transition` (전환) 및 `transform` (2D 회전/확대)을 결합한 HTML5 완전한 코드 구조입니다.
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>CSS3 애니메이션, 전환, 변환</title>
  <style>
    /* 1. @keyframes 애니메이션 정의 */
    @keyframes bomb {
      from { font-size: 400%; color: red; }
      to { font-size: 100%; color: black; }
    }
    .anim-title {
      animation-name: bomb;
      animation-duration: 3s;
      animation-iteration-count: infinite;
    }

    /* 2. Transition (전환) 및 Transform (2D 변환) */
    .trans-box {
      display: inline-block;
      padding: 10px 20px;
      background: olivedrab;
      color: white;
      font-weight: bold;
      /* 2초 동안 회전/크기 변화 전환 */
      transition: transform 2s;
      transform: rotate(10deg);
    }
    .trans-box:hover {
      /* 마우스 오버 시 80도 회전 및 1.5배 확대 */
      transform: rotate(80deg) scale(1.5);
    }
  </style>
</head>
<body>
  <h3 class="anim-title">Bomb Animation!</h3>
  <hr>
  <div class="trans-box">Hover Me (Transform)</div>
</body>
</html>
```

--------------------------------------------------------------------------------

#### 5. 문서 요소별 주요 속성 및 활용법 정리
##### 배치 및 변환/애니메이션 관련 주요 속성
1.  **배치 프로퍼티 수치 축:**  `position`을 `relative`, `absolute`, `fixed`로 설정할 때 `top`, `bottom`, `left`, `right` 좌표 수치를 함께 지정하여 위치 조절.
2.  **2D 변환(Transform) 함수:**  `rotate(angle)` (회전), `scale(w, h)` (확대/축소), `translate(x, y)` (이동), `skew(x-angle, y-angle)` (기울임).
3.  **애니메이션 구성 3요소:**  `@keyframes` (시간별 상태 지정), `animation-name` (키프레임 이름 연결), `animation-duration` (1회 실행 시간), `animation-iteration-count` (반복 횟수: 수치 또는 `infinite`).
##### CSS3 레이아웃 디버깅 절차
1.  **배치 영역 확인:**  크롬 개발자 도구(`F12`)의 Elements 탭에서 요소 선택 시 오버레이되는 하늘색(content), 주황색(margin), 초록색(padding) 영역 확인.
2.  **z-index 및 쌓임 맥락(Stacking Context) 검증:**  요소가 겹칠 때 `z-index` 수치 및 부모 요소의 `position` 설정 여부를 점검하여 가려짐 현상 수정.
3.  **애니메이션 검사:**  크롬 개발자 도구 우측 상단 메뉴 ➔ `More tools` ➔ `Animations` 탭을 열어 `@keyframes` 진행 시간축과 프레임 변화를 시각적으로 재생/중단 디버깅.
