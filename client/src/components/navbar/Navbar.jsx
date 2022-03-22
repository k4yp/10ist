import { Link } from "react-router-dom"
import "./navbar.css"

export default function Navbar() {
    const user = false;
    return(
        <div className="nav">
            <div className="navLeft">
                <p className="navMain">pandex</p>
                <i className="navIcon fa-brands fa-youtube"></i>
                <i className="navIcon fa-brands fa-tiktok"></i>
                <i className="navIcon fa-brands fa-twitter"></i>
            </div>
            <div className="navCenter">
                <ul className="navList">
                    <li className="navListItem">
                        <Link className="link" to="/" >home</Link>
                    </li>
                    <li className="navListItem">
                        <Link className="link" to="/create" >create</Link>
                    </li>
                    <li className="navListItem">
                        <Link className="link" to="/about" >about</Link>
                    </li>
                    <li className="navListItem">
                        <Link className="link" to="/quiz" >quiz</Link>
                    </li>
                    {user && "LOGOUT"}
                </ul>
            </div>
            <div className="navRight">
                {
                    user?(
                        <i className="navIcon fa-solid fa-user"></i>
                    ) :
                    (
                        <ul className="navList">
                            <li className="navListItem navListLogin">
                                <Link className="link" to="/login" >login</Link>
                            </li>
                            <li className="navListItem navListRegister"> 
                                <Link className="link" to="/register" >register</Link>
                            </li>
                        </ul>
                    )
                }
            <i className="navSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>   
        </div>
    )
}