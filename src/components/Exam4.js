import React, { useState } from "react";

// 부모 컴포넌트
const Exam4 = () => {
  return (
    <div>
      <Id />
      <Pw />
      <div>
        <button disabled={Id.id.length === 0 || Pw.pw.length === 0}>Login</button>
        {/* 자식이 가진 id, pw 라는 상태값을 부모 컴포넌트가 알 방법이 없음....
          -> 부모 컴포넌트로 자식의 상태를 끌어올려 사용해야 함!!
        */}
      </div>
    </div>
  );
};

// 자식 컴포넌트 Id
const Id = () => {
  const [id, setId] = useState("");

  const onChangeId = (event) => {
    setId(event.target.value);
  };

  return (
    <div>
      <label>ID : </label>
      <input onChange={onChangeId} />
    </div>
  );
};

// 자식 컴포넌트 Pw
const Pw = () => {
  const [pw, setPw] = useState("");

  const onChangePw = (e) => {
    setPw(e.target.value);
  };

  return (
    <div>
      <label>PW : </label>
      <input type="password" onChange={onChangePw} />
    </div>
  );
};

export default Exam4;
