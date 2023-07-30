import {Component} from 'react'


import Login from './components/Login'
import Dashboard from "./components/Dashboard"
import Transactions from './components/Transactions'

import Admin from './components/Admin'

import VideoContext from './context/VideoContext'

import './App.css'
import Sidebar from './components/Sidebar'

class App extends Component {
  state = {
    isDark: false,
    listOfSavedVideos: [],
    activeNav: 'HOME',
  }

  changeActiveNav = activeTab => {
    this.setState({
      activeNav: activeTab,
    })
  }

  addVideoToList = videoDetails => {
    const {listOfSavedVideos} = this.state
    const index = listOfSavedVideos.findIndex(
      eachVideo => eachVideo.id === videoDetails.id,
    )
    if (index === -1) {
      this.setState({listOfSavedVideos: [...listOfSavedVideos, videoDetails]})
    } else {
      listOfSavedVideos.splice(index, 1)
      this.setState({listOfSavedVideos})
    }
  }

  clickChangeTheme = () => {
    this.setState(prevState => ({
      isDark: !prevState.isDark,
    }))
  }

  removeVideo = id => {
    const {listOfSavedVideos} = this.state
    const updatedSavedVideos = listOfSavedVideos.filter(
      eachVideo => eachVideo.id !== id,
    )
    this.setState({listOfSavedVideos: updatedSavedVideos})
  }

  render() {
    const {isDark, listOfSavedVideos, activeNav} = this.state
    return (
      <VideoContext.Provider
        value={{
          isDark,
          listOfSavedVideos,
          activeNav,
          changeTheme: this.clickChangeTheme,
          addSavedVideo: this.addVideoToList,
          removeSavedVideo: this.removeVideo,
          changeActiveNav: this.changeActiveNav,
        }}
      >
        
          <Sidebar/>
          
          
      
      </VideoContext.Provider>
    )
  }
}
export default App
