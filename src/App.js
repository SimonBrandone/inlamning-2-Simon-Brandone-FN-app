
import React, { useEffect, useState } from 'react';

const fetchURL = "https://unstats.un.org/SDGAPI/v1/sdg/Goal/List?includechildren=true";
const getItems = () => fetch(fetchURL).then(res => res.json());


function App() {
  const [items, setItems] = useState([]);
  const [targets, setTargets] = useState([]);
  const [descs, setDescs] = useState('');

  useEffect(() => {
    getItems().then(data => setItems(data));
  }, []);

  const handleGoalDesc = e => {
    setDescs(e.description)
    setTargets(e.targets)

  };

  return (
    <div className="container">
      <div className="title-container">
      <h1 className="title-text">FN Goals</h1>
      </div>
      <div className="card-container">
      {items.map((item, i) => (
    <div className="card" onClick={() => handleGoalDesc(item)} key={i}>
    <ul className="card-body">
      <h5 className="card-title" key={i}>Goal {i+1}:  {item.title}</h5>
    </ul>
  </div>
        
      ))}
    </div>
          <div className="card-info">
          <h4 key={"Descs"}>{descs}</h4>
            { targets.map((target, i) => {
              return <p className="card-text" key={i}>{target.description}</p>
            })}
        </div>
      </div>
  );
}

export default App;