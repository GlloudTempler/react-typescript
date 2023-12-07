import React from 'react';
import './App.css';
import Basic from './pages/Basic';
import BasicExam from './pages/BasicExam';
import Func from './pages/01_exam/Func';
import FuctionExam from './pages/01_exam/FuctionExam';
import Etc from './pages/02_exam/Etc';
import Counter from './pages/03_exam/Counter';
import Book from './pages/04_exam/Book';
import Webtoon from './pages/04_exam/Webtoon';

function App() {
  return (
    <div className="App">
      {/* 자식컴포넌트(페이지) 추가 */}
      {/* <Basic /> */}
      {/* <BasicExam /> */}
      {/* <Func /> */}
      {/* <FuctionExam /> */}
      {/* <Etc /> */}
      {/* <Counter /> */}
      {/* <Book /> */}
      <Webtoon />
    </div>
  );
}

export default App;
