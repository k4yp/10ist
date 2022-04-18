import './gallery.css'

export default function GalleryButton({ direction, moveSlide }) {
    console.log(direction, moveSlide)
    return (
        <button
            onClick={moveSlide}
            className={
                direction === 'next'
                    ? 'galleryBtnSlide next'
                    : 'galleryBtnSlide prev'
            }
        >
            <i
                className={
                    direction === 'next'
                        ? 'galleryBtn fa-solid fa-angle-right'
                        : 'galleryBtn fa-solid fa-angle-left'
                }
            />
        </button>
    )
}
