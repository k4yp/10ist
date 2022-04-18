import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { Context } from '../../context/Context'
import axios from 'axios'
import './singlePost.css'

export default function SinglePost() {
    const location = useLocation()
    const path = location.pathname.split('/')[2]
    const [post, setPost] = useState({})
    const PF = 'http://localhost:5000/images/'
    const { user } = useContext(Context)

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get('/posts/' + path)
            setPost(res.data)
        }
        getPost()
    }, [path])

    const handleDelete = async () => {
        try {
            await axios.delete(`/posts/${post._id}`, {
                data: { username: user.username },
            })
            window.location.replace('/')
        } catch {}
    }
    return (
        <div className='singlePost'>
            <div className='singlePostWrapper'>
                <div className='singlePostImg'>
                    <img
                        src={PF + post.photo}
                        alt=''
                        className='singlePostImg'
                    />
                </div>
                <h1 className='singlePostTitle'>
                    {post.title}
                    {post.username === user?.username && (
                        <div className='singlePostEdit'>
                            <i
                                className='singlePostIcon fa-solid fa-trash'
                                onClick={handleDelete}
                            ></i>
                        </div>
                    )}
                </h1>
                <div className='singlePostInfo'>
                    <span className='singlePostCreator'>
                        <Link className='link' to={`/?user=${post.username}`}>
                            <b>{post.username}</b>
                        </Link>
                    </span>
                    <span className='singlePostDate'>
                        {new Date(post.createdAt).toDateString()}
                    </span>
                </div>
                <p className='singlePostDesc'>{post.desc}</p>
            </div>
        </div>
    )
}
