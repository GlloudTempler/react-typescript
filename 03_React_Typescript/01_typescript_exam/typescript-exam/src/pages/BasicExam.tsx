import React, { useState } from "react";
import "../assets/style.css";

function BasicExam() {
  let [string, setSrting] = useState<string>("안녕하세요 그린컴퓨터아카데미입니다.");
  let [string2, setSrting2] = useState<string>("아래는 곱셈 샘플입니다.");
  let [string3, setSrting3] = useState<string>("곱셈");
  let [num1, setNum1] = useState<number>(2);
  let [num2, setNum2] = useState<number>(3);
  return (
    <div>
      {/* 아래 처럼 바인딩 변수를 사용해서 화면 출력을 타입스크립트 코드를 적용하여 출력
        단, 문자는 string 숫자는 number를 사용해서 코딩 */}
      {/* 결과:
            안녕하세요 그린컴퓨터아카데미입니다.
            아래는 곱셈 샘플입니다.
            곱셈
            2*3=6
         */}
      {string}
      <br />
      {string2}
      <br />
      {string3}
      <br />
      {num1} * {num2} = {num1 * num2}
    </div>
  );
}

export default BasicExam;
