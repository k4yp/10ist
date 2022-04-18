import './settings.css'
import { useContext } from 'react'
import { Context } from '../../context/Context'

export default function Settings() {
    const { user } = useContext(Context)
    return (
        <div className='settings'>
            <div className='settingsWrapper'>
                <div className='settingsTitle'></div>
                <form className='settingsForm'>
                    <label>Username</label>
                    <p>{user.username}</p>
                    <label>Email</label>
                    <p>{user.email}</p>
                </form>
            </div>
        </div>
    )
}
