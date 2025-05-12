import { NavLink } from "react-router-dom";


export default function Service() {

    return (
        <div className="main-service">
            <div className="service-box" style={{
                display: 'flex'
            }}>
                <div>
                    <div className="service-card" style={{ backgroundColor: 'blue' }}>
                        <NavLink to={'/details'} style={{ textDecoration: 'none', color: 'white' }}>
                            <h2>React.js</h2>
                            <p>Build site Frontend and Backend</p>
                        </NavLink>
                    </div>
                    <div className="service-card" style={{ backgroundColor: 'grey' }}>
                        <NavLink to={'/details'} style={{ textDecoration: 'none', color: 'white' }}>
                            <h2>WordPress</h2>
                            <p>Build site Frontend and Backend</p>
                        </NavLink>
                    </div>
                    <div className="service-card" style={{ backgroundColor: 'green' }}>
                        <NavLink to={'/details'} style={{ textDecoration: 'none', color: 'white' }}>
                            <h2>Node.js</h2>
                            <p>Build site Frontend and Backend</p>
                        </NavLink>

                    </div>
                </div>
                <div>
                    <div className="service-card" style={{ backgroundColor: 'red' }}>
                        <h2>Angular.js</h2>
                        <p>Build site Frontend and Backend</p>
                    </div>
                    <div className="service-card" style={{ backgroundColor: 'yellow', color: 'black' }}>
                        <h2>Django Py</h2>
                        <p>Build site Frontend and Backend</p>
                    </div>
                    <div className="service-card" style={{ backgroundColor: 'pink', color: 'black' }}>
                        <h2>Bootstrap</h2>
                        <p>Build site Frontend and Backend</p>
                    </div>
                </div>
            </div>
        </div>
    )
}