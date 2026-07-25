import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-column">
          <h3>CareerCompass</h3>
          <p>Helping individuals discover fulfilling careers through data-driven matching and personalized pathway planning.</p>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/assessment">Career Assessment</Link></li>
            <li><Link to="/careers">Career Paths</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Career Resources</h3>
          <ul>
            <li><Link to="/cv">Resume Builder</Link></li>
            <li><a href="#">Interview Prep</a></li>
            <li><Link to="/tips">Tips & Tricks</Link></li>
            <li><a href="https://www.instagram.com/_twawana_/#">Socials</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Newsletter</h3>
          <p>Get career tips and updates delivered to your inbox.</p>
          <form className="newsletter" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email address" />
            <button type="submit" className="btn">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/careers">Careers</Link>
          <a href="mailto:mulundutukuna@gmail.com">mulundutukuna@gmail.com</a>
          <Link to="/policy">Privacy Policy</Link>
        </div>
        <p className="copyright">&copy; 2025 CareerCompass. All rights reserved By T</p>
      </div>
    </footer>
  )
}

export default Footer
