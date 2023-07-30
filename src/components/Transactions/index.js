import {Component} from 'react'


import {AiFillHome, AiOutlineSearch} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {GiLoveMystery} from 'react-icons/gi'
import {RiMenuAddFill, RiCloseLine ,RiDeleteBin5Line} from 'react-icons/ri'
import {FiEdit2} from "react-icons/fi"
import {BiUpArrowCircle} from 'react-icons/bi'
import {BsArrowDownCircle} from "react-icons/bs"

import "../Sidebar"

import "./index.css"



class Transactions extends Component {
  state = {
    activeTab:"All"
  }

  getActiveHistory = (all) => {
    this.setState({activeTab:all})
    
  }



 render() {
  const {activeTab} = this.state
  console.log(activeTab)
  return (
    <div className='dashborad-container'>
      
     
    <div className='transaction-nav-container'>
    <div className='trans-nav-container'>
    
    <h1 className='all-trans-name'>Transactions</h1>
      
      <button type="button" className='add-transaction-button'>+ Add Trsansaction</button>
    </div>
    
    <ul className='all-container'>
     <button type="button" className='no-button' onClick={this.getActiveHistory('All')} >
      <li  className={activeTab === 'All' ? 'active' : ''}>All Transactions</li> 
      </button>
      <button type="button" className='no-button' onClick={this.getActiveHistory('Credit')} >
        <li className={activeTab === 'Debit' ? 'active' : ''}>Debit</li>
        </button>
      <button type="button" className='no-button' onClick={this.getActiveHistory('Debit')} >
        <li className={activeTab === 'Credit' ? 'active' : ''}>Credit</li>
        </button>
    </ul>
    </div>
    <div className='bottom-container'>
    
    <div>
      
      <ul className='all-tran-container'>
        <li className='heading-item-container'>
          <p className='tran-name'>Transaction Name</p>
          <p className='tran-space'>Category</p>
          <p className='tran-space'>Date </p>
          <p className='tran-space'>Amount</p>
        </li>

        <li className='item-container'>
          <BsArrowDownCircle />
          <p className='tran-name'>spotifyname</p>
          <p className='tran-space'>Type of  subscription</p>
          <p className='tran-space'>date </p>
          <p className='tran-space'>Amount</p>
          <buttton type="button" className="edit"><FiEdit2 /></buttton>
          <buttton type="button" className="delete"><RiDeleteBin5Line /></buttton>
        </li>
        
      </ul>
    </div>
    
    </div>
  </div>
   
  )
 }

}
export default Transactions
 