import { Link } from 'react-router-dom'
import './About.css'

function About() {
  return (
    <main className="container">
      <section className="mission-section">
        <div className="mission-text">
          <h2>Our Mission</h2>
          <p>Career Compass was founded in 2025 with a simple but powerful goal: to help people navigate the complex world of career choices with confidence and clarity. We believe everyone deserves access to the tools and information needed to find work that is both financially rewarding and personally fulfilling.</p>
          <p>In today's rapidly changing job market, traditional career guidance often falls short. Our platform combines cutting-edge technology with expert career counseling to provide personalized recommendations that evolve with your skills, interests, and the job market.</p>
        </div>
        <div className="mission-image">
          <img src="/assets/images/IDK.png" alt="Team meeting at Career Compass" />
        </div>
      </section>

      <section>
        <h2 style={{ textAlign: 'center' }}>Why Choose Career Compass</h2>
        <div className="about-features">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-bullseye"></i>
            </div>
            <h3>Personalized Matching</h3>
            <p>Our advanced algorithm analyzes your unique skills, interests, and personality to recommend careers that truly fit you.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-database"></i>
            </div>
            <h3>Comprehensive Database</h3>
            <p>Access thousands of up-to-date career profiles with salary information, growth projections, and required education.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-road"></i>
            </div>
            <h3>Pathway Planning</h3>
            <p>Get step-by-step guidance on the education and experience needed to achieve your career goals.</p>
          </div>
        </div>
      </section>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <p>The passionate professionals behind Career Compass</p>

        <div className="team-members">
          <div className="team-member">
            <img src="/assets/images/ndeshi.jpg" alt="Ndeshi" className="team-photo" />
            <h4>Foibe Abiater</h4>
            <p className="team-position">Founder & Career Coach</p>
            <p>20+ years experience in career counseling and human resources</p>
            <div className="social-links">
              <a href="https://www.instagram.com/_phoebee1/#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>

          <div className="team-member">
            <img src="/assets/images/T.jpg" alt="Tukuna" className="team-photo" />
            <h4>T.T.T</h4>
            <p className="team-position">Lead Developer</p>
            <p>Specializes in career assessment algorithms and data visualization</p>
            <div className="social-links">
              <a href="https://www.instagram.com/_twawana_/#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>

          <div className="team-member">
            <img src="/assets/images/c.jpg" alt="C" className="team-photo" />
            <h4>Cristiano Feijo</h4>
            <p className="team-position">Educational Specialist</p>
            <p>Connects users with learning opportunities and certification programs</p>
            <div className="social-links">
              <a href="https://www.instagram.com/ucrafteryt/#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <h2>Ready to Discover Your Ideal Career?</h2>
        <p>Join over 500,000 users who found their path with Career Compass</p>
        <div className="cta-buttons">
          <Link to="/assessment" className="btn btn-primary">Take the Assessment</Link>
        </div>
      </section>
    </main>
  )
}

export default About

