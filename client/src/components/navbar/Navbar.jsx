import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
import './navbar.css'

export default function Navbar() {
    const { user, dispatch } = useContext(Context)

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' })
    }
    return (
        <div className='nav'>
            <div className='navLeft'>
                <p className='navMain'>Pandex</p>
            </div>
            <div className='navCenter'>
                <ul className='navList'>
                    <li className='navListItem'>
                        <Link className='navLink' to='/'>
                            Home
                        </Link>
                    </li>
                    <li className='navListItem'>
                        <Link className='navLink' to='/guide'>
                            Guide
                        </Link>
                    </li>
                    <li className='navListItem'>
                        <Link className='navLink' to='/quiz'>
                            Quiz
                        </Link>
                    </li>
                    <li className='navListItem'>
                        <Link className='navLink' to='/create'>
                            Create
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='navRight'>
                <li className='navListItem navLink' onClick={handleLogout}>
                    {user && 'Logout'}
                </li>
                {user ? (
                    <Link to='/settings'>
                        <i className='navProfile fa-solid fa-user'></i>
                    </Link>
                ) : (
                    <ul className='navList'>
                        <li className='navListItem navListLogin'>
                            <Link className='navLink' to='/login'>
                                Login
                            </Link>
                        </li>
                        <li className='navListItem navListRegister'>
                            <Link className='navLink' to='/register'>
                                Register
                            </Link>
                        </li>
                    </ul>
                )}
            </div>
        </div>
    )
}
