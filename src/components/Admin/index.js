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

class Admin extends Component {
  state = {
    
    homeVideos: [],
    
  }

  fetchData = async () => {
    try {
      const url =
        "https://bursting-gelding-24.hasura.app/api/rest/transaction-totals-admin";
      const headers = {
        "Content-Type": "application/json",
        "x-hasura-admin-secret":
          "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
        "x-hasura-role": "admin",
      };
      

      const response = await fetch(url, {
        method: "GET",
        headers: headers,
      });
      
      

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data.transaction_totals_admin);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    }


  componentDidMount() {
    this.fetchData();
  }

 render() {
  return (
    <div className='dashborad-container'>
      
      <h1>Hello</h1>
    </div>
  )
 }

}
export default Admin
 