import './sidebar.css'

export default function Sidebar() {
  return (
    <div className='sideBar'>
      <div className="sideBarItem">
        <span className="sideBarTitle">CONFIG</span>
        <ul className="ul sideBarList">
          <li className="li sideBarListItem">Operating System</li>
          <li className="li sideBarListItem">Window Manager</li>
          <li className="li sideBarListItem">Status Bar</li>
          <li className="li sideBarListItem">Icon Font</li>
          <li className="li sideBarListItem">Text Font</li>
        </ul>
      </div>
      <div className="sideBarItem">
        <span className="sideBarSocial">SOCIALS</span>
        <div className="ul sideBarList">
          <i className="sideBarIcon fa-brands fa-twitter"></i>
          <i className="sideBarIcon fa-brands fa-youtube"></i>
          <i className="sideBarIcon fa-brands fa-tiktok"></i>
        </div>
      </div>
    </div>
  )
}