import React from 'react'
import './Main.css'
import sendBtn from '../Assets/send.svg'
import userIcon from '../Assets/user2.png'
import logo2 from '../Assets/logo2.png'

const Main = () => {
  return (
    <div className='main'>
      <div className="chats">
        <div className="chat">
          <img src={userIcon} alt="" /><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae distinctio sint possimus dolores repellat laboriosam aspernatur fugit quas ratione doloribus.</p>
        </div>
        <div className="chat">
          <img src={logo2} alt="" /><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae distinctio sint possimus dolores repellat laboriosam aspernatur fugit quas ratione doloribus.</p>
        </div>
      </div>
      <div className="chatFooter">
        <div className="inp">
          <input type="text"  placeholder='Chat with ConvoAI...'/> <button className="send"><img src={sendBtn} alt="send " /></button>
        </div>
      </div>
    </div>
  )
}

export default Main;