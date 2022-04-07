import './about.css'

export default function About() {
    return (
        <div className='about'>
            <h1 className='aboutTitle'>Pandex</h1>
            <p>This was created for 10ist web design project </p>
            <h3 id='about-the-website'>About the website</h3>
            <p>
                Pandex is a place to share screenshots and configurations of all
                your *nix desktops, themes or any other customisations
            </p>
            <h3 id='technologies-used'>Technologies used</h3>
            <p>
                <strong>Frontend</strong>{' '}
            </p>
            <ul>
                <li>
                    <a href='https://reactjs.org'>React</a> <strong>:</strong>{' '}
                    Chosen javascript libary to create responsive and reactive
                    websites{' '}
                </li>
            </ul>
            <p>
                <strong>Backend</strong>
            </p>
            <ul>
                <li>
                    <a href='https://nodejs.org/en/'>Node.js</a>{' '}
                    <strong>:</strong> A Runtime environment that allows JS to
                    run server side
                </li>
                <li>
                    <a href='https://expressjs.com/'>Express</a>{' '}
                    <strong>:</strong> Back end web application framework for
                    Node.js{' '}
                </li>
            </ul>
            <p>
                <strong>Database</strong>
            </p>
            <ul>
                <li>
                    <a href='https://www.mongodb.com/'>MongoDB</a>{' '}
                    <strong>:</strong> A document oriented NoSQL database
                </li>
            </ul>
        </div>
    )
}
