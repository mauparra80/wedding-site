import MobileDropdownNav from "./mobile-dropdown-nav/Mobile-dropdown-nav"

export default function Home() {

  // Function to handle smooth scrolling to a section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <MobileDropdownNav scrollToSection = {scrollToSection}/>
  )
}