import './post.css'
export default function post() {
  return (
    <div className='post'>
        <img
            className='postImg' 
            src="https://media.discordapp.net/attachments/885000925406715934/955359790090035220/R-8896507-1515461966-9496.png" 
            alt="" 
        />
        <div className="postInfo">
            <div className="postClasses">
                <span className="postClass">
                    operating system
                </span>
                <span className="postClass">
                    window manager
                </span>
            </div>
            <span className="postTitle">
                Lorem ipsum dolor sit amet
            </span>
            <span className="postDate">
                1 hour ago
            </span>
            <p className='postDesc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, soluta incidunt voluptatem eaque sequi eligendi quod deserunt quidem ex quos expedita unde a veritatis dolorum facilis eius cumque ipsam laboriosam.
            </p>
        </div>
    </div>
  )
}
