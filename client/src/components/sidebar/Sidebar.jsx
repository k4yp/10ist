import './sidebar.css'

export default function Sidebar() {
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
        <span className="sidebarTitle">EXPLORE</span>
        <ul className="sideBarList">   
          <li className="sideBarListItem">Operating Systems</li>
          <li className="sideBarListItem">Window Managers</li>
          <li className="sideBarListItem">Status Bars</li>
          <li className="sideBarListItem">Icon Fonts</li>
          <li className="sideBarListItem">Text Fonts</li>
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