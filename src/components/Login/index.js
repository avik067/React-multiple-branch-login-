// Write your code here

import './index.css'

const Login = props => {
  const {click} = props
  const action = () => {
    click()
  }
  return (
    <div>
      <button className="but" type="button" onClick={action}>
        Login
      </button>
    </div>
  )
}

export default Login
