### 웹프로그래밍 Ch 09: 이벤트 기초 및 활용
이 저장소는  **웹프로그래밍 Ch 09** 의 이벤트(Event) 개념과 3가지 이벤트 리스너 작성법, 이벤트 객체(event) 및 주요 프로퍼티(type, target, preventDefault()), 이벤트 흐름(캡처 단계 및 버블 단계), 마우스 및 키보드/폼 관련 이벤트 처리 기법을 정리한 README 문서입니다.

--------------------------------------------------------------------------------

#### 1. 개요 및 학습 정보
*   **학습 주제:**  이벤트 및 이벤트 리스너 개념, 이벤트 리스너 등록 방식 3가지(HTML 태그 속성, DOM 객체 프로퍼티, addEventListener), 이벤트 객체(e / event) 및 주요 멤버(type, target, preventDefault()), 디폴트 행동 취소, 이벤트 흐름(캡처링과 버블링), 마우스·키보드·폼 이벤트 활용

--------------------------------------------------------------------------------

#### 2. 이벤트 개념 및 이벤트 흐름(Propagation) 메커니즘
이벤트(Event)는 사용자의 마우스 클릭, 키보드 입력, 문서/이미지 로딩 완료 등 브라우저 내에서 발생하는 상태 변화를 자바스크립트 코드에게 알리는 신호입니다.
##### 이벤트 리스너 작성 방식 3가지
*   **HTML 태그의 이벤트 속성에 작성:**  `<p onclick="this.style.color='red'">`와 같이 이벤트 속성에 직접 코드를 대입합니다.
*   **DOM 객체의 이벤트 리스너 프로퍼티에 작성:**  `obj.onclick = functionName;` 형태로 함수 참조를 연결합니다. (주의: `functionName()`과 같이 괄호를 붙이면 함수 실행 결과가 전달되므로 괄호 없이 등록)
*   **`addEventListener()` 메소드 사용:**  `obj.addEventListener("click", functionName, useCapture)`를 사용하여 복수의 리스너를 안전하게 등록합니다.
##### 이벤트 흐름(Event Flow)과 캡처/버블 단계
*   **캡처 단계 (Capturing Phase):**  이벤트 발생 시 `window` 객체에서 시작하여 DOM 트리를 따라 최하위 이벤트 타겟 객체까지 내려가는 과정입니다. (`addEventListener` 3번째 인수를 `true`로 설정 시 실행)
*   **버블 단계 (Bubbling Phase):**  이벤트 타겟 객체에서 시작하여 DOM 트리를 따라 다시 최상위 `window` 객체까지 올라가는 과정입니다. (기본 리스너 등록 및 3번째 인수가 `false`일 때 실행)

--------------------------------------------------------------------------------

#### 3. 이벤트 등록 방식 및 이벤트 객체 주요 멤버 구분
이벤트 리스너 등록 방식과 이벤트 객체(Event Object)의 주요 공통 멤버 구분입니다.
| 구분 | 역할 및 특징 | 주요 속성 및 코드 작성 예시 |
| ------ | ------ | ------ |
| **이벤트 등록 메소드** | DOM 객체에 이벤트를 바인딩하며 캡처/버블 제어 | `obj.addEventListener("click", over, false);`, `obj.removeEventListener("click", over);` |
| **이벤트 정보 프로퍼티** | 현재 발생한 이벤트의 종류 및 유발한 DOM 객체 탐색 | `e.type` (이벤트 종류), `e.target` (이벤트를 유발시킨 객체), `e.currentTarget` (현재 리스너 실행 객체) |
| **디폴트 행동 취소** | 태그 고유의 기본 동작(링크 이동, 폼 전송)을 강제 차단 | `e.preventDefault();`, HTML 속성에 `onclick="return false;"` 작성 |
| **마우스 & 키보드/폼 이벤트** | 입력 장치 동작 및 폼 요소 상태 변화 감지 | `mouseover`, `mouseout`, `wheel`, `keydown`, `keyup`, `focus`, `blur`, `change`, `submit` |

--------------------------------------------------------------------------------

#### 4. HTML5 / JavaScript 구문 및 실습 코드 사용법
##### addEventListener 등록 및 이벤트 객체(e.target, e.type) 활용 예시
`addEventListener()`로 마우스 오버/아웃 이벤트 리스너를 등록하고, 이벤트 발생 시 전달받은 이벤트 객체 `e`의 `target`과 `type` 프로퍼티를 활용하는 HTML5 완전한 코드 구조입니다.
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>addEventListener 및 이벤트 객체 활용</title>
  <script>
    let p;
    // 문서 로드 완료 후 실행되는 초기화 함수
    function init() {
      p = document.getElementById("p");
      // addEventListener를 사용해 이벤트 리스너 등록
      p.addEventListener("mouseover", over);
      p.addEventListener("mouseout", out);
    }

    function over(e) {
      // e.target을 통해 이벤트를 발생시킨 DOM 객체의 스타일 변경
      e.target.style.backgroundColor = "orchid";
      e.target.style.color = "white";
    }

    function out(e) {
      e.target.style.backgroundColor = "white";
      e.target.style.color = "black";
    }

    // 클릭 시 이벤트 객체의 주요 정보(type, target)를 출력하는 함수
    function printEventInfo(e) {
      let info = "이벤트 종류(type): " + e.type + "\n"
               + "이벤트 타겟(target): " + e.target.tagName + "\n"
               + "현재 실행 객체(currentTarget): " + e.currentTarget.tagName;
      alert(info);
    }
  </script>
</head>
<body onload="init()">
  <h3>addEventListener 및 이벤트 객체 정보 실습</h3>
  <hr>
  <p id="p">이곳에 마우스를 올리면 배경색이 orchid로 변경됩니다.</p>
  <br>
  <!-- HTML 태그의 이벤트 속성에서 event 키워드로 이벤트 객체 전달 -->
  <button onclick="printEventInfo(event)">이벤트 객체 정보 확인</button>
</body>
</html>
```

##### 이벤트 디폴트 행동 취소(preventDefault) 및 폼 포커스 리스너 예시
`<a>` 태그의 기본 페이지 이동 행동을 `e.preventDefault()`로 제어하고, `<input>` 요소의 `focus`와 `blur` 이벤트를 제어하는 HTML5 완전한 코드 구조입니다.
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>디폴트 행동 취소 및 폼 이벤트</title>
  <script>
    // 하이퍼링크 클릭 시 사용자 확인 후 이동을 취소하거나 진행하는 함수
    function cancelLink(e) {
      let choice = confirm("웹 사이트로 이동하시겠습니까?");
      if (!choice) {
        e.preventDefault(); // confirm 결과가 false이면 기본 이동 행동 취소
      }
    }

    // 텍스트 상자에 포커스가 들어올 때 배경색 변경
    function checkFocus(obj) {
      obj.style.backgroundColor = "lightyellow";
    }

    // 텍스트 상자에서 포커스가 나갈 때 배경색 원복
    function checkBlur(obj) {
      obj.style.backgroundColor = "white";
    }
  </script>
</head>
<body>
  <h3>이벤트 디폴트 행동 취소 및 폼 이벤트 실습</h3>
  <hr>
  <!-- preventDefault()를 이용한 <a> 태그 이동 제어 -->
  <a href="http://example.com" onclick="cancelLink(event)">이동 확인 링크</a>
  <br><br>
  <form>
    이름 입력: <input type="text" onfocus="checkFocus(this)" onblur="checkBlur(this)">
    <p style="font-size:12px; color:gray;">Input 상자를 클릭(Focus)하거나 다른 곳을 클릭(Blur)해보세요.</p>
  </form>
</body>
</html>
```

--------------------------------------------------------------------------------

#### 5. 이벤트 처리 및 리스너 작성 규칙 정리
##### 이벤트 리스너 함수 등록 규격
1.  **함수 참조 전달 규칙:**  DOM 객체의 프로퍼티로 함수를 등록할 때는 `p.onmouseover = over;`와 같이 함수 이름만 대입해야 합니다. (`p.onmouseover = over();`와 같이 괄호를 붙이면 함수 실행 반환값이 대입되어 동작하지 않음)
2.  **HTML 태그 내 이벤트 객체 전달:**  HTML 태그 속성에 리스너를 작성할 때 이벤트 객체를 매개변수로 전달하려면 고정된 예약어인 `event` 키워드를 사용해야 합니다. (예: `onclick="myFunc(event)"`)
##### 디폴트 행동 및 이벤트 전달 제어 수칙
1.  **디폴트 행동 강제 취소:**  `<a>` 태그 이동, `<input type="submit">` 폼 전송, 체크박스 선택 등 태그 고유의 기본 동작을 막으려면 리스너 내에서 `e.preventDefault()`를 호출하거나 HTML 리스너에서 `return false;` 구문을 실행합니다.
2.  **이벤트 캡처/버블 지정:**  `addEventListener()` 메소드의 3번째 매개변수가 `true`이면 캡처링 단계에서 리스너가 호출되고, `false`(기본값)이면 버블링 단계에서 리스너가 호출됩니다.

