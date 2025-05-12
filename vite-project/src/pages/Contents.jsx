import {useEffect, useState} from 'react'

export default function Contents() {
    const [ content, setContent] = useState([]);
    useEffect(() => {
      fetch('/api/content').then((respone) => respone.json()).then((data) => setContent(data));
    }, []);

    const ContentAPI = content.map(content => (<p key={content.id}>{content.para}</p>))
  
  return (
    <div>
        <h1>Content</h1>
        <p>{ContentAPI}</p>
    </div>
  )
}
