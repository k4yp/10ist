import './guide.css'
import Footer from '../../components/footer/Footer'

export default function guide() {
    return (
        <>
            <div className='guide'>
                <h2>A simple guide to ricing</h2>
                <iframe
                    width='100%'
                    height='400px'
                    src='https://www.youtube.com/embed/ng7mlrKRpmA'
                    title='YouTube video player'
                    frameborder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowfullscreen
                ></iframe>
                <h3>What is ricing?</h3>
                <p>
                    The term 'rice' first originated from street racing and means Race
                    Inspired Cosmetic Enhancements. It is now commonly used to describe visual customisations to
                    the linux desktop that dont provide any practical benefits.
                </p>
                <h3>How do I start ricing?</h3>
                <p>
                    The first step is to choose your distribution. Though you
                    can really use any distribution many people lean towards
                    <a className ='guideLink' href='https://archlinux.org/'> Arch Linux</a> because of its high flexibility.
                </p>
                <h3>What can I customise?</h3>
                <ul className='guideList'>
                    <li className='guideListItem'>
                        <b>Desktop Environment (DE):</b> A desktop environment is a collection of programs bundled together to make a workspace. It comes with a window manager, a panel, a set of default programs (text editor, music player, etc.), a file manager, a terminal emulator, and many, many other things. Some commonly used are
                    </li>
                    <li className='guideListItem'>
                        <b>Window Manager (WM):</b> A window manager is software for an operating system that manages the placement of open windows. There are many window managers for Linux, most commonly used are
                    </li>

                </ul>
            </div>
            <Footer />
        </>
    )
}
