import React from 'react'
import './SideBar.css'
import logo from '../Assets/logo.png'
import addBtn from '../Assets/add-30.png'
import msgIcon from '../Assets/message.svg'
import home from '../Assets/home.svg'
import saved from '../Assets/bookmark.svg'
import rocket from '../Assets/rocket.svg'

const SideBar = () => {
  return (
    <div className='sidebar'>
      <div className="upperSideTop"><img src={logo} alt="logo" className="logo" /></div>
      <div className="upperSide">
        
        <button className="midBtn"><img src={addBtn} alt="new chat" className="addBtn" />New Chat</button>
        <div className="upperSideBottom">
          <button className="query"><img src={msgIcon} alt="Query" className="" />What is Programming?</button><br />
          <button className="query"><img src={msgIcon} alt="Query" className="" />How to use an API?</button>
        </div>
      </div>
      <div className="lowerSide">
        <div className="listItems"><img src={home} alt="home" className="listItemsImg" />Home</div>
        <div className="listItems"><img src={saved} alt="saved" className="listItemsImg" />Saved</div>
        <div className="listItems"><img src={rocket} alt="rocket" className="listItemsImg" />Upgrade to Pro</div>
      </div>
    </div>
  )
}

export default SideBar