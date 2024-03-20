import './footer.css'
import githubLogo from "../../assets/imgs/github-mark.png"

export default function Footer() {


  return (

    <div className="footer">
      <a href="https://github.com/mauparra80" className="signature">
        <p>Made by Mauparra80</p>
        <img src={githubLogo} alt="github logo" />
      </a>

      <p><div> Icons made by <a href="https://www.flaticon.com/authors/voysla" title="Voysla"> Voysla </a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com'</a></div></p>
    </div>

    
  )
}