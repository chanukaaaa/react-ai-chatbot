import './App.css';
import SideBar from '../src/Components/Sidebar/SideBar'
import Main from '../src/Components/Main/Main'
import { sendMsgToOpenAI } from './Components/Openai';
import { useState } from 'react';

function App() {

  const [ input, setInput ] = useState("");

  const handleSend = () =>{
    const res = sendMsgToOpenAI()
  }

  return (
    <div className="App">
      <div className="SideBar">
        <SideBar />
      </div>
      <div className="Main">
        <Main />
      </div>
    </div>
  );
}

export default App;
