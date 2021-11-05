/**
 * メインコンポーネントファイル
 */

import React, { useState, ReactElement } from 'react';
import './App.css';

function App():ReactElement {
  // ステート変数
  const [ msg, setMsg ] = useState("This is sample message.")
  const [ count, setCount ] = useState(0)

  // countを増やす関数
  const doAction = () =>{
    setCount(count + 1)
  }

  return (
    <div>
      <h1 className="bg-primary text-while p-2">React Sample</h1>
      <div className="container">
        <h2 className="my-3">click button!</h2>
        <div className="alert alert-primary">
          <div className="row px-2">
            <h3 id="msg" className="col">{count} click.</h3>
            <button onClick={doAction} className="btn btn-primary col-2">
              Click!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
