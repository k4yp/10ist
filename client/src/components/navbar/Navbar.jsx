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
                <i className='navIcon fa-brands fa-youtube'></i>
                <i className='navIcon fa-brands fa-tiktok'></i>
                <i className='navIcon fa-brands fa-twitter'></i>
            </div>
            <div className='navCenter'>
                <ul className='navList'>
                    <li className='navListItem'>
                        <Link className='link' to='/'>
                            Home
                        </Link>
                    </li>
                    <li className='navListItem'>
                        <Link className='link' to='/guide'>
                            Guide
                        </Link>
                    </li>
                    <li className='navListItem'>
                        <Link className='link' to='/about'>
                            About
                        </Link>
                    </li>
                    <li className='navListItem'>
                        <Link className='link' to='/create'>
                            Create
                        </Link>
                    </li>
                    <li className='navListItem'>
                        <Link className='link' to='/'>
                            Quiz
                        </Link>
                    </li>
                    <li className='navListItem link' onClick={handleLogout}>
                        {user && 'Logout'}
                    </li>
                </ul>
            </div>
            <div className='navRight'>
                {user ? (
                    <Link to='/settings'>
                        <i className='navIcon fa-solid fa-user'></i>
                    </Link>
                ) : (
                    <ul className='navList'>
                        <li className='navListItem navListLogin'>
                            <Link className='link' to='/login'>
                                Login
                            </Link>
                        </li>
                        <li className='navListItem navListRegister'>
                            <Link className='link' to='/register'>
                                Register
                            </Link>
                        </li>
                    </ul>
                )}
            </div>
        </div>
    )
}
