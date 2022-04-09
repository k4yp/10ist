import './header.css'
import desktop from '../../img/desktop.gif'

export default function Header() {
    return (
        <div className='header'>
            <div className='headerTitles'>
                <span className='headerUser'>Welcome to Pandex</span>
                <span className='headerTitle'>
                    Home of unix customisation and ricing
                </span>
            </div>
            <img className='headerImg' src={desktop} />
        </div>
    )
}
