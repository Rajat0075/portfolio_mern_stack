import ImageSlider from "./ImageSlider"

const data = {
    title: 'React.js',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores dicta qui libero est doloremque quia, omnis unde ullam, beatae impedit corporis itaque ratione repudiandae odit atque veritatis quisquam quibusdam similique.'
}

export default  function Preview(){
    function SignUp() {
        return alert("SignUp")
    }
    return(
        <div style={{marginLeft: '10%', marginRight: '10%', marginTop: '5%'}}>
            <div>
                <h2 className="page_title" >{data.title}</h2>
                <p>{data.description}</p>
                <p>Features</p>
                <ul>
                    <li>Responsive UI</li>
                    <li>Navigation</li>
                    <li>Authentication</li>
                    <li>Dashboard</li>
                    <li>Database Management</li>
                </ul>
            </div>
            <div>
                <h5>Preview</h5>
                <ImageSlider />
            </div>
            <div>
                <button style={{marginTop:'10%' ,padding:'2%'}} onClick={SignUp} >Order</button>
            </div>
        </div>
    )
}