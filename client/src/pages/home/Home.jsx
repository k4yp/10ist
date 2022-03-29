import Header from "../../components/header/Header"
import Sidebar from "../../components/sidebar/Sidebar"
import Posts from "../../components/posts/Posts"
import Footer from "../../components/footer/Footer"
import "./home.css"
import { useState, useEffect } from "react"
import axios from "axios"

export default function Home() {
  const [posts,setPosts] = useState([])

  useEffect(()=>{
    const fetchPosts = async ()=>{
      const res = await axios.get("/posts")
      console.log(res)
    }
    fetchPosts()
  },[])

  return (
    <>
      <Header/>
      <div className="home">
        <Posts/>
        <Sidebar/>    
      </div>
      <Footer/>
    </>
  )
}
