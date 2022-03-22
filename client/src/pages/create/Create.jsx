import './create.css'

export default function Create() {
  return (
    <div className='create'>
        <form className='createForm'>
            <div className="createFormGroup">
                <label htmlFor="fileInput">
                    <i class="fa-solid fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}}/>
                <input type="text" placeholder='Title' className="createInput" autoFocus={true}/>
            </div>
            <div className="createFormGroup">
                <textarea 
                    placeholder="write a breif description" 
                    type="text" 
                    className='createInput createText'
                ></textarea>
            </div>
            <button className="createSubmit">Publish</button>
        </form>
    </div>
  )
}
