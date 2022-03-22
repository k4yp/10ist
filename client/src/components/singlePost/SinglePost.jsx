import './singlePost.css'

export default function PostInfo() {
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
