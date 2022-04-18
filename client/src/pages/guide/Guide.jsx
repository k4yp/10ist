import './guide.css'
import Footer from '../../components/footer/Footer'

export default function guide() {
    return (
        <>
            <div className='guide'>
                <h1>A simple guide to ricing</h1>
                <iframe
                    width='560'
                    height='315'
                    src='https://www.youtube.com/embed/ng7mlrKRpmA'
                    title='YouTube video player'
                    frameborder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowfullscreen
                ></iframe>
            </div>
            <Footer />
        </>
    )
}
