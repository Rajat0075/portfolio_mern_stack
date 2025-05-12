import '../App.css'

const user = {
    name: 'Rajat Kumar',
    description: '"Welcome to my portfolio! I am a developer who loves turning ideas into clean, efficient code. Here you ll find projects that highlight my skills in building reliable, user-focused applications. Take a Look around"',
}

export default function Cover() {
    return (
        <>
            <div className='main-cover'>
                <div>
                    <h1>I' am <span id="">{user.name}</span></h1>
                    <p id="cover-paragraph">{user.description}</p>
                </div>
                <div className="container">
                    <ul className="social-media">
                        <li><a href="#">GitHub</a></li>
                        <li><a href="#">Linkled</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">YouTube</a></li>
                    </ul>
                </div>
                <div className="btn-download">
                    <button id="btn-download">Download CV</button>
                </div>
            </div>
        </>

    )
}