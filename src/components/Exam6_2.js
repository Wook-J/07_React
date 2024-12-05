import React, { createContext, useContext, useState } from "react";

// Context API 사용하는 버전

// Context API : React 컴포넌트 트리 전체에서 데이터를 공유할 수 있는 방법을 제공
// -> 중첩된 구조에서 데이터를 전달하는데 있어 불필요한 props drilling(상태 내려꽂기)를 방지함
// -> 이를 사용하기 위해선 userContext hook 이 필요함!!

// createContext() : Context 객체를 생성 시 사용
// Context : react에서 컴포넌트 계층 구조 내 데이터를 효율적으로 전달하기 위한 매커니즘(작동원리/방식)
// Context.Provider : 하위컴포넌트에게 데이터를 제공 (사용방법 : 부모 컴포넌트의 return 구문 참고)
// Context.Consumer : 데이터를 소비

const UserContext = createContext();

// 부모 컴포넌트
const Exam6_2 = () => {
  const [user, setUser] = useState("홍길동");

  return (
    <UserContext.Provider value={user}>
      <h1>부모에서부터 전달되는 {user}</h1>
      <Child1 />    {/* Child1 이 물고있는 자식 컴포넌트들도 전부 영향을 받음 */}
      {/* props 로 전달하지 않아도 전달 가능!!! */}
    </UserContext.Provider>
  );
};

const Child1 = () => {
  return (
    <>
      <h3>Child1 통과</h3>
      <Child2 />
    </>
  );
};

const Child2 = () => {
  const user = useContext(UserContext);
  return (
    <>
      <h1>Child2 에게 바로 전달 : {user}</h1>
      <Child3 />
    </>
  );
};

const Child3 = () => {
  return (
    <>
      <h3>Child3 통과</h3>
      <Child4 />
    </>
  );
};

const Child4 = () => {
  // context 로 등록된 객체 중 UserContext를 꺼내어 user라는 변수로 부르겠다!
  const user = useContext(UserContext);
  return(
    <h1>Child4 에게 바로 전달 : {user}</h1>
  ); 
};

export default Exam6_2;
