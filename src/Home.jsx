import MobileDropdownNav from "./modules/mobile-dropdown-nav/Mobile-dropdown-nav"
import titlepic from './assets/imgs/blue-orange-full.png'
import cafePic from './assets/imgs/cafe.png'
import FAQSSection from "./modules/Dropdown-Faqs/FAQSSection";



export default function Home() {

  // Function to handle smooth scrolling to a section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="section section-title">
        <div className="title">
          <h1 className="font-fancy">William & Mariel</h1>
          <h3>April 6th, 2024</h3>
        </div>
        <img className="title-pic" src={titlepic} alt="title couple image"/>
      </div>

      <div className="section section-ceremony-reception-info">
        <div className="ceremony-reception-info">
          <div className="rsvp">
            <button>RSVP</button>
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
      <img className="cafe-pic" src={cafePic} alt="title couple image"/>
      </div>

      <div className="section section-information">
        <FAQSSection />
      </div>

      <MobileDropdownNav scrollToSection = {scrollToSection}/>
    </>
  )
}