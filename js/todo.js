const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"; 
let toDos = []; 

// to do 출력하기 
function paintToDo(newToDoObj) {
    const li = document.createElement("li"); // li 생성
    li.id = newToDoObj.id; // li에 id를 설정

    const span = document.createElement("span"); // span 생성
    span.innerText = newToDoObj.text; // span에 newToDo를 넣음

    const button = document.createElement("button"); // button 생성
    button.innerText = "❌"; // button에 ❌를 넣음
    button.addEventListener("click", deleteToDo)

    li.appendChild(span); // li에 span을 넣음
    li.appendChild(button); // li에 button을 넣음

    toDoList.appendChild(li); // toDoList에 li를 넣음
}

// to do 입력하기 
function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value; // 입력한 값을 newToDo에 저장
    toDoInput.value = ""; // 엔터를 눌렸을 때 값이 없어 짐 
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),  // 삭제를 위해서 id를 설정
    }
    toDos.push(newToDoObj);  // toDos 배열에 newToDo를 넣음
    paintToDo(newToDoObj);  // to do 출력하기
    saveToDos();  // to do 저장하기: check Application > Local Storage
}

// to do 삭제하기 
function deleteToDo(event) {
    // path 를 찾아서 삭제하기
    const li = event.target.parentElement;
    li.remove(); // li를 삭제할 경우 화면에서만 삭제, local storage 에서는 삭제되지 않음
    // to do 삭제 후 local storage 에서도 삭제 하기
    
    // filter 는 array의 모든 item을 통해 함수를 실행하고 true인 item만 가지고 새로운 array를 만듦
    // (추가) toDos 배열에서 li의 id와 같지 않은 것만 남김
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); 
    saveToDos(); // 업데이트된 to do를 local storage에 저장하기
}

// to do 저장하기: local storage 이용 
function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); 
}

toDoForm.addEventListener("submit", handleToDoSubmit)

const savedToDos = localStorage.getItem(TODOS_KEY);
// console.log(savedToDos); // string으로 출력됨

if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos); // string을 array로 변환 
    // console.log(parsedToDos);  // array로 출력됨
    toDos = parsedToDos; // toDos 배열에 parsedToDos를 넣고 시작 
    parsedToDos.forEach(paintToDo); // array의 각 item에 대해 paintToDo 함수 실행 -> 새로 고침해도 화면에 출력
}