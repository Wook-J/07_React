import { useState } from "react";

// 함수형 컴포넌트 Exam2 (화살표 함수도 가능) (요즘 추세임 React Hooks 사용)
const Exam2 = () => {

  // 상태
  const [count, setCount] = useState(0);

  // 일반 JS 함수만들듯이 해야함(클래스형 컴포넌트와 다름)
  const handleClick = () => {
    setCount(count + 1);
  }

  // 렌더링
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handleClick}>증가버튼</button>
    </div>
  );
}

export default Exam2;