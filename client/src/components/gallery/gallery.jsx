import { useState } from 'react'
import './gallery.css'
import GalleryButton from './GalleryButton'
import GalleryData from './GalleryData'

export default function Gallery() {
    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if (slideIndex !== GalleryData.length) {
            setSlideIndex(slideIndex + 1)
        } else if (slideIndex === GalleryData.length) {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        } else if (slideIndex === 1) {
            setSlideIndex(GalleryData.length)
        }
    }

    const moveDot = (index) => {
        setSlideIndex(index)
    }

    return (
        <div className='container-Gallery'>
            {GalleryData.map((obj, index) => {
                return (
                    <div
                        key={obj.id}
                        className={
                            slideIndex === index + 1
                                ? 'slide active-anim'
                                : 'slide'
                        }
                    >
                        <img 
                            src={
                                process.env.PUBLIC_URL +
                                `/img/linux-desktop-slide-${index + 1}.png`
                            } alt='linux desktop'
                        />
                    </div>
                )
            })}
            <GalleryButton moveSlide={nextSlide} direction={'next'} />
            <GalleryButton moveSlide={prevSlide} direction={'prev'} />

            <div className='container-dots'>
                {Array.from({ length: 8 }).map((item, index) => (
                    <div
                        onClick={() => moveDot(index + 1)}
                        className={
                            slideIndex === index + 1 ? 'dot active' : 'dot'
                        }
                    ></div>
                ))}
            </div>
        </div>
    )
}
