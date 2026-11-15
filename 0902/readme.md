### 웹프로그래밍 Ch 01: 웹 프로그래밍과 HTML5 개요

이 저장소는 **웹프로그래밍 Ch 01**의 웹 동작 구조, HTML5·CSS3·JavaScript의 분리 개발 실습 코드, 그리고 개발 환경 및 브라우저 디버깅 도구 사용법을 정리한 README 문서입니다.

---

#### 1. 개요 및 학습 정보

* **학습 주제:** 웹 프로그래밍 기초, 웹 서버/클라이언트 구조, 웹 페이지 3요소 분리, 크롬 개발자 도구 디버깅

---

#### 2. 웹 구조 및 웹 서버·클라이언트 관계

웹(World Wide Web)은 인터넷상에서 컴퓨터 간 웹 문서를 주고받는 네트워크 시스템입니다.

##### 웹 서버와 웹 클라이언트의 역할 분담
* **웹 클라이언트(Web Client):** 웹 브라우저를 통해 웹 서버에 웹 문서나 자원을 요청하고, 서버로부터 전달받은 HTML 문서를 해석하여 화면에 출력(렌더링)합니다.
* **웹 서버(Web Server):** 웹 사이트 자원(HTML 문서, 이미지, 동영상, 데이터베이스)을 저장 및 관리하며, 클라이언트의 HTTP 요청을 해석하여 요구된 자원이나 응용프로그램 실행 결과를 전송합니다.
* **부하 분산:** 웹 서버는 자원 전송만을 담당하고 화면 출력은 브라우저가 수행하므로, 서버 부하가 줄어들어 다수의 클라이언트 동시 접속을 지원합니다.

##### 주요 웹 서버 소프트웨어 및 응용프로그램 언어
* **웹 서버 소프트웨어:** Apache, IIS, nginx, GWS(Google Web Server)
* **웹 서버 응용프로그램 개발 언어:** 서버용 JavaScript, JSP(Java Server Page), Java 서블릿, C/C++, PHP, Perl, Python

---

#### 3. 웹 페이지 구성 3요소 및 분리 개발

HTML5 표준에서는 구조, 스타일, 행동을 독립된 영역으로 분리하여 개발합니다.

| 구분 | 역할 | 주요 기술 및 담당 영역 |
| :--- | :--- | :--- |
| **구조와 내용 (Structure)** | 웹 페이지에 들어갈 텍스트, 이미지, 태그 요소 배치 | HTML5 태그 (`<h3>`, `<hr>`, `<div>`, `<span>`, `<img>` 등) |
| **모양 및 스타일 (Style)** | 웹 페이지 요소의 색상, 폰트, 여백, 정렬 등 외형 지정 | CSS3 스타일시트 (`<style>` 태그 내 속성 정의) |
| **행동 및 응용프로그램 (Behavior)** | 사용자 이벤트 처리 및 동적 UI 반응 | JavaScript (`<script>` 태그 내 DOM 제어 함수 정의) |

---

#### 4. HTML5 / CSS3 / JavaScript 구문 및 실습 코드 사용법

##### HTML5 기본 구조 및 태그 작성
`<head>` 영역에 메타 정보와 타이틀을 선언하고, `<body>` 영역에 출력할 구체적인 요소를 배치합니다.

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>웹 페이지의 구성 요소</title>
</head>
<body>
  <h3>Elvis Presley</h3>
  <hr>
  <div><img id="fig" src=""></div>
  He was an American singer and actor. In November 1956, he made his film debut in <span>Love Me Tender</span>. He is often referred to as "<span>the King of Rock and Roll</span>".
</body>
</html>
```

##### CSS3 스타일시트 적용
`<head>` 태그 내부의 `<style>` 블록에 요소 선택자와 스타일 속성을 지정하여 화면 외형을 꾸밉니다.

```html
<head>
  <meta charset="utf-8">
  <title>웹 페이지의 구성 요소</title>
  <style>
    body {
      background-color: linen;
      color: green;
      margin-left: 40px;
      margin-right: 40px;
    }
    h3 {
      text-align: center;
      color: darkred;
    }
    hr {
      height: 5px;
      border: solid grey;
      background-color: grey;
    }
    span {
      color: blue;
      font-size: 20px;
    }
  </style>
</head>
```

##### JavaScript 동적 이벤트 및 DOM 제어
`<head>` 내 `<script>` 태그에 자바스크립트 함수를 작성하고, HTML 태그의 이벤트 속성(`onmouseover`, `onmouseout`)과 연결하여 DOM 객체의 `src` 속성을 동적으로 변경합니다.

```html
<head>
  <script>
    function show() {
      // <img> 요소에 이미지 경로 설정
      document.getElementById("fig").src = "ElvisPresley.png";
    }
    function hide() {
      // <img> 요소의 이미지 제거
      document.getElementById("fig").src = "";
    }
  </script>
</head>
<body>
  <!-- 텍스트에 마우스를 올리면 show() 호출, 떼면 hide() 호출 -->
  <h3 onmouseover="show()" onmouseout="hide()">Elvis Presley</h3>
  <hr>
  <div><img id="fig" src=""></div>
  ...
</body>
</html>
```

---

#### 5. 개발 환경 구축 및 크롬(Chrome) 디버깅 도구 활용법

##### 문서 작성 및 저장 규격
1. **편집기 사용:** Sublime Text, VS Code, Atom, 메모장 등의 텍스트 편집기 활용
2. **확장자 및 인코딩:** 파일 저장 시 확장자는 `.html`로 지정하며, 문자셋 인코딩은 반드시 `UTF-8`로 설정 (HTML, CSS, JS 공통 적용)
3. **실행:** 저장된 `.html` 파일을 웹 브라우저(Chrome, Edge 등)에서 더블 클릭하여 실행

##### 크롬 개발자 도구(DevTools) 디버깅 절차
1. **개발자 도구 실행:** 브라우저 화면 빈 공간에서 마우스 우클릭 후 `검사` 클릭 또는 `F12` 단축키 입력
2. **소스 코드 확인:** 상단 메뉴 패널에서 `Sources` 탭을 선택하여 로드된 HTML/JS 파일 선택
3. **중단점(Breakpoint) 설정:** 소스 코드 좌측 라인 번호를 마우스로 클릭하여 중단점 생성 (예: 자바스크립트 실행 라인)
4. **단계별 디버깅:** 이벤트 발생 시 중단점에서 코드 실행이 멈추면, 상단의 '한 라인씩 실행(Step over)' 버튼을 사용하여 자바스크립트 수행 흐름과 변수 상태 추적
