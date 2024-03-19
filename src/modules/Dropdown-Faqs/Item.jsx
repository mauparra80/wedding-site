import React, {useState, useEffect} from "react";

export default function Item({title, answer}) {
  const [itemOpen, setItemOpen] = useState(false);

  // useEffect(() => {

  // })
 
  return (
    <div className="FAQS-dropdown-item">
        <div className="dropdown-title">
          <h2>{title}</h2>
          <button onClick={() => setItemOpen((prev) => !prev)}>{itemOpen ? <h2>&#8743;</h2> : <h2>&#8744;</h2>}</button>
        </div>
      
      {itemOpen && 
      <div className="dropdown-content">
        {answer}
      </div>}
    </div>
  )
}