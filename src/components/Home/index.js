// Write your code here

import Login from '../Login'
// import Logout from '../Logout'

import './index.css'

import {Component} from 'react'

import Message from '../Message'

class Home extends Component {
  render() {
    return (
      <div className="div">
        <div className="card">
          <Message changeText={changeText} />
          <Login />
        </div>
      </div>
    )
  }
}

export default Home
