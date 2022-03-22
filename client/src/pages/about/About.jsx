import './about.css'

export default function About() {
  return (
    <div className='about'>
        <h1 id="pandex">pandex</h1>
        <p>this was created for 10ist web design project</p>
        <a href="https://github.com/keyp0s/pandex">link to github repo</a>
        <h3 id="about-the-website">about the website</h3>
        <p>pandex is a place to share screenshots and configurations of all your *nix desktops, themes or any other cool customisations</p>
        <h3 id="technologies-used">technologies used</h3>
        <p><strong>frontend</strong></p>
        <ul>
            <li>react: chosen javascript libary to create responsive and reactive websites   </li>
        </ul>
        <p><strong>backend (still under development)</strong></p>
        <ul>
            <li>node.js: javascript runtime environment that allows js to run server side</li>
            <li>express: back end web application framework for node.js</li>
            <li>mongo db: document oriented NoSQL database</li>
        </ul>
    </div>
  )
}
