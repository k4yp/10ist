import './create.css'

export default function Create() {
  return (
    <div className='create'>
        <img src="https://i.redd.it/6yt0rkb7t3a61.png" alt="os" className="createImg" />
        <form className='createForm'>
            <div className="createFormGroup">
                <label htmlFor="fileInput">
                    <i className="createIcon fa-solid fa-arrow-up-from-bracket"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}}/>
                <input type="text" placeholder='Title your creation' className="createInput" autoFocus={true}/>
            </div>
            <div className="createFormGroup">
                <textarea 
                    placeholder="write a breif description, you can include&#10;-operating system&#10;-window manager&#10;-status bar&#10;-app launcher&#10;-color theme"
                    type="text" 
                    className='createInput createText'
                ></textarea>
            </div>
            <button className="createSubmit">Publish</button>
        </form>
    </div>
  )
}
