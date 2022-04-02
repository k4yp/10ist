import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'
import './sidebar.css'

export default function Sidebar() {
  const [cats,setCats] = useState([]);
  
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);

  return (
    <div className='sideBar'>

      <div className="sideBarItem">
        <span className="sideBarTitle">KEYPOS (YOUR USERNAME)</span>
        <img 
        src="https://external-preview.redd.it/fAFuBHWbVrt1_IQVRyLUVP1UCP2Yi2R-I2LzKC9ibo8.jpg?auto=webp&s=cd4e3eaf1926e236fb0082150d44b17b93a97b26"
        alt="profile"
        />
      </div>

      <div className="sideBarItem">
        <span className="sideBarTitle">EXPLORE</span>
        <ul className="sideBarList">
        {cats.map((category) => (
          <Link className="link "to={`/?cat=${category.name}`}>
            <li className="sideBarListItem">{category.name}</li>
          </Link>
        ))}
        </ul>
      </div>

      <div className="sideBarItem">
        <span className="sideBarSocial">SOCIALS</span>
        <div className="sideBarList">
          <i className="sideBarIcon fa-brands fa-twitter"></i>
          <i className="sideBarIcon fa-brands fa-youtube"></i>
          <i className="sideBarIcon fa-brands fa-tiktok"></i>
        </div>
      </div>
    </div>
  )
}