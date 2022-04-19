import './footer.css'

export default function Footer() {
    var year = new Date().getFullYear()
    return (
        <div className='footer'>
            pandex @{year}
            <br />
            created by aiden tubman
        </div>
    )
}
