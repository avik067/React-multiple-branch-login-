// Write your code here
import {Component} from 'react'
import Login from '../Login'
import Logout from '../Logout'

import './index.css'

import Message from '../Message'

class Home extends Component {
  state = {status: true}

  changeToLogOut = () => {
    console.log('log out')
    this.setState(previousState => ({status: !previousState.status}))
  }

  changeToLogIn = () => {
    console.log('log in agian')
    this.setState(previousState => ({status: !previousState.status}))
  }

  render() {
    let button
    let message
    const {status} = this.state
    switch (true) {
      case status === true:
        button = <Login click={this.changeToLogOut} />
        message = <Message text="Please Login" />
        break

      default:
        button = <Logout click={this.changeToLogIn} />
        message = <Message text="Welcome User" />
        break
    }

    return (
      <div className="div">
        <div className="card">
          {message}
          <div>{button}</div>
        </div>
      </div>
    )
  }
}

export default Home
