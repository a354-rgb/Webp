## 웹프로그래밍 Ch 03: HTML5 문서 구조화와 웹 폼
이 저장소는  **웹프로그래밍 Ch 03** 의 HTML5 시맨틱 태그 문서 구조화, 폼(Form) 요소 작성법, 다양한 input 타입 및 데이터 전송 방식을 정리한 README 문서입니다.

--------------------------------------------------------------------------------

#### 1. 개요 및 학습 정보
*   **학습 주제:**  HTML5 시맨틱 태그, 웹 문서 구조화, 웹 폼(Form) 요소, input 입력 제어 및 데이터 전송

--------------------------------------------------------------------------------

#### 2. 웹 문서 구조화 및 시맨틱 태그
웹 문서를 구조화하고 의미(Semantic) 있는 태그를 사용하여 검색 엔진 최적화 및 문서 파악을 용이하게 합니다.
##### 시맨틱 웹과 시맨틱 태그의 목적
*   **시맨틱 웹(Semantic Web):**  웹 문서의 내용을 구조화하여 컴퓨터나 검색 엔진이 의미 있는 내용을 쉽게 탐색하고 처리할 수 있도록 하는 웹 환경입니다.
*   **구조 분할 태그:**  기존의 `<div>`나 `<table>` 대신 문서 영역별 의미를 가지는 태그를 활용하여 명확한 구조를 정의합니다.
##### 주요 시맨틱 태그 및 제거된 태그
*   **블록 시맨틱 태그:**  `<header>` (머리말), `<nav>` (목차/내비게이션), `<section>` (본문 장/절), `<article>` (독립적 기사/포스트), `<aside>` (사이드바/노트), `<footer>` (꼬리말), `<figure>` (그림/코드 블록화), `<details>`/`<summary>` (상세정보 열기/닫기)
*   **인라인 시맨틱 태그:**  `<mark>` (형광펜 하이라이팅), `<time>` (시간 표시), `<meter>` (범위/비율 표시), `<progress>` (작업 진행률)
*   **HTML5 제거 태그 (사용 금지):**  `<font>`, `<center>`, `<big>`, `<u>`, `<dir>`, `<strike>`, `<frame>`, `<frameset>` (문서의 시맨틱 구조를 저해하여 HTML5 표준에서 제외됨)

--------------------------------------------------------------------------------

#### 3. 웹 페이지 구성 3요소 및 웹 폼 역할
HTML5 시맨틱 구조와 사용자 입력을 처리하는 웹 폼의 역할을 구분하여 개발합니다.
| 구분 | 역할 | 주요 기술 및 담당 영역 |
| ------ | ------ | ------ |
| **문서 구조화 (Structure)** | 의미 기반의 페이지 영역 분할 및 콘텐츠 배치 | HTML5 시맨틱 태그 (`<header>`, `<nav>`, `<section>`, `<article>`, `<aside>`, `<footer>`) |
| **폼 전송 및 제어 (Form & Action)** | 사용자 입력 데이터를 서버 응용프로그램으로 전송 | `<form>` (`action`, `method="GET\|POST"`, `name`, `target`) |
| **입력 요소 및 캡션 (Inputs & Labels)** | 한 줄/여러 줄 텍스트, 선택형 버튼, 날짜/색상 제어 | `<input>`, `<textarea>`, `<select>`, `<datalist>`, `<label>`, `<fieldset>` |

--------------------------------------------------------------------------------

#### 4. HTML5 시맨틱 태그 / 웹 폼 구문 및 실습 코드 사용법
##### HTML5 시맨틱 태그 기반 문서 구조화
`<header>`, `<nav>`, `<section>`, `<article>`, `<aside>`, `<footer>` 태그로 영역을 분할하고 각 요소의 레이아웃과 디자인은 CSS3로 처리합니다.
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>HTML5 문서 구조 시맨틱 태그 사용</title>
  <style>
    html, body { margin: 0; padding: 0; height: 100%; }
    header { width: 100%; height: 15%; background: yellow; }
    nav { width: 15%; height: 70%; float: left; background: orange; }
    section { width: 70%; height: 70%; float: left; background: olivedrab; }
    aside { width: 15%; height: 70%; float: left; background: orange; }
    footer { width: 100%; height: 15%; clear: both; background: plum; }
  </style>
</head>
<body>
  <header>header</header>
  <nav>nav</nav>
  <section>
    <article>
      <h2>Who is Elvis?</h2>
      <p>엘비스 프레슬리는 20세기 가장 잘 알려진 미국 가수 중 한 명이었다.</p>
    </article>
  </section>
  <aside>aside</aside>
  <footer>footer</footer>
</body>
</html>
```
##### 웹 폼 `<form>` 및 기본 텍스트 입력 작성
`<form>` 태그로 입력 요소를 둘러싸고, `<label>` 태그를 이용하여 캡션을 폼 요소와 하나로 묶습니다.
```html
<form name="fo" action="login.jsp" method="get">
  <label>사용자 ID : <input type="text" size="15" value=""></label><br>
  <label for="pass">비밀 번호 : </label>
  <input id="pass" type="password" size="15" maxlength="4"><br>
  <label for="intro">자소서 : </label>
  <textarea id="intro" cols="20" rows="5">자기소개 작성</textarea><br>
  <input type="submit" value="완료">
</form>
```
##### 다양한 입력 제어 태그 (데이터 목록, 버튼, 선택형, 날짜/시간)
`<datalist>`, `<select>`, `<input type="radio|checkbox">`, `<input type="date|time|color|range">` 등 다양한 HTML5 폼 요소를 활용합니다.
```html
<form>
  <!-- 데이터 목록(datalist)을 가진 텍스트 입력 -->
  나라 : <input type="text" list="countries">
  <datalist id="countries">
    <option value="가나">
    <option value="스위스">
    <option value="브라질">
  </datalist><br>

  <!-- 라디오버튼 그룹화 (동일한 name 지정) -->
  <label><input type="radio" name="china" value="1"> 짜장면</label>
  <label><input type="radio" name="china" value="2" checked> 짬뽕</label><br>

  <!-- 날짜, 시간, 색상, 숫자/범위 입력 -->
  생일 : <input type="date" value="2003-02-09"><br>
  시간 : <input type="time" value="21:30"><br>
  색상 : <input type="color" value="#00BFFF"><br>
  온도 : <input type="range" min="10" max="30" value="20">
</form>
```

--------------------------------------------------------------------------------

#### 5. 웹 폼 데이터 전송 방식 및 그룹화 활용법
##### 웹 폼 데이터 전송 절차 (GET / POST)
1.  **폼 태그 정의:**  `<form action="서버 응용프로그램 URL" method="GET|POST">` 형태로 전송 목적지와 방식을 지정합니다.
2.  **데이터 생성 및 요청:**  `submit` 버튼 클릭 시 입력 창의 값들이 `name=value` 형태의 쿼리 스트링으로 결합하여 서버에 전송됩니다.
3.  **GET 방식:**  URL 뒤에 `?name=value` 형태로 데이터를 부착하여 전송하며, 검색 및 단순 데이터 요청 시 사용됩니다.
4.  **POST 방식:**  HTTP 요청 패킷의 바디(Body)에 데이터를 포함시켜 전송하며, 보안이 필요하거나 대용량 데이터 전송 시 사용됩니다.
##### 폼 요소 그룹화 및 접근성 향상
1.  **`<label>` 태그 활용:**  캡션 텍스트나 이미지를 폼 요소와 연결하여 캡션을 클릭해도 라디오버튼/체크박스가 선택되도록 접근성을 향상시킵니다.
2.  **`<fieldset>` 및 `<legend>` 활용:**  연관된 입력 폼 요소들을 테두리 상자로 묶고 `<legend>` 태그로 그룹 제목을 부여하여 시각적 및 구조적으로 그룹화합니다.

