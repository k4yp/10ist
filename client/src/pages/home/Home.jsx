import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Footer from '../../components/footer/Footer'
import Gallery from '../../components/gallery/Gallery'
import './home.css'
import { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import axios from 'axios'

export default function Home() {
    const [posts, setPosts] = useState([])
    const { search } = useLocation()

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get('/posts' + search)
            setPosts(res.data)
        }
        fetchPosts()
    }, [search])

    return (
        <>
            <Header />
            <Gallery />
            <div className='homeInfo'>
                If your new to ricing you can check out the guide <Link className="homeLink" to='/guide'>here</Link>
            </div>
            <div className='home'> 
                <Posts posts={posts} />
            </div>
            <Footer />
        </>
    )
}
