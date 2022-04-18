import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import './register.css'

export default function Register() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault()
        setError(false)
        try {
            const res = await axios.post('/auth/register', {
                username,
                email,
                password,
            })
            res.data && window.location.replace('/login')
        } catch (err) {
            setError(true)
        }
    }
    return (
        <div className='register'>
            <span className='registerTitle'>Register</span>
            <form className='registerForm' onSubmit={handleSubmit}>
                <label>Username</label>
                <input
                    type='text'
                    minlength='3'
                    placeholder='Enter username'
                    onChange={(event) => setUsername(event.target.value)}
                />
                <label>Email</label>
                <input
                    type='email'
                    placeholder='Enter email'
                    onChange={(event) => setEmail(event.target.value)}
                />
                <label>Password</label>
                <input
                    type='password'
                    minlength='6'
                    placeholder='Enter password'
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button className='registerButton' type='submit'>
                    Register
                </button>
            </form>
            <button className='registerLoginButton'>
                <Link className='link' style={{ padding: '10px' }} to='/Login'>
                    Login
                </Link>
            </button>
            {error && (
                <span style={{ color: 'crimson', marginTop: '10px' }}>
                    Something went wrong
                </span>
            )}
        </div>
    )
}
