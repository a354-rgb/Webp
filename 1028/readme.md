### 웹프로그래밍 Ch 08: HTML DOM과 Document
이 저장소는  **웹프로그래밍 Ch 08** 의 HTML DOM 개념과 DOM 트리 구조, DOM 객체의 구성 요소(프로퍼티, 메소드, 컬렉션, 이벤트 리스너, CSS3 스타일), document 객체의 역할 및 DOM 요소 탐색(getElementById, getElementsByTagName, getElementsByClassName), DOM 객체의 동적 생성(createElement)과 삭제(removeChild), CSS 스타일 동적 변경 및 this 키워드 활용법을 정리한 README 문서입니다.

--------------------------------------------------------------------------------

#### 1. 개요 및 학습 정보
*   **학습 주제:**  HTML DOM 및 DOM 트리 구조, DOM 객체의 구성 요소, DOM 객체의 CSS 스타일 및 콘텐츠 동적 변경, document 객체 프로퍼티 및 탐색 메소드(getElementById, getElementsByTagName, getElementsByClassName), DOM 객체 동적 생성(createElement, appendChild) 및 삭제(removeChild), this 매개변수 활용법

--------------------------------------------------------------------------------

#### 2. HTML DOM 개요 및 Document 객체 역할
HTML DOM(Document Object Model)은 웹 페이지에 작성된 HTML 태그마다 1:1로 대응하는 자바스크립트 DOM 객체를 생성하여 제어하는 표준 모델입니다.
##### DOM 트리와 DOM 객체의 특징
*   **DOM 트리 (DOM Tree):**  HTML 태그의 부모-자식 포함 관계에 따라 DOM 객체들이 계층적인 트리(Tree) 구조를 형성합니다.
*   **DOM 객체 (DOM Element):**  DOM 트리의 각 노드(Node)를 의미하며, HTML 태그의 출력 모양, CSS3 스타일, 텍스트 및 이미지 콘텐츠를 동적으로 변경할 수 있습니다.
##### Document 객체의 개념 및 특징
*   **최상위 객체:**  `document` 객체는 HTML 문서 전체를 대변하며 DOM 트리의 최상위 노드입니다.
*   **생성 및 접근:**  브라우저가 HTML 문서를 로드하기 전 빈 `document` 객체를 생성한 후 태그를 해석하며 DOM 트리를 구축합니다. 자바스크립트에서는 `window.document` 또는 `document`로 접근합니다.
*   **스타일 미연결 주의:**  `document` 객체는 DOM 트리의 뿌리이지만 HTML 태그가 아니므로 CSS3 스타일시트가 직접 연결되지 않습니다. (예: `document.style.color = "red";` 구문은 오류 발생)

--------------------------------------------------------------------------------

#### 3. DOM 객체 구성 요소 및 탐색·제어 메소드 구분
DOM 객체의 5가지 구성 요소와 주요 DOM 탐색/제어 메소드 구분입니다.
| 구분 | 역할 및 특징 | 작성 형식 및 사용 예시 |
| ------ | ------ | ------ |
| **프로퍼티 및 스타일** | HTML 태그의 속성을 반영하며 CSS3 스타일시트 객체 제어 | `obj.id = "myId";`, `obj.innerHTML = "내용";`, `obj.style.color = "blue";` |
| **DOM 요소 검색** | ID, 태그 이름, Class 속성을 기준으로 DOM 트리의 객체 탐색 | `document.getElementById("id")`, `document.getElementsByTagName("div")`, `document.getElementsByClassName("plain")` |
| **동적 노드 생성 및 추가** | 신규 DOM 객체를 메모리에 생성하고 DOM 트리의 자식 노드로 추가 | `let newDIV = document.createElement("div");`, `parentElement.appendChild(newDIV);` |
| **동적 노드 삭제** | DOM 트리에서 특정 자식 DOM 객체를 분리 및 제거 | `let removedNode = parentElement.removeChild(childNode);` |
| **이벤트 리스너 & Context** | 태그에 등록된 이벤트 리스너를 반영하며 `this`로 객체 자신 참조 | `onclick="change(this)"`, `obj.onmouseover = overFunc;` |

--------------------------------------------------------------------------------

#### 4. HTML5 / JavaScript 구문 및 실습 코드 사용법
##### DOM 객체의 CSS3 스타일 동적 변경 및 this 키워드 활용 예시
`getElementById()`로 검색한 DOM 객체의 스타일 프로퍼티(`color`, `fontSize`, `border`)를 변경하고, 이벤트 리스너 함수 호출 시 `this` 매개변수로 현재 객체의 참조를 전달하는 HTML5 완전한 코드 구조입니다.
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>DOM 객체 스타일 및 this 활용</title>
  <script>
    // 버튼이나 div 클릭 시 호출되어 스타일을 변경하는 함수
    function changeStyle(obj, size, color) {
      obj.style.color = color;
      obj.style.fontSize = size;
      obj.style.backgroundColor = "lightyellow";
    }

    // span 요소의 스타일을 동적으로 변경하는 함수
    function changeSpan() {
      let span = document.getElementById("mySpan");
      span.style.color = "green";
      span.style.fontSize = "25px";
      span.style.display = "block";
      span.style.border = "2px dotted magenta";
      span.style.margin = "10px 0px";
    }
  </script>
</head>
<body>
  <h3>DOM 객체 스타일 동적 변경 및 this 활용</h3>
  <hr>
  <p style="color:blue">
    이것은 <span id="mySpan" style="color:red">문장입니다.</span>
  </p>
  <button onclick="changeSpan()">Span 스타일 변경</button>
  <br><br>
  <!-- this 키워드로 현재 클릭된 버튼 객체 자신을 전달 -->
  <button onclick="changeStyle(this, '20px', 'red')">버튼 크기/색상 변경</button>
  <div onclick="changeStyle(this, '22px', 'teal')" style="cursor:pointer; margin-top:10px;">
    여기를 클릭하면 DIV의 크기와 글자색이 변경됩니다.
  </div>
</body>
</html>
```

##### DOM 객체의 동적 생성(createElement), 추가(appendChild) 및 삭제(removeChild) 예시
`document.createElement()`로 새로운 `<div>` 태그를 생성하고, 속성과 스타일을 설정한 후 DOM 트리에 추가하거나 `removeChild()`로 제거하는 HTML5 완전한 코드 구조입니다.
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>DOM 객체 동적 생성 및 삭제</title>
  <script>
    // 새로운 DIV 요소를 생성하여 부모 요소에 추가하는 함수
    function createDIV() {
      let parent = document.getElementById("parent");
      let newDIV = document.createElement("div"); // 1. DOM 객체 생성
      
      // 2. 프로퍼티 및 스타일 설정
      newDIV.innerHTML = "새로 생성된 DIV 태그입니다.";
      newDIV.setAttribute("id", "myDiv");
      newDIV.style.backgroundColor = "linen";
      newDIV.style.border = "1px solid darkgray";
      newDIV.style.padding = "8px";
      newDIV.style.marginTop = "10px";
      
      // 3. DOM 트리에 자식으로 추가
      parent.appendChild(newDIV);
    }

    // 생성된 DIV 요소를 DOM 트리에서 삭제하는 함수
    function removeDIV() {
      let myDiv = document.getElementById("myDiv");
      if (myDiv !== null) {
        let parent = myDiv.parentElement; // 부모 객체 탐색
        parent.removeChild(myDiv);       // 부모에서 myDiv 제거
      } else {
        alert("삭제할 DIV 요소를 찾을 수 없습니다.");
      }
    }
  </script>
</head>
<body>
  <h3>DOM 객체 동적 추가 및 삭제</h3>
  <hr>
  <div id="parent">
    <p>아래 버튼을 클릭하여 동적으로 태그를 추가하거나 삭제하세요.</p>
  </div>
  <button onclick="createDIV()">DIV 생성 및 추가</button>
  <button onclick="removeDIV()">DIV 삭제</button>
</body>
</html>
```

--------------------------------------------------------------------------------

#### 5. DOM 객체 및 Document 제어 절차 정리
##### DOM 탐색 메소드 및 스타일 프로퍼티 사용 규격
1.  **탐색 메소드 반환 타입:**  `document.getElementById()`는 단일 DOM 객체를 리턴하며, `document.getElementsByTagName()`과 `document.getElementsByClassName()`은 조건에 맞는 모든 객체를 담은 컬렉션(HTMLCollection) 배열을 리턴하므로 `for`문으로 순회하여 처리합니다.
2.  **CSS3 스타일 프로퍼티 이름:**  자바스크립트에서 CSS 속성에 접근할 때 하이픈(-) 기호를 제거하고 카멜 표기법(Camel Case)을 사용합니다. (예: `background-color` -> `style.backgroundColor`, `font-size` -> `style.fontSize`)
##### 동적 노드 조작 및 삭제 절차
1.  **동적 생성 및 등록 절차:**  `document.createElement("태그이름")`으로 객체 생성 ➔ `innerHTML` 또는 `setAttribute()`로 속성/콘텐츠 설정 ➔ `parentElement.appendChild(childObj)` 메소드로 DOM 트리에 삽입하여 화면에 출력시킵니다.
2.  **동적 삭제 절차:**  삭제하고자 하는 DOM 객체를 탐색한 후, 부모 객체의 참조(`obj.parentElement`)를 얻어 `parent.removeChild(obj)`를 호출하여 DOM 트리에서 제거합니다.

