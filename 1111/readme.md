### 웹프로그래밍 Ch 10: 윈도우와 브라우저 관련 객체
이 저장소는  **웹프로그래밍 Ch 10** 의 BOM(Browser Object Model) 개념, window 객체의 팝업 제어 및 타이머·스크롤·프린트 기능, location·navigator·screen·history 코어 객체 활용법을 정리한 README 문서입니다.

--------------------------------------------------------------------------------

#### 1. 개요 및 학습 정보
*   **학습 주제:**  BOM(Browser Object Model) 개요, window 객체 생성/닫기/위치·크기 조절, 타이머 함수(setTimeout, setInterval), 스크롤 및 프린트 이벤트(onbeforeprint, onafterprint), location·navigator·screen·history 객체

--------------------------------------------------------------------------------

#### 2. BOM(Browser Object Model) 개념 및 주요 객체 구조
BOM은 웹 브라우저 윈도우 및 브라우저 자체를 자바스크립트로 제어하기 위한 객체 모음입니다.
##### BOM 객체의 특징 및 주요 객체 구획
*   **국제 표준 미지정:**  W3C 표준이 지정되지 않아 브라우저 제작사마다 일부 객체 프로퍼티 및 메소드가 다를 수 있습니다.
*   **최상위 window 객체:**  모든 BOM 객체는 window 객체의 하위 객체 또는 계층 구조로 존재합니다.
##### 브라우저 주요 객체 역할 요약
*   **`window`:**  브라우저 윈도우 모양 제어, 새 창 열기/닫기, 타이머 설정, 스크롤, 프린트 등 제어
*   **`location`:**  브라우저 윈도우에 로드된 HTML 페이지의 URL 정보를 다루며 새 페이지로 이동
*   **`navigator`:**  현재 작동 중인 웹 브라우저 종류, 버전, 엔진, 언어, 플러그인 정보 제공
*   **`screen`:**  웹 브라우저가 실행되고 있는 스크린 디스플레이 장치의 해상도 및 색상 정보 제공
*   **`history`:**  브라우저 윈도우에 로드된 방문 URL 히스토리 목록 및 이전/다음 이동 제어

--------------------------------------------------------------------------------

#### 3. 브라우저 관련 객체(BOM) 기능별 구분
BOM 핵심 객체와 주요 메소드/프로퍼티의 구체적 기능 구분입니다.
| 구분 | 역할 및 특징 | 주요 프로퍼티 및 메소드 사용 예시 |
| ------ | ------ | ------ |
| **window (창 제어 & 타이머)** | 새 창 열기/닫기, 위치/크기 조절, 타이머, 스크롤 및 인쇄 | `window.open()`, `window.close()`, `setTimeout()`, `setInterval()`, `scrollBy()`, `print()` |
| **location (URL & 이동)** | 현재 URL 정보 참조 및 웹 페이지 이동 처리 | `location.href`, `location.assign()`, `location.replace()`, `location.hostname` |
| **navigator (브라우저 정보)** | 브라우저 이름, 버전, OS 플랫폼, 언어 및 플러그인 검사 | `navigator.userAgent`, `navigator.language`, `navigator.cookieEnabled`, `navigator.plugins` |
| **screen (디스플레이 장치)** | 화면 스크린 해상도, 색상 비트 수 및 작업표시줄 제외 영역 검사 | `screen.width`, `screen.height`, `screen.availWidth`, `screen.availHeight`, `screen.colorDepth` |
| **history (방문 기록)** | 브라우저 방문 웹 페이지 리스트 내 앞/뒤 이동 | `history.length`, `history.back()`, `history.forward()`, `history.go(-1)` |

--------------------------------------------------------------------------------

#### 4. HTML5 / JavaScript 구문 및 실습 코드 사용법
##### 윈도우 생성/닫기 및 타이머/스크롤 제어 예시
window.open()을 통한 팝업 생성, setTimeout()/setInterval()을 이용한 타이머 제어 및 scrollBy() 스크롤 구문을 포함한 완전한 HTML5 코드 구조입니다.
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>window 객체 제어 및 타이머 활용</title>
  <script>
    let newWin = null;
    let timerID = null;

    // 새 윈도우 팝업 열기
    function openWindow() {
      newWin = window.open("http://www.naver.com", "myWin", "left=300,top=300,width=400,height=300");
    }

    // 팝업 윈도우 닫기
    function closeWindow() {
      if (newWin && !newWin.closed) {
        newWin.close();
      }
    }

    // 5초 후 자동 이동 타이머 시작
    function startTimer() {
      timerID = setTimeout(function() {
        window.location.href = "http://www.google.com";
      }, 5000);
    }

    // 타이머 중단
    function stopTimer() {
      if (timerID !== null) {
        clearTimeout(timerID);
      }
    }

    // 웹 페이지 자동 스크롤
    function autoScroll() {
      window.scrollBy(0, 10);
    }
    setInterval(autoScroll, 1000);
  </script>
</head>
<body>
  <h3>window 객체 팝업, 타이머, 스크롤 실습</h3>
  <hr>
  <button onclick="openWindow()">새 윈도우 열기</button>
  <button onclick="closeWindow()">새 윈도우 닫기</button>
  <br><br>
  <button onclick="startTimer()">5초 후 Google 이동 시작</button>
  <button onclick="stopTimer()">이동 타이머 취소</button>
  <br><br>
  <button onclick="window.print()">웹 페이지 인쇄</button>
</body>
</html>
```

##### location, navigator, screen, history 객체 활용 예시
브라우저 정보 출력, URL 이동, 디스플레이 해상도 검사 및 히스토리 제어를 포함한 완전한 HTML5 코드 구조입니다.
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>BOM 객체(location, navigator, screen, history) 활용</title>
  <script>
    function showBrowserInfo() {
      let info = "<b>App Name:</b> " + navigator.appName + "<br>";
      info += "<b>User Agent:</b> " + navigator.userAgent + "<br>";
      info += "<b>Language:</b> " + navigator.language + "<br>";
      info += "<b>Screen Resolution:</b> " + screen.width + "x" + screen.height + "<br>";
      info += "<b>Available Screen:</b> " + screen.availWidth + "x" + screen.availHeight + "<br>";
      
      document.getElementById("infoDiv").innerHTML = info;
    }

    function changeLocation() {
      let select = document.getElementById("siteSelect");
      let url = select.options[select.selectedIndex].value;
      window.location.href = url;
    }
  </script>
</head>
<body onload="showBrowserInfo()">
  <h3>BOM 객체 상세 정보 및 페이지 이동</h3>
  <hr>
  <div id="infoDiv" style="border: 1px solid green; padding: 10px;"></div>
  <br>
  <label for="siteSelect">이동할 사이트 선택: </label>
  <select id="siteSelect">
    <option value="http://www.naver.com">네이버</option>
    <option value="http://www.google.com">구글</option>
  </select>
  <button onclick="changeLocation()">이동</button>
  <br><br>
  <button onclick="history.back()">뒤로 가기</button>
  <button onclick="history.forward()">앞으로 가기</button>
</body>
</html>
```

--------------------------------------------------------------------------------

#### 5. BOM 객체별 주요 활용 규격 및 디버깅 절차
##### BOM 객체 제어 및 보안 규격
1.  **Window 팝업 차단:**  대부분의 현대 브라우저는 사용자 클릭 이벤트(`onclick` 등) 없이 실행되는 `window.open()`을 팝업으로 간주하여 차단하므로 이벤트 리스너 내부에서 실행합니다.
2.  **Window 닫기 제한:**  `window.close()`는 자바스크립트에 의해 새로 열린 윈도우(`window.open()`)만 닫을 수 있으며, 보안상 사용자가 직접 연 기존 브라우저 탭은 닫히지 않을 수 있습니다.
3.  **타이머 ID 관리:**  `setTimeout()`과 `setInterval()`은 고유한 타이머 ID 정수를 반환하므로 전역 변수에 저장해야 `clearTimeout()` 및 `clearInterval()`로 정확히 해제할 수 있습니다.
##### 인쇄 및 위치/히스토리 활용 절차
1.  **인쇄 이벤트 제어:**  `onbeforeprint` 이벤트에서 숨겨진 요소(로고, 헤더 등)를 `display: block`으로 전환하고, `onafterprint` 이벤트에서 다시 `display: none`으로 원복하여 인쇄 전용 레이아웃을 구성합니다.
2.  **URL 이동 메소드 차이:**  `location.href` 및 `location.assign()`은 방문 기록(history)에 새 URL을 추가하여 뒤로 가기가 가능하지만, `location.replace()`는 현재 히스토리를 덮어써서 뒤로 가기를 방지합니다.
3.  **History 제어:**  `history.back()`, `history.forward()`, `history.go(-1)` 메소드를 활용해 브라우저 툴바 버튼과 동일하게 이전/다음 방문 페이지로 이동합니다.

