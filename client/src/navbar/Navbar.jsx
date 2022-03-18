import "./navbar.css"

export default function Navbar(){
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
                    <li className="navListItem">home</li>
                    <li className="navListItem">browse</li>
                    <li className="navListItem">info</li>
                    <li className="navListItem">quiz</li>
                </ul>
            </div>
            <div className="navRight">
                <i className="navIcon fa-solid fa-user"></i>
                <i className="navSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>   
        </div>
    )
}