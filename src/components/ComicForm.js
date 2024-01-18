import { useState } from "react"

const initialFormState = {
  "image_url": "",
  "title": "",
  "issue": "",
  "description": ""
}

function ComicForm({ onSubmitComic }) {
  const [formData, setFormData] = useState(initialFormState)

  function handleFormChange(e){
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  function handleSubmit(e){
    e.preventDefault();
    fetch('http://localhost:8004/comics', {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(formData)
    })
      .then(resp => resp.json())
      .then(data => onSubmitComic(data))
  }

  return (

    <form className="comic-form" onSubmit={handleSubmit}>

      <h2>Add A New Issue</h2>

      <label htmlFor="image_url">Image URL: </label>
      <input name="image_url" value={formData.image_url} onChange={handleFormChange}/>

      <label htmlFor="title">Title: </label>
      <input name="title" value={formData.title} onChange={handleFormChange}/>

      <label htmlFor="issue">Issue Number: </label>
      <input name="issue" type="number" value={formData.number} onChange={handleFormChange}/>

      <label htmlFor="description">Description: </label>
      <input name="description" value={formData.description} onChange={handleFormChange}/>

      <input type="submit" value="Add Issue" />

    </form>

  )
}

export default ComicForm
