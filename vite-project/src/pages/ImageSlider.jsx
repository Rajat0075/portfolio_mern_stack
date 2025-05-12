import {useState} from 'react';


export default function ImageSlider(){
    const images = [
        '../../public/mern_1.png',
        '../../public/mern_2.png',
        '../../public/mern_3.png',
        '../../public/mern_4.png'
    ];

    const [index,setIndex]=useState(0);
    const next= ()=> setIndex((index + 1) %images.length);
    const prev=()=> setIndex((index - 1 + images.length) % images.length);



    return(
        <>
        <div style={{textAlign: 'center'}}>
            <img src={images[index]} alt='Slide' width="400" height='200'  />
            <div>
                <button onClick={prev} >Prev</button>
                <button onClick={next}>Next</button>
            </div>
        </div>
        <div>
        </div>        
        </>

    )
}