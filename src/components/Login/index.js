import {Component} from 'react'


import Cookies from 'js-cookie'
import axios from "axios"

import "./index.css"

class Login extends Component {
  state = {
    showSubmitError: false,
    username: '',
    password: '',
    errorMsg: '',
    inputType: 'password',
  }

  onChangeUserName = event => {
    this.setState({
      username: event.target.value,
      errorMsg: '',
      showSubmitError: false,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
      errorMsg: '',
      showSubmitError: false,
    })
  }

  onChangeCheckBox = event => {
    if (event.target.checked === true) {
      this.setState({
        inputType: 'text',
      })
    } else {
      this.setState({
        inputType: 'password',
      })
    }
  }

  onSubmitSuccess = jwtToken => {
    console.log(jwtToken)
    Cookies.set("jwt_token",jwtToken)
  }

  onSubmitFailure = errorMsg => {
    this.setState({
      showSubmitError: true,
      errorMsg,
    })
  }

  Onsubmit = async event => {
    const {username,password} = this.state
    event.preventDefault()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(username)) {
      this.setState({errorMsg:'Please enter a valid email address.',showSubmitError: true,})
  
    
    if (password.length < 8) {
      this.setState({errorMsg:"Password should be at least 8 characters.",showSubmitError: true,})
    }

  
    try {
      const response = await axios.post('http://34.193.40.199:3001/api/login', {
        emailid: username,
        password: password,
      });
      console.log(response)
      
      if (response.data.result === 'success') {
        
        localStorage.setItem('userId', response.data.userid);
  
        
        console.log('Login success! User ID:', response.data.userid);
      } else {
        this.setState({errorMsg:'Login failed. Please check your credentials.',showSubmitError: true,})
      }
    } catch (error) {
      
      console.error('API Error:', error);
      this.setState({showSubmitError: true,errorMsg:'An error occurred while logging in.',})
    
    const {username, password} = this.state
    const userDetails = {
      username,
      password,
    }
    const accessKey = "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF"
    const apiUrl = "https://bursting-gelding-24.hasura.app/api/rest/profile"
    const url = 'https://apis.ccbp.in/login'
    const urlWithAccessKey = `${apiUrl}?access_key=${accessKey}`
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
      
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }
}
  }


  renderLoginPage = () => {
    const {
      showSubmitError,
      username,
      password,
      errorMsg,
      inputType,
    } = this.state
    const options = {
      method: "GET",
      headers: {
      Authorization : `Bearer g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF`
      }
    }
    const d = fetch("https://bursting-gelding-24.hasura.app/api/rest/all-transactions",options)
    console.log(d)
    return (
      <div className='login-container'>
        <div>
          
          <form onSubmit={this.Onsubmit} className='form-container'>
          <div >
            <img
              src="https://www.linkpicture.com/q/Logoimage.png"
              alt="website logo" className='image-container'
            />
          </div>
            <div className='input-container'>
              <label htmlFor="USERNAME" className='margin-top name'>EMAIL</label>
              <input
                id="USERNAME"
                type="email"
                placeholder="abc123@gmail.com"
                value={username}
                onChange={this.onChangeUserName}
               
              />
            </div>
            <div className='input-container'>
              <label htmlFor="PASSWORD" className='margin-top'>PASSWORD</label>
              <input
                id="PASSWORD"
                type={inputType}
                placeholder="Password"
                value={password}
                onChange={this.onChangePassword} 
              />
            </div>
            <div className='margin-top'>
              <input
                type="checkbox"
                id="show-password"
                onChange={this.onChangeCheckBox}
              />
              <label htmlFor="show-password">
                Show Password
              </label>
            </div>
            <button type="submit" className='margin-top button'>Login</button>
            {showSubmitError && <p>*{errorMsg}</p>}
          </form>
        
          
        </div>
      </div>
    )
  }

 

 

  render() {
    
    return this.renderLoginPage()
  }
}
export default Login;
