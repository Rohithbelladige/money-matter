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
import Sidebar from '../Sidebar'

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  progress: 'PROGRESS',
  failure: 'FAILURE',
}

class Dashboard extends Component {
  state = {
    searchInput: '',
    homeVideos: [],
    apiStatus: apiConstants.initial,
    bannerDisplay: true,
  }


 render() {
  return (
    <div className='dashborad-container'>
    <div className='nav-container'>
      <h1 className='all-trans-name'>Accounts</h1>
      <button type="button" className='add-transaction-button'>+ Add Trsansaction</button>
    </div>
    <div className='bottom-container'>
    <div className='credit-debit-container'>
      <div className='credit-container'>
        <div>
          <p className='amount'>$0</p>
          <p className='des'>Credit</p>
        </div>
        <img src="https://www.linkpicture.com/q/Groupcredit.png" alt="credit" className='credit' />
      </div>
      <div className='credit-container'>
        <div className='texts'>
          <p className='debit'>$0</p>
          <p className='des'>Debit</p>
        </div>
        <img src="https://www.linkpicture.com/q/Groupdebiyt.png" alt="credit" className='credit' />
      </div>
    </div>
    <div>
      <h1 className='all-trans-name'>Last Trsansaction</h1>
      <ul className='last-tran-container'>
        <li className='item-container'>
          <BiUpArrowCircle />
          <p className='tran-name'>spotifyname</p>
          <p className='tran-space'>Type of  subscription</p>
          <p className='tran-space'>date </p>
          <p className='tran-space'>Amount</p>
          <buttton type="button" className="edit"><FiEdit2 /></buttton>
          <buttton type="button" className="delete"><RiDeleteBin5Line /></buttton>
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
    <div >
      <h1 className='all-trans-name'>Debit & Credit Overview</h1>
      <div className='overview-container'>
        <div className='top-section-container'>
          <p>$0 Debited & $0 Credited in this week</p>
          <div className='colors-container'>
          <p className='box-debit'>Debit</p>
            <p className='box-credit'>Credit</p>
          </div>
          </div>
        </div>
    </div>
    </div>
  </div>
  )
 }

}
export default Dashboard
 