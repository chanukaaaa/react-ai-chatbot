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
          <img className='chatImg' src={userIcon} alt="" /><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae distinctio sint possimus dolores repellat laboriosam aspernatur fugit quas ratione doloribus.</p>
        </div>
        <div className="chat bot">
          <img className='chatImg' src={logo2} alt="" /><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae est fugit id rem eum cum optio officiis commodi, cumque delectus, magni illum nostrum alias vitae animi at consectetur similique omnis enim dicta tempore iste! Doloribus, dolor illum omnis quidem facilis quaerat nobis animi quo ea vel ab totam cumque alias sapiente? Numquam non facilis sed quod at cupiditate consequuntur ab hic aperiam dicta exercitationem quibusdam a ipsam, provident sapiente inventore possimus ad dolore maxime, ullam laboriosam repellendus pariatur quidem? Delectus id explicabo totam architecto a distinctio enim, illum nesciunt fuga dolorem error tenetur odit blanditiis reprehenderit ducimus minus sunt quis!</p>
        </div>
      </div>
      <div className="chatFooter">
        <div className="inp">
          <input type="text"  placeholder='Chat with ConvoAI...'/> <button className="send"><img src={sendBtn} alt="send " /></button> 
        </div>
        <p>Innovating Communication with AI Brilliance</p>
      </div>
    </div>
  )
}

export default Main;