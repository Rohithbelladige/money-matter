import {AiFillHome, AiOutlineSearch} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {GiLoveMystery} from 'react-icons/gi'
import {RiMenuAddFill, RiCloseLine} from 'react-icons/ri'
import { useState } from 'react'

import Dashboard from '../Dashboard'
import Transactions from '../Transactions'

import "./index.css"

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState('Dash');
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  
  const renderHome = () => {
    switch (activeTab){
      case "Dash":
        return <Dashboard />
      case "Tran":
        return <Transactions />
      case "Dash":
        return <Dashboard />
      default:
        return null
    }
      
  }

  return(
      <div className='whole-container'>
        <div className='bar-container'>
        <div className='sidebar-container'>
        <div>
          <img
            src="https://www.linkpicture.com/q/Logoimage.png"
            alt="website logo" className='image'
          />
        </div>
        <nav>
          <ul className='bar-container'>
            <button type='button' className={activeTab === 'Dash' ? 'active no-button' : 'no-button'} onClick={() => handleTabClick('Dash')}>
            <li className='item'>
                <AiFillHome  size="16" className={activeTab === 'Dash' ? 'active ' : 'icon-color'} />
                <p  className='bar-text'>Dashboard</p>
            </li></button>
            <button type='button' className={activeTab === 'Tran' ? 'active no-button' : 'no-button'} onClick={() => handleTabClick('Tran')}>
            <li className='item' >
                <HiFire size="16" className={activeTab === 'Tran' ? 'active ' : 'icon-color'} />
                <p className='bar-text'>Transactions</p>
            </li></button>
            <button type='button' className={activeTab === 'Prof' ? 'active no-button' : 'no-button'} onClick={() => handleTabClick('Prof')}>
            <li className='item'>
                <GiLoveMystery  size="16" className={activeTab === 'Prof' ? 'active ' : 'icon-color'} />
                <p className='bar-text'>Profile</p>
            </li>
            </button>
          </ul>
        </nav>
        <div className='profile-and-logout'>
          <img src="" alt="prof" />
          <div>
            <p>name</p>
            <p>Email</p>
            </div>
            <div>
              <button type="button" className='logout-button'>
                <p>l</p>
              </button>
            </div>
        </div>
        </div>
        </div>
        <div className='render-container'>
        {renderHome()}
        </div>
        </div>
        
        )
        
 
          
}

export default Sidebar