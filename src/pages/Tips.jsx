import './Tips.css'

const successStories = [
  { name: 'Anna (Windhoek)', story: 'Started tutoring math online using her phone. Now runs a small tutoring agency.' },
  { name: 'Joel (Katima)', story: '"I make money by reselling phones I bought in SA on Facebook Marketplace."' },
  { name: 'Tasha (Walvis Bay)', story: 'Went from selling snacks at school to owning a fast-food kiosk.' },
  { name: 'Jason (Swakopmund)', story: '"I make money by creating apps and websites for clients."' },
  { name: 'Tangeni (Windhoek)', story: 'Transitioned from a small brand to owning a big fashion company.' },
  { name: 'Linda (Windhoek)', story: 'Started a YouTube channel with just a phone and now owns the biggest podcast in Namibia.' },
  { name: 'Martha (Ongwediva)', story: 'Learned graphic design on her phone and now designs logos and posters for local businesses.' },
  { name: 'Elago (Rundu)', story: 'Repairs laptops and phones in his neighborhood — started with one borrowed toolkit.' },
  { name: 'Chantel (Keetmanshoop)', story: 'Writes and sells CVs and cover letters for students — now teaches CV building workshops.' },
  { name: 'Michael (Gobabis)', story: 'Started a small cleaning service using his mom\'s broom and buckets — now hires others.' },
  { name: 'Selma (Oshakati)', story: 'Made her first N$500 selling second-hand jeans on WhatsApp. Now runs a full thrift brand.' },
  { name: 'Danny (Windhoek)', story: 'Became a local TikTok influencer by posting skits — now gets paid to promote businesses.' },
]

const jobTips = [
  { title: 'Create a professional CV', details: 'Use Canva or free online templates to design a clean, modern resume that highlights your skills' },
  { title: 'Tailor your CV for each application', details: 'Adjust keywords and emphasize relevant experience for each job you apply to' },
  { title: 'Include measurable achievements', details: 'Use numbers and statistics to show your impact (e.g., "Increased sales by 20%")' },
  { title: 'Keep it concise', details: 'Limit your resume to 1-2 pages maximum, focusing on recent and relevant experience' },
  { title: 'Apply even if you don\'t meet all requirements', details: 'Many job descriptions list ideal qualifications — apply if you meet 60-70% of them' },
  { title: 'Leverage your network', details: 'Ask family, friends, or former colleagues if they know of any job opportunities' },
  { title: 'Follow up after applying', details: 'Send a polite email 1-2 weeks after submitting your application' },
  { title: 'Apply early', details: 'Submit applications within the first 3 days of posting when possible' },
]

const skillTips = [
  { title: 'Take free online courses', details: 'Platforms like Coursera, edX, and Khan Academy offer free courses you can add to your CV' },
  { title: 'Learn in-demand skills', details: 'Focus on skills like basic coding, digital marketing, or data analysis' },
  { title: 'Build a portfolio', details: 'Create sample projects or case studies to demonstrate your skills to employers' },
  { title: 'Get certified', details: 'Earn free or low-cost certifications from Google, Microsoft, or HubSpot' },
  { title: 'Gain experience through volunteering', details: 'Local organizations often need help that can build your skills and resume' },
  { title: 'Start freelancing', details: 'Offer services on platforms like Fiverr or Upwork to build real-world experience' },
  { title: 'Document all experience', details: 'Include informal work (helping family businesses, personal projects) on your resume' },
]

const interviewTips = [
  { title: 'Practice common questions', details: 'Rehearse answers to "Tell me about yourself" and "Why should we hire you?"' },
  { title: 'Research the company', details: 'Understand their mission, products, and recent news before the interview' },
  { title: 'Prepare questions to ask', details: 'Have 2-3 thoughtful questions ready about the role and company culture' },
  { title: 'Dress appropriately', details: 'When in doubt, dress slightly more formally than the company\'s everyday attire' },
  { title: 'Focus on confidence', details: 'Clear communication and enthusiasm often matter more than perfect English' },
  { title: 'Use the STAR method', details: 'Structure answers with Situation, Task, Action, Result when discussing experiences' },
  { title: 'Show enthusiasm', details: 'Express genuine interest in the role and company throughout the conversation' },
  { title: 'Bring copies of your resume', details: 'Have several printed copies available, even for virtual interviews' },
]

const moneyMethods = [
  { icon: 'fa-pen-fancy', title: 'Freelance Writing', desc: 'Write articles, blog posts, or product descriptions for clients.', earnings: '$20-$100/article', diff: 'Medium', startup: 'Free' },
  { icon: 'fa-chalkboard-teacher', title: 'Online Tutoring', desc: 'Teach subjects you know well via platforms like Preply or TutorMe.', earnings: '$15-$50/hour', diff: 'Medium', startup: 'Free' },
  { icon: 'fa-photo-video', title: 'Sell Stock Photos', desc: 'Upload photos or videos to Shutterstock or Adobe Stock.', earnings: '$0.25-$100/download', diff: 'Low', startup: 'Free (need camera)' },
  { icon: 'fab fa-youtube', title: 'YouTube Channel', desc: 'Create videos about your interests and earn from ads and sponsorships.', earnings: '$3-$10/1000 views', diff: 'High', startup: 'Free' },
  { icon: 'fa-microphone', title: 'Voice Over Work', desc: 'Record voiceovers for commercials or audiobooks using your smartphone.', earnings: '$50-$500/project', diff: 'Medium', startup: 'Free' },
  { icon: 'fa-car', title: 'Rideshare Driving', desc: 'Drive for Uber or Lyft using your own car.', earnings: '$15-$30/hour', diff: 'Low', startup: 'Need car' },
  { icon: 'fa-shopping-bag', title: 'Delivery Services', desc: 'Deliver food (DoorDash, UberEats) or groceries (Instacart).', earnings: '$12-$25/hour', diff: 'Low', startup: 'Need transportation' },
  { icon: 'fa-tools', title: 'Handyman Services', desc: 'Offer basic home repairs, furniture assembly, or painting.', earnings: '$25-$75/hour', diff: 'Medium', startup: 'Basic tools' },
  { icon: 'fa-dog', title: 'Pet Sitting', desc: 'Care for pets while owners are away or take dogs for walks.', earnings: '$15-$50/service', diff: 'Low', startup: 'Free' },
  { icon: 'fa-baby', title: 'Babysitting', desc: 'Offer childcare services during evenings or weekends.', earnings: '$15-$30/hour', diff: 'Medium', startup: 'Free' },
  { icon: 'fa-tshirt', title: 'Sell Used Items', desc: 'Sell unwanted clothes, electronics, or furniture online.', earnings: 'Varies', diff: 'Low', startup: 'Free' },
  { icon: 'fa-utensils', title: 'Home Cooking', desc: 'Sell homemade meals, baked goods, or meal prep services.', earnings: '$5-$20/item', diff: 'Medium', startup: 'Kitchen supplies' },
]

function Tips() {
  return (
    <div className="container tips-page">
      <section className="fade-in">
        <h1>Success & Money Tips</h1>
        <p>Explore stories and advice on achieving career success and managing your finances.</p>

        <div className="tips-section">
          <h2><i className="fas fa-star"></i> Inspiring Success Stories</h2>
          <ul className="story-list">
            {successStories.map((s, idx) => (
              <li className="story" key={idx}><strong>{s.name}:</strong> {s.story}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="fade-in tips-section">
        <h2><i className="fas fa-search"></i> Job Search Strategies</h2>
        <div className="tip-category">
          <h3><i className="fas fa-file-alt"></i> Resume/CV Tips</h3>
          <ul className="tips-list">
            {jobTips.map((tip, idx) => (
              <li key={idx}>
                <i className="fas fa-check-circle"></i>
                <div className="tip-content">
                  <div className="tip-title">{tip.title}</div>
                  <div className="tip-details">{tip.details}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="fade-in tips-section">
        <h2><i className="fas fa-user-graduate"></i> Skill Development</h2>
        <div className="tip-category">
          <h3><i className="fas fa-laptop"></i> Online Learning & Experience</h3>
          <ul className="tips-list">
            {skillTips.map((tip, idx) => (
              <li key={idx}>
                <i className="fas fa-check-circle"></i>
                <div className="tip-content">
                  <div className="tip-title">{tip.title}</div>
                  <div className="tip-details">{tip.details}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="fade-in tips-section">
        <h2><i className="fas fa-comments"></i> Interview Success</h2>
        <div className="tip-category">
          <h3><i className="fas fa-handshake"></i> Preparation & During the Interview</h3>
          <ul className="tips-list">
            {interviewTips.map((tip, idx) => (
              <li key={idx}>
                <i className="fas fa-check-circle"></i>
                <div className="tip-content">
                  <div className="tip-title">{tip.title}</div>
                  <div className="tip-details">{tip.details}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="fade-in">
        <h2><i className="fas fa-link"></i> Helpful Resources</h2>
        <div className="resources-grid">
          <div className="resource-card">
            <div className="resource-icon"><i className="fas fa-file-alt"></i></div>
            <div className="resource-info">
              <h4><a href="https://www.canva.com/resumes/templates/" className="resource-link" target="_blank" rel="noreferrer">Canva Resume Templates</a></h4>
              <p>Free, professional resume templates you can customize</p>
            </div>
          </div>
          <div className="resource-card">
            <div className="resource-icon"><i className="fas fa-graduation-cap"></i></div>
            <div className="resource-info">
              <h4><a href="https://www.coursera.org/" className="resource-link" target="_blank" rel="noreferrer">Coursera Free Courses</a></h4>
              <p>Access free courses from top universities and companies</p>
            </div>
          </div>
          <div className="resource-card">
            <div className="resource-icon"><i className="fas fa-briefcase"></i></div>
            <div className="resource-info">
              <h4><a href="https://opportunity.linkedin.com/" className="resource-link" target="_blank" rel="noreferrer">LinkedIn Job Search</a></h4>
              <p>Create a profile and search for opportunities in your area</p>
            </div>
          </div>
          <div className="resource-card">
            <div className="resource-icon"><i className="fas fa-hands-helping"></i></div>
            <div className="resource-info">
              <h4><a href="https://www.volunteermatch.org/" className="resource-link" target="_blank" rel="noreferrer">VolunteerMatch</a></h4>
              <p>Find volunteer opportunities to gain experience</p>
            </div>
          </div>
        </div>
      </section>

      <section className="money-section fade-in">
        <h1><i className="fas fa-money-bill-wave"></i> 50+ Ways to Make Money Without a Traditional Job</h1>
        <p className="intro">Practical methods to earn income with no formal employment — choose options that match your skills and available time</p>

        <div className="tips-section">
          <h2><i className="fas fa-lightbulb"></i> Quick Start Tips</h2>
          <ul className="tips-list">
            <li><i className="fas fa-check-circle"></i><div className="tip-content"><strong>Start small</strong> — Even $5/day adds up to $150/month</div></li>
            <li><i className="fas fa-check-circle"></i><div className="tip-content"><strong>Combine methods</strong> — Do 2-3 things simultaneously for better results</div></li>
            <li><i className="fas fa-check-circle"></i><div className="tip-content"><strong>Track your time</strong> — Focus on activities with the best payoff for your effort</div></li>
            <li><i className="fas fa-check-circle"></i><div className="tip-content"><strong>Reinvest earnings</strong> — Use early income to fund better tools/equipment</div></li>
          </ul>
        </div>

        <h2><i className="fas fa-laptop"></i> Online Opportunities</h2>
        <div className="money-category">
          {moneyMethods.slice(0, 5).map((m, idx) => (
            <div className="method-card" key={idx}>
              <div className="method-header">
                <span className="method-icon"><i className={m.icon}></i></span>
                <span className="method-title">{m.title}</span>
              </div>
              <div className="method-description">{m.desc}</div>
              <div className="method-stats">
                <span className="earnings">{m.earnings}</span>
                <span className="difficulty">{m.diff}</span>
                <span className="startup">{m.startup}</span>
              </div>
            </div>
          ))}
        </div>

        <h2><i className="fas fa-mobile-alt"></i> Gig Economy & Local Work</h2>
        <div className="money-category">
          {moneyMethods.slice(5, 10).map((m, idx) => (
            <div className="method-card" key={idx}>
              <div className="method-header">
                <span className="method-icon"><i className={m.icon}></i></span>
                <span className="method-title">{m.title}</span>
              </div>
              <div className="method-description">{m.desc}</div>
              <div className="method-stats">
                <span className="earnings">{m.earnings}</span>
                <span className="difficulty">{m.diff}</span>
                <span className="startup">{m.startup}</span>
              </div>
            </div>
          ))}
        </div>

        <h2><i className="fas fa-home"></i> At-Home Opportunities</h2>
        <div className="money-category">
          {moneyMethods.slice(10).map((m, idx) => (
            <div className="method-card" key={idx}>
              <div className="method-header">
                <span className="method-icon"><i className={m.icon}></i></span>
                <span className="method-title">{m.title}</span>
              </div>
              <div className="method-description">{m.desc}</div>
              <div className="method-stats">
                <span className="earnings">{m.earnings}</span>
                <span className="difficulty">{m.diff}</span>
                <span className="startup">{m.startup}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="tips-cta">
        <h2>Ready to Start Your Journey?</h2>
        <p>Take our career assessment to discover the perfect path for you</p>
        <a href="/assessment" className="btn btn-outline" style={{ color: 'white', borderColor: 'white' }}>Take Assessment</a>
      </div>
    </div>
  )
}

export default Tips

