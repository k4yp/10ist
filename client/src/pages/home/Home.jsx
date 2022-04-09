import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Footer from '../../components/footer/Footer'
import './home.css'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
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
            <div className='home'>
                <Posts posts={posts} />
            </div>
            <Footer />
        </>
    )
}
