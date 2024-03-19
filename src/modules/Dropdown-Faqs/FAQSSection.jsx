import React, {UseState} from "react";
import './dropdown-Faqs.css';
import Item from "./Item";
import directionsImg from "../../assets/imgs/Directions-map.png"

export default function FAQSSection() {

  //add an Item to the Faqs you want the dropDown section to have
  const Faqs = [
    {
      title: "Location and Directions",
      answer: <div className="location-container">
                <div>
                  <div className="ceremony">
                    <br />
                    
                    <h3>Wedding Ceremony</h3>
                    <p>St Martha Catholic Church</p>
                    <a href="https://maps.app.goo.gl/98UEPZoytXmyUU1z5" target="_blank"><p>4301 Woodridge Pkwy, Porter, TX 77365</p></a>
                    
                  </div>
                  <div className="reception">
                    <br />
                    
                    <h3>Reception</h3>
                    <p>Parra Home</p>
                    <a href="https://maps.app.goo.gl/aoegsTkveU96E2Sw8" target="_blank"><p>810 Golden Bear Ln, Kingwood Area, TX 77339</p></a>
                    
                  </div>
                  <br />
                  <a href="https://maps.app.goo.gl/5Pyix2NZAoovq2zo6" target="_blank"><img src={directionsImg}alt="directions map" /></a>
                  <button className="button-orange-full">download PDF directions</button>
                </div>
              </div>,
      id: 1
    },
    {
      title: "Parking and Commuting",
      answer: "stuff",
      id: 2
    },
    {
      title: "Dress Code",
      answer: "asdf",
      id: 3
    },
  ]

  return (
    <div className="section-information">
      {Faqs.map((item) => (
      <Item key={item.id} {...item}/> ))}
    </div>
    
  )
}