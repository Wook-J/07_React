import React, { useState } from 'react';

// React 만을 이용한 TodoList
const TodoList = () => {

  
  const [inputValue, setInputValue] = useState("");   // input 에 작성한 값을 기록하는 상태값
  const [todoList, setTodoList] = useState([]);       // 작성할 todo 를 기억할 배열 상태값
  // [{title : inputValue, isDone : false},
  //  {title : inputValue, isDone : false},
  //  {title : inputValue, isDone : false}, ...]

  // Add Todo 버튼 클릭 시 todoList 상태에 업데이트를 시키는 이벤트 핸들러
  const handleAddTodo = () => {
    // javascript spread 연산자 (...) : 기존 배열이나 객체의 전체 또는 일부를 다른 배열이나 객체로 복사
    // (★) 참조 타입(배열이나 객체)인 상태(state)는 불변성을 유지해야하므로,
    // 기존 배열을 직접 수정하지 않고 새로운 배열을 생성해야 함
    // 불변성을 유지해야 하는 이유 : React 가 상태 변경(메모리주소값 변경)을 감지해야하기 때문
    // 상태가 이전과 다르다고 React 에게 알려주기 위해서는 상태의 참조값(메모리 주소)이 변경되어야 함
    // -> 변경 전 원본의 상태값은 불변해야하고, 새로운 참조 객체를 만들어 이가 변경되었음을 React에게 알려줌
    setTodoList([...todoList , {title : inputValue, isDone : false}]);
    setInputValue("");  // input창 값 비우기
  }

  // 완료/미완료 상태를 업데이트 하는 이벤트 핸들러
  const handleToggleTodo = (idx) => {
    const newTodoList = [...todoList];
    newTodoList[idx].isDone = !newTodoList[idx].isDone;
    setTodoList(newTodoList);

  }

  // todoList에 있는 현재 상태값을 삭제하는 이벤트 핸들러
  const handleDeleteTodo = (idx) => {
    // splice 함수 : 원본이 변경되는 함수(mutates)이므로 state인 todoList에 직접 사용 불가(불변성 원칙)
    // todoList와 똑같은 배열 newTodoList를 만들어 splice 이용 후 setState 함수 이용해서 상태 업데이트
    const newTodoList = [...todoList];
    newTodoList.splice(idx, 1);   // idx번호부터 1개 잘라내기
    setTodoList(newTodoList);
  }


  return (
    <div>
      <h1>나의 TodoList</h1>
      <input type='text' value={inputValue} onChange={(e)=> setInputValue(e.target.value)} />
      <button onClick={handleAddTodo}>Add Todo</button>

      <ul>
        {
          // JSX 문법쓰려면 화살표 함수 오른쪽에 중괄호 말고 소괄호 쓰면 됨(원래 return ~~ 필요함)
          todoList.map((todo, idx) => (
            <li key={idx}>
              <span style={{textDecoration : todo.isDone ? 'line-through' : 'none'}}>{todo.title}</span>
              <button onClick={() => handleToggleTodo(idx)}>{todo.isDone ? '미완료' : '완료'}</button>
              <button onClick={() => handleDeleteTodo(idx)}>삭제</button>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default TodoList;