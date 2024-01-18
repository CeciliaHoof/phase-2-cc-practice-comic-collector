import { useState } from "react"

function Comic({comic}) {
  const { title, issue, image_url } = comic

  const [toggleDisplay, setToggleDisplay] = useState(false)

  function toggle(){
    setToggleDisplay(!toggleDisplay)
  }
  
  return (
    <div className="comic-item">

      {/* The image should render if the details aren't displayed */}
      {toggleDisplay ? 
      <div>
        <h3 onClick={toggle}>{title}</h3>
        <h4>{issue}</h4>
        <button>Remove</button>
      </div>:
      <img src={image_url} alt={"Comic Issue Image"} onClick={toggle}/>}

      {/* The details should render if the image isn't displayed */}
      

    </div>
  )

}

export default Comic
