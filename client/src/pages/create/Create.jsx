import { useContext, useState } from 'react'
import { Context } from '../../context/Context'
import axios from 'axios'
import './create.css'

export default function Create() {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [file, setFile] = useState(null)
    const { user } = useContext(Context)

    const handleSubmit = async (event) => {
        event.preventDefault()
        const newPost = {
            username: user.username,
            title,
            desc,
        }
        if (file) {
            const data = new FormData()
            const fileName = Date.now() + file.name
            data.append('name', fileName)
            data.append('file', file)
            newPost.photo = fileName
            try {
                await axios.post('/upload', data)
            } catch {}
        }
        try {
            const res = await axios.post('/posts', newPost)
            window.location.replace('/post/' + res.data._id)
        } catch {}
    }
    return (
        <div className='create'>
            {file && (
                <img
                    src={URL.createObjectURL(file)}
                    alt='desktop screenshot'
                    className='createImg'
                />
            )}
            <form className='createForm' onSubmit={handleSubmit}>
                <div className='createFormGroup'>
                    <label htmlFor='fileInput'>
                        <i className='createIcon fa-solid fa-arrow-up-from-bracket'></i>
                    </label>
                    <input
                        type='file'
                        id='fileInput'
                        style={{ display: 'none' }}
                        onChange={(event) => setFile(event.target.files[0])}
                    />
                    <input
                        type='text'
                        placeholder='Title your creation'
                        className='createInput'
                        autoFocus={true}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                </div>
                <div className='createFormGroup'>
                    <textarea
                        type='text'
                        placeholder='write a breif description, you can include&#10;-operating system&#10;-window manager&#10;-status bar&#10;-app launcher&#10;-color theme'
                        className='createInput createText'
                        onChange={(event) => setDesc(event.target.value)}
                    ></textarea>
                </div>
                <button className='createSubmit' type='submit'>
                    Publish
                </button>
            </form>
        </div>
    )
}
