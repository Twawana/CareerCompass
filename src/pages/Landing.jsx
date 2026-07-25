import { Link } from 'react-router-dom'
import './Landing.css'

function Landing() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Discover Your <span>Perfect Career</span> Path</h1>
              <p>Our advanced assessment matches your skills, interests, and personality to ideal career opportunities. Take the first step toward a fulfilling professional journey.</p>
              <div className="hero-buttons">
                <Link to="/assessment" className="btn">Start Free Assessment</Link>
                <Link to="/jarvis" className="btn btn-outline">Ask Career Assist</Link>
              </div>
            </div>
            <div className="hero-image">
              <img src="/assets/images/home.avif" alt="Career path illustration" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose CareerCompass</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3><Link to="/assessment">Personalized Matching</Link></h3>
              <p>Our algorithm analyzes your unique profile to recommend careers that align with your strengths and aspirations.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-database"></i>
              </div>
              <h3><Link to="/careers">Comprehensive Database</Link></h3>
              <p>Access thousands of career profiles with salary data, growth projections, and required education.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-road"></i>
              </div>
              <h3><Link to="/tips">Pro Tips</Link></h3>
              <p>Get tips and tricks to make money or get a job.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Complete Your Assessment</h3>
                <p>Take our 30-second questionnaire about your skills, interests, work preferences, and personality traits.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Receive Your Matches</h3>
                <p>Get a personalized list of career options ranked by compatibility with your profile.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Explore Your Options</h3>
                <p>Dive deep into each career with detailed information about salary, growth, education requirements, and day-to-day responsibilities.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Plan Your Path</h3>
                <p>Create a customized roadmap with courses, certifications, and steps needed to launch your new career.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">Success Stories</h2>
          <div className="testimonial-grid">
            <div className="testimonial">
              <p>CareerCompass helped me discover a career in UX design that I never would have considered. Two years later, I'm working at my dream company!</p>
              <div className="testimonial-author">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Jamie L." />
                <div className="author-info">
                  <h4>Jamie Larson</h4>
                  <p>UX Designer at TechSolutions</p>
                </div>
              </div>
            </div>
            <div className="testimonial">
              <p>After feeling stuck in my dead-end job, the assessment showed me my skills were perfect for project management. I got certified and doubled my salary.</p>
              <div className="testimonial-author">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="David K." />
                <div className="author-info">
                  <h4>Simon Shahin</h4>
                  <p>CEO of Buildit</p>
                </div>
              </div>
            </div>
            <div className="testimonial">
              <p>The pathway planning feature gave me the confidence to switch careers to nursing at 35. I'm now in my final year of nursing school.</p>
              <div className="testimonial-author">
                <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Maria G." />
                <div className="author-info">
                  <h4>Maria Gonzalez</h4>
                  <p>Nursing Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Ready to Discover Your Ideal Career?</h2>
          <p>Join over 500,000 people who found their perfect career path with CareerCompass</p>
          <div className="cta-buttons">
            <Link to="/assessment" className="btn">Start Free Assessment</Link>
            <Link to="/tips" className="btn btn-outline">Learn More</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Landing

