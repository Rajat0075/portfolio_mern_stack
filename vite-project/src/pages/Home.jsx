import { useEffect, useState } from 'react'
import file from '../assets/resume.pdf'
import About from './About'
import Footer from '../Footer'

const user = {
    name: 'Rajat Kumar',
    description: '"Welcome to my portfolio! I am a developer who loves turning ideas into clean, efficient code. Here you ll find projects that highlight my skills in building reliable, user-focused applications. Take a Look around"',
}

export default function Home() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('/api/users').then((respone) => respone.json()).then((data) => setUsers(data));
    }, []);
    const data = users.map(user => (<p key={user.id}>{user.name}</p>));
    return (
        <div className='main-cover'>
            <div >
                <div className='cover'>
                    <h1>Hi, I'm <span id="" >{user.name}</span></h1>
                    <p id="cover-paragraph">{data}</p>
                </div>
                <div className="container">
                    <ul className="social-media">
                        <li><a className='a-media' href="#" style={{color:'black', backgroundColor: 'white'}}>GitHub</a></li>
                        <li><a className='a-media' href="#" style={{color:'blue', backgroundColor: 'white'}}>Linkled</a></li>
                        <li><a className='a-media' href="#" style={{color:'red', backgroundColor: 'pink'}}>Instagram</a></li>
                        <li><a className='a-media' href="#" style={{color:'white', backgroundColor: 'red'}}>YouTube</a></li>
                    </ul>
                </div>
                <div className="btn-download">
                    <button id="btn-download" ><a style={{ color: 'white', textDecoration: 'none' }} href={file}>Download CV</a></button>
                </div>
            </div>
        </div >

    )
}