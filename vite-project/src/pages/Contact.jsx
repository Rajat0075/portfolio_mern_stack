import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ username: '', email: '', phone: '', description:'' });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value});
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await fetch('http://localhost:3000/api/form',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(formData)});
      const result = await response.json();
      console.log(result);
    }catch(err){
      console.error(err);
    }
  };


  function search(formData) {
    const query = formData.get("query");
    alert(`You Searched for '${name}','${email}'`)
  }
  return (
    <div>
      <div className="form-contact">
        <h2 className="page_title">Contact</h2>
        <form action={search} onSubmit={handleSubmit}>
          <input name="username" placeholder="Your Name" value={formData.name} onChange={handleChange} /><br /><br />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} /><br /><br />
          <input type="phone" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} /><br /><br />
          <textarea type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} /> <br /><br />
          <button type="submit">Search</button>
        </form>
      </div>

    </div>
  )

}