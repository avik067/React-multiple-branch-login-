// Write your code here

import {Component} from 'react'
import './index.css'


class Login extends Component {
    change = () => {
       console.log("logout")
    }

    render (
    <div className="div">
        <h1>Please Login</h1>
        <button className ="but" type="button" onClick={this.change}>Login</button>
    </div>
    )
}

export default Login