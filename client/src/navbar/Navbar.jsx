import "./navbar.css"

export default function Navbar(){
    return(
        <div className="nav">
            <div className="navLeft">
                <h3 className="navMain">pandex</h3>
                
                <i className="navIcon fa-brands fa-youtube"></i>
                <i className="navIcon fa-brands fa-instagram"></i>
                <i className="navIcon fa-brands fa-tiktok"></i>
                <i className="navIcon fa-brands fa-twitch"></i>
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
                <img className="navImg" src="https://img.freepik.com/free-vector/cute-happy-penguin-cartoon-icon-illustration-animal-nature-icon-concept-isolated-flat-cartoon-style_138676-2095.jpg" alt="profile"/>

                <i class="navSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>   
        </div>
    )
}