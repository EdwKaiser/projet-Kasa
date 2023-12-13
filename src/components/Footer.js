import logo_footer from '../img/logo_footer.png'
import '../assets/Footer.scss'

function Footer() {
  return (
    <footer className="footer">
      <img src={logo_footer} alt="logo Kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
