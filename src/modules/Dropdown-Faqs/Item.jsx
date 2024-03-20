import React, {useState, useEffect} from "react";

export default function Item({title, answer}) {
  const [itemOpen, setItemOpen] = useState(false);

  // useEffect(() => {

  // })
 
  return (
    <div className="FAQS-dropdown-item">
        <div className="dropdown-title" onClick={() => setItemOpen((prev) => !prev)}>
          <h2>{title}</h2>
          {itemOpen ? <h2>&#8743;</h2> : <h2>&#8744;</h2>}
        </div>
      
      {itemOpen && 
      <div className="dropdown-content">
        {answer}
      </div>}
    </div>
  )
}