import React, { useState } from 'react';
import './App.css';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

let id = 0;

const App = () => {
  // const [id, setId] = useState(0);
  const [information, setInformation] = useState([]);
  const [keyword, setKeyword] = useState("");

  /* 생성 */
  const handleCreate = (data) => {
    // setId(id + 1);
    id++;
    setInformation(information.concat({
      ...data,
      id,
    }
    ));
  }

  /* 수정 */
  const handleUpdate = (id, data) => {
    setInformation(information.map(info => {
      if (info.id === id) {
        return { id, ...data }
      }
      return info;
    }));
  }

  // 검색창 입력
  const handleChange = (e) => {
    setKeyword(e.target.value);
  }

  /* 제거 */
  const handleRemove = (id) => {
    // information배열 안 요소의 id와 파라미터로 받은 id가 일치하지 않는 요소들만 추출
    setInformation(information.filter(info => info.id !== id));
  }


  return (
    <div>
      <PhoneForm onCreate={handleCreate} />
      <input value={keyword} onChange={handleChange} placeholder="검색" />
      <PhoneInfoList information={information.filter(info => info.name.indexOf(keyword) > -1)} onRemove={handleRemove} onUpdate={handleUpdate} />
      {/* {JSON.stringify(information)} */}
    </div>
  );
};

export default App;
