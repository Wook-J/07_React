// SpringBoot 서버로, React 클라이언트로 사용
//            요청 <-> 응답

import React, { useState } from "react";

const Exam7 = () => {
  const [message, setMessage] = useState(null);
  const [user, setUser] = useState(null);

  const getPortNumber = () => {

    fetch("http://localhost/getPortNumber")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMessage(data);
      }).catch(err => {
        console.log("err : " + err);
      });
  };

  const getUserInfo = () => {
    // fetch 요청 post
    // header 설정 필수
    // body JSON 형태로 {name: "홍길동", age: 20}
    // 응답받은 값을 user 상태에 세팅
    // catch(err 발생 시 코드 작성하기)
    const obj = {name: "홍길동", age: 20};

    fetch("http://localhost/getUserInfo", {
      method: "post",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify(obj)
    })
    .then(res => res.text())
    .then(result => {
      setUser(result);
    })
    .catch(err => {
      console.log("err : " + err);
    })
  }

  return (
    <div>
      <p>1. 서버로부터 응답받은 값</p>
      <button onClick={getPortNumber}>통신하기</button>
      <ul>
        {message?.map((msg, idx) => <li key={idx}> {msg}</li>)}
        {/* ?. : 안전탐색 연산자  message 에 초기값 null이어서 ?. 작성 안하면 에러 뜸*/}
      </ul>

      <p>2. 서버로 값 전달 후, 응답받은 값</p>
      <button onClick={getUserInfo}>통신하기</button>
      <p>{user}</p>
    </div>
  );
};

export default Exam7;
