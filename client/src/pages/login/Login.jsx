import './login.css'

export default function login() {
  return (
    <div className='login'>
      <span className="loginTitle">Login</span>
        <form className="loginForm">
            <label>Email</label>
            <input type="text" placeholder='Enter email'/>
            <label>Password</label>
            <input type="password" placeholder='Enter password'/>
            <button className="loginButton">Login</button>     
        </form>
            <button className="loginRegisterButton">Register</button>
    </div>
  )
}