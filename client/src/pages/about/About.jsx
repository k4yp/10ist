import './about.css'

export default function About() {
    return (
        <div className='about'>
            <h1 id='pandex'>Pandex</h1>
            <img
                src='https://img.shields.io/github/last-commit/keyp0s/pandex?logo=GitHub'
                alt='last commit'
            />
            <img
                src='https://img.shields.io/github/deployments/keyp0s/pandex/thepandex?logo=Heroku'
                alt='status'
            />
            <img className='headerImg' src={
                                process.env.PUBLIC_URL +`/img/linux-desktops.gif`
                            } alt="linux desktop gif"/>
            <h2>About the website</h2>
            <p>
                Pandex is a place to share screenshots and configurations of all your *nix desktops, themes or any other customisations
                <br />
                dotly <a href='https://thepandex.herokuapp.com/'>live on heroku</a> (may or may not be working)
            </p>
            <h2 id='technologies-used'>Technologies used</h2>
            <p>
                <strong>Frontend</strong>
            </p>
            <ul>
                <li>
                    <a href='https://reactjs.org'>React</a>: Chosen javascript
                    libary to create responsive and reactive websites
                </li>
            </ul>
            <p>
                <strong>Backend</strong>
            </p>
            <ul>
                <li>
                    <a href='https://nodejs.org/en/'>Node.js</a>: A Runtime
                    environment that allows JS to run server side
                </li>
                <li>
                    <a href='https://expressjs.com/'>Express</a>: Back end web
                    application framework for Node.js
                </li>
                <br/>
                <li>
                    <a href='https://www.npmjs.com/package/bcrypt'>Bcrypt</a>:
                    Library to help hash passwords
                </li>
                <li>
                    <a href='https://www.npmjs.com/package/multer'>Multer</a>:
                    Handles file uploads, specificly images in my case
                </li>
                <li>
                    <a href='https://mongoosejs.com/'>Mongoose</a>: A MongoDB
                    object modeling tool
                </li>
            </ul>
            <p>
                <strong>Database</strong>
            </p>
            <ul>
                <li>
                    <a href='https://www.mongodb.com/'>MongoDB</a>: A document
                    oriented NoSQL database
                </li>
            </ul>
            <h2>Installation</h2>
            <strong>Prerequisites</strong>
            <ul>
                <li>
                    <a href='https://nodejs.org/en/download/'>Node.js</a> LTS
                    installed
                </li>
                <li>
                    <a href='https://www.mongodb.com/try/download/community'>MongoDB</a> server installed
                </li>
            </ul>
            <strong>Setup</strong>
            <ul>
                <li>
                    Clone the repository to your computer with git clone <a href='https://github.com/keyp0s/pandex.git'>https://github.com/keyp0s/pandex.git</a>
                </li>
                <li>
                    Then go to the root folder and run <strong>(cd server &amp;&amp; npm install) &amp;&amp; (cd..) &amp;&amp; (cd client &amp;&amp; npm install)&amp;&amp; (cd ..)</strong>
                    <br/>
                    to install the required packages
                </li>
            </ul>
        </div>
    )
}
