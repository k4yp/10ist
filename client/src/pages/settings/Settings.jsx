import './settings.css'

export default function Settings() {
    return (
        <div className='settings'>
            <div className='settingsWrapper'>
                <div className='settingsTitle'>
                    <span className='settingsUpdateTitle'>Update Account</span>
                    <span className='settingsDeleteTitle'>DELETE ACCOUNT</span>
                </div>
                <form className='settingsForm'>
                    <label>Profile Pic</label>
                    <div className='settingsProfilePic'>
                        <img
                            src='https://media.discordapp.net/attachments/885000925406715934/955723485492183111/5822407E-C6AA-4D5B-B30E-2B3F92ED89ED_4_5005_c.jpeg'
                            alt='profile'
                        />
                        <label htmlFor='fileInput'>
                            <i className='settingsProfilePicIcon fa-solid fa-circle-user'></i>
                        </label>
                        <input
                            type='file'
                            id='fileInput'
                            style={{ display: 'none' }}
                        />
                    </div>
                    <label>Username</label>
                    <input type='text' placeholder='keypos' />
                    <label>Email</label>
                    <input type='email' placeholder='keypos@gmail.com' />
                    <label>Password</label>
                    <input type='password' />
                    <button className='settingsSubmit'>Update</button>
                </form>
            </div>
        </div>
    )
}
