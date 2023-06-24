
import {Component} from 'react'
import './index.css'


class Logout extends Component {
    change = () => {
       console.log("login")
    }

    render (
    <div className="div">
        <h1>Welcome User</h1>
        <button className ="but" type="button" onClick={this.change}>Logout</button>
    </div>
    )
}

export default Logout

