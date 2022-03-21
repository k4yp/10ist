import './sidebar.css'

export default function Sidebar() {
  return (
    <div className='sideBar'>

      <div className="sideBarItem">
        <span className="sideBarTitle">KEYPOS (YOUR USERNAME)</span>
        <img src="https://i.pinimg.com/236x/10/6d/78/106d78ce92d04acc396628ba4d9fd752.jpg"/>
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