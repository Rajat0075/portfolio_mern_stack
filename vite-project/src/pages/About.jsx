import { useEffect, useState } from "react";

export default function About() {

  const [about, setAbout] = useState([]);
  useEffect(() => {
    fetch('/api/abouts').then((respone) => respone.json()).then((data) => setAbout(data));
  }, []);
  const AboutAPI = about.map(about => (<p key={about.id}>{about.para}</p>))

  const data = {
    title: "About",
    date: Date(),
  }
 // const Data = React.lazy(()=>import("./Data"))
  return (
    <div className="main-about">
      <h1 className="page_title">{data.title}</h1>
      <p>{data.date}</p>
      <hr />
      <p>{AboutAPI}</p>
      
    </div>
  )
}