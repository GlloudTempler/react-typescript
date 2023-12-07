import React, { useState } from "react";
import IBook from "../../types/IBook";

function Book() {
  // 변수정의
  const initialBooks = [
    {
      id: 1,
      title: "어떻게 배울 것인가",
      publisher: "비즈니스북스",
      author: "존 맥스웰",
      stock: 2,
    },
    {
      id: 2,
      title: "신경끄기의 기술",
      publisher: "갤리온",
      author: "마크 맨슨",
      stock: 0,
    },
    {
      id: 3,
      title: "부의 미래",
      publisher: "청림출판",
      author: "앨빈 토플러",
      stock: 5,
    },
    {
      id: 4,
      title: "기획자의 습관",
      publisher: "홍익출판사",
      author: "최장순",
      stock: 4,
    },
  ];
  // 바인딩 변수 : typescript적용
  // TODO 객체자료형 : 따로 정의(IBook) : 이름 규칙(명명법) I+이름
  let [books, setBooks] = useState<Array<IBook>>(initialBooks); // 객체배열

  // 함수정의

  return (
    <div>
      <h1>체르니 책방의 도서목록</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">도서번호</th>
            <th scope="col">도서이름</th>
            <th scope="col">출판사</th>
            <th scope="col">저자</th>
            <th scope="col">재고량</th>
          </tr>
        </thead>
        <tbody>
          {/* 반복문 */}
          {/* 대상 : 행<tr><td></td></tr> */}
          {books.map((value, index) => (
            <tr key={index}>
              <td>{value.id}</td>
              <td>{value.title}</td>
              <td>{value.publisher}</td>
              <td>{value.author}</td>
              <td>{value.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Book;
