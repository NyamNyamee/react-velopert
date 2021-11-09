import React, { useState } from 'react';
import './App.css';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

let id = 0;

const App = () => {
  // const [id, setId] = useState(0);
  const [information, setInformation] = useState([]);

  const handleCreate = (data) => {
    // setId(id + 1);
    id++;
    setInformation(information.concat({
      ...data,
      id,
    }
    ));
  }

  return (
    <div>
      <PhoneForm onCreate={handleCreate} />
      <PhoneInfoList information={information} />
      {/* {JSON.stringify(information)} */}
    </div>
  );
};

export default App;
