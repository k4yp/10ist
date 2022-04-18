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

    const moveprogress = (index) => {
        setSlideIndex(index)
    }

    return (
        <div className='containerGallery'>
            {GalleryData.map((obj, index) => {
                return (
                    <div
                        key={obj.id}
                        className={
                            slideIndex === index + 1
                                ? 'slide activeAnim'
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

            <div className='containerProgresss'>
                {Array.from({ length: 8 }).map((item, index) => (
                    <div
                        onClick={() => moveprogress(index + 1)}
                        className={
                            slideIndex === index + 1 ? 'progress active' : 'progress'
                        }
                    ></div>
                ))}
            </div>
        </div>
    )
}
