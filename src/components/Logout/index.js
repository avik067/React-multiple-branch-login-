import './index.css'

const Logout = props => {
  const {click} = props
  const action = () => {
    click()
  }

  return (
    <div>
      <button className="but" type="button" onClick={action}>
        Logout
      </button>
    </div>
  )
}

export default Logout
