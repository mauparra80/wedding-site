import MobileDropdownNav from "./modules/mobile-dropdown-nav/Mobile-dropdown-nav"
import Footer from "./modules/footer/footer";
import Navbar from "./modules/Desktop-sticky-navbar/Navbar";

import titlepic from './assets/imgs/blue-orange-full.png'
import cafePic from './assets/imgs/cafe.png'
import FAQSSection from "./modules/Dropdown-Faqs/FAQSSection";
import registryPic from './assets/imgs/registry-office.png'
import seriousPic from './assets/imgs/serious-door.png'

/*
TODO
- Add RSVP
- add Download PDF
*/

export default function Home() {

  // Function to handle smooth scrolling to a section
  const scrollToSection = (id) => {
    console.log(id);
    const element = document.getElementById(id);
    console.log(element);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="section section-title" id="section-title">
        <div className="title">
          <h1 className="font-fancy">William & Mariel</h1>
          <h3>April 6th, 2024</h3>
        </div>
        <img className="title-pic banner-img" src={titlepic} alt="title couple image"/>
      </div>

      <div className="section section-navbar ">
        <Navbar scrollToSection={scrollToSection}/>
      </div>

      <div className="section section-ceremony-reception-info" id="section-ceremony-reception-info">
        <div className="ceremony-reception-info">
          <div className="rsvp">
            <button className="font-fancyTwo hover-effect">RSVP</button>
          </div>
          <div className="ceremony">
            <h3>Wedding Ceremony</h3>
            <p>St Martha Catholic Church</p>
          </div>
          <div className="reception">
            <h3>Reception</h3>
            <p>Parra Home</p>
            <p>810 Golden Bear ln. Kingwood, TX 77339</p>
          </div>
          
        </div>
        
      </div>

      <div className="section">
      <img className="cafe-pic banner-img" src={cafePic} alt="title couple image"/>
      </div>

      <div className="section section-information" id="section-information">
        <FAQSSection />
      </div>

      <div className="section section-registry" id="section-registry">
        <img src={registryPic} alt="registry logo" />
        <a href="https://www.myregistry.com/wedding-registry/william-garcia-and-mariel-parra-houston-tx/4039961/giftlist" target="_blank"><button className="button-orange-full font-fancyTwo hover-effect" >Wedding Registry</button></a>
      </div>

      <div className="section section-last">
        <h2>Be There<br></br> Or Else</h2>
        <img className="serious-pic banner-img" src={seriousPic} alt="title couple image"/>
      </div>

      <div className="section-mobileNav">
        <MobileDropdownNav scrollToSection = {scrollToSection}/>
      </div>
      

      <Footer />
    </>
  )
}