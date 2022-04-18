import { useState } from 'react'
import './gallery.css'
import BtnGallery from './BtnGallery'
import dataGallery from './dataGallery'

export default function Gallery() {
    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if (slideIndex !== dataGallery.length) {
            setSlideIndex(slideIndex + 1)
        } else if (slideIndex === dataGallery.length) {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        } else if (slideIndex === 1) {
            setSlideIndex(dataGallery.length)
        }
    }

    const moveDot = (index) => {
        setSlideIndex(index)
    }

    return (
        <div className='container-Gallery'>
            {dataGallery.map((obj, index) => {
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
                            }
                        />
                    </div>
                )
            })}
            <BtnGallery moveSlide={nextSlide} direction={'next'} />
            <BtnGallery moveSlide={prevSlide} direction={'prev'} />

            <div className='container-dots'>
                {Array.from({ length: 5 }).map((item, index) => (
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
