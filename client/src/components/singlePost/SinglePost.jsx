import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './singlePost.css'

export default function SinglePost() {
  const location = useLocation()
  const path = location.pathname.split("/")[2]
  const [post, setPost] = useState({})
  useEffect(() => 
  {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      console.log(res)
    }
    getPost()
  }, [path])
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
          <img 
          src="https://i.redd.it/6yt0rkb7t3a61.png"
          alt="post"
          className="singlePostImg"
          />
        <h1 className="singlePostTitle">
          the thing and the thing
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen"></i>
            <i className="singlePostIcon fa-solid fa-trash"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className='singlePostCreator'><b>keypos</b></span>
          <span className='singlePostDate'>1 hour ago</span>
        </div>
        <p className='singlePostDesc'>
          this is a very cool description
        </p>
        </div>
    </div>
  )
}