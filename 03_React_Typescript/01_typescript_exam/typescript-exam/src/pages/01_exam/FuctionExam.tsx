import React, { useState } from "react";

function FuctionExam() {
    // 변수 정의
    let [password, setPassword] = useState<string>("");
    let [message, setMessage] = useState<string>("");

    // 함수 정의
    const onChangPassword = (event:React.ChangeEvent<HTMLInputElement>): void => {
        setPassword(event.target.value);
    }

    const getInput = (arg:string, arg2:number, arg3:boolean): void => {
        setMessage(`${arg} 오늘 날짜는 ${arg2}일이 맞나요? 답은 ${arg3? "true":"false"}입니다.`)
    }


  return (
    <div className="container">
      <input
        className="form-control mt-3 mb-3 w-25 mx-auto"
        type="password"
        name="password"
        value={password}
        onChange={onChangPassword}
      />
      입력값 : {password}
      <br />
      <button
        className="btn btn-primary mt-3 mb-3"
        onClick={() => getInput("안녕하세요", 4, true)}
      >
        입력값
      </button>
      <br />
      {message}
    </div>
  );
}

export default FuctionExam;
