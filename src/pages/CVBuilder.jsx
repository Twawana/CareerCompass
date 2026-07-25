import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './CVBuilder.css'

function CVBuilder() {
  const [personal, setPersonal] = useState({
    fullName: '',
    jobTitle: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    summary: '',
    linkedin: '',
    github: '',
    portfolio: '',
    website: '',
  })

  const [experiences, setExperiences] = useState([
    { position: '', company: '', location: '', start: '', end: '', description: '' },
  ])

  const [educations, setEducations] = useState([
    { degree: '', institution: '', location: '', start: '', end: '', description: '' },
  ])

  const [certifications, setCertifications] = useState([
    { name: '', issuer: '', date: '' },
  ])

  const [languages, setLanguages] = useState('')
  const [skills, setSkills] = useState('')
  const [template, setTemplate] = useState('modern')
  const previewRef = useRef(null)

  const handlePersonalChange = (field, value) => {
    setPersonal((prev) => ({ ...prev, [field]: value }))
  }

  // Experience handlers
  const addExperience = () => {
    setExperiences((prev) => [...prev, { position: '', company: '', location: '', start: '', end: '', description: '' }])
  }
  const removeExperience = (index) => {
    setExperiences((prev) => prev.filter((_, i) => i !== index))
  }
  const handleExperienceChange = (index, field, value) => {
    setExperiences((prev) => {
      const updated = [...prev]
      updated[index] = { ...updated[index], [field]: value }
      return updated
    })
  }

  // Education handlers
  const addEducation = () => {
    setEducations((prev) => [...prev, { degree: '', institution: '', location: '', start: '', end: '', description: '' }])
  }
  const removeEducation = (index) => {
    setEducations((prev) => prev.filter((_, i) => i !== index))
  }
  const handleEducationChange = (index, field, value) => {
    setEducations((prev) => {
      const updated = [...prev]
      updated[index] = { ...updated[index], [field]: value }
      return updated
    })
  }

  // Certification handlers
  const addCertification = () => {
    setCertifications((prev) => [...prev, { name: '', issuer: '', date: '' }])
  }
  const removeCertification = (index) => {
    setCertifications((prev) => prev.filter((_, i) => i !== index))
  }
  const handleCertificationChange = (index, field, value) => {
    setCertifications((prev) => {
      const updated = [...prev]
      updated[index] = { ...updated[index], [field]: value }
      return updated
    })
  }

  const resetForm = () => {
    if (window.confirm('Are you sure you want to reset the form? All data will be lost.')) {
      setPersonal({
        fullName: '', jobTitle: '', email: '', phone: '', address: '', city: '', country: '',
        summary: '', linkedin: '', github: '', portfolio: '', website: '',
      })
      setExperiences([{ position: '', company: '', location: '', start: '', end: '', description: '' }])
      setEducations([{ degree: '', institution: '', location: '', start: '', end: '', description: '' }])
      setCertifications([{ name: '', issuer: '', date: '' }])
      setLanguages('')
      setSkills('')
    }
  }

  const printCV = () => {
    window.print()
  }

  const skillArray = skills.split(',').map((s) => s.trim()).filter((s) => s)
  const languageArray = languages.split(',').map((l) => l.trim()).filter((l) => l)
  const hasCertifications = certifications.some((c) => c.name)

  return (
    <div className="cv-page-container">
      <div className="cv-controls">
        <div className="template-selector">
          <label>Template Style:</label>
          <div className="template-options">
            <button 
              className={`template-btn ${template === 'modern' ? 'active' : ''}`}
              onClick={() => setTemplate('modern')}
            >
              <i className="fas fa-file-alt"></i> Modern
            </button>
            <button 
              className={`template-btn ${template === 'classic' ? 'active' : ''}`}
              onClick={() => setTemplate('classic')}
            >
              <i className="fas fa-scroll"></i> Classic
            </button>
            <button 
              className={`template-btn ${template === 'minimal' ? 'active' : ''}`}
              onClick={() => setTemplate('minimal')}
            >
              <i className="fas fa-minus-circle"></i> Minimal
            </button>
          </div>
        </div>
      </div>

      <div className="cv-generator">
        <div className="form-section">
          <div className="form-header">
            <i className="fas fa-user-circle"></i>
            <h2>Personal Information</h2>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label><i className="fas fa-user"></i> Full Name *</label>
              <input type="text" value={personal.fullName} onChange={(e) => handlePersonalChange('fullName', e.target.value)} placeholder="John Doe" />
            </div>
            <div className="form-group">
              <label><i className="fas fa-briefcase"></i> Professional Title</label>
              <input type="text" value={personal.jobTitle} onChange={(e) => handlePersonalChange('jobTitle', e.target.value)} placeholder="Software Engineer" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label><i className="fas fa-envelope"></i> Email</label>
              <input type="email" value={personal.email} onChange={(e) => handlePersonalChange('email', e.target.value)} placeholder="john@example.com" />
            </div>
            <div className="form-group">
              <label><i className="fas fa-phone"></i> Phone</label>
              <input type="tel" value={personal.phone} onChange={(e) => handlePersonalChange('phone', e.target.value)} placeholder="+264 81 234 5678" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label><i className="fas fa-map-marker-alt"></i> City</label>
              <input type="text" value={personal.city} onChange={(e) => handlePersonalChange('city', e.target.value)} placeholder="Windhoek" />
            </div>
            <div className="form-group">
              <label><i className="fas fa-globe"></i> Country</label>
              <input type="text" value={personal.country} onChange={(e) => handlePersonalChange('country', e.target.value)} placeholder="Namibia" />
            </div>
          </div>
          <div className="form-group">
            <label><i className="fas fa-address-card"></i> Address</label>
            <input type="text" value={personal.address} onChange={(e) => handlePersonalChange('address', e.target.value)} placeholder="123 Main Street" />
          </div>
          <div className="form-group">
            <label><i className="fas fa-quote-right"></i> Professional Summary</label>
            <textarea value={personal.summary} onChange={(e) => handlePersonalChange('summary', e.target.value)} placeholder="Describe your professional background, key achievements, and career goals..." rows="4"></textarea>
          </div>

          <div className="form-header">
            <i className="fas fa-link"></i>
            <h2>Online Profiles</h2>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label><i className="fab fa-linkedin"></i> LinkedIn</label>
              <input type="url" value={personal.linkedin} onChange={(e) => handlePersonalChange('linkedin', e.target.value)} placeholder="https://linkedin.com/in/yourprofile" />
            </div>
            <div className="form-group">
              <label><i className="fab fa-github"></i> GitHub</label>
              <input type="url" value={personal.github} onChange={(e) => handlePersonalChange('github', e.target.value)} placeholder="https://github.com/yourusername" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label><i className="fas fa-globe"></i> Portfolio/Website</label>
              <input type="url" value={personal.portfolio} onChange={(e) => handlePersonalChange('portfolio', e.target.value)} placeholder="https://yourportfolio.com" />
            </div>
            <div className="form-group">
              <label><i className="fas fa-external-link-alt"></i> Other Website</label>
              <input type="url" value={personal.website} onChange={(e) => handlePersonalChange('website', e.target.value)} placeholder="https://example.com" />
            </div>
          </div>

          <div className="form-header">
            <i className="fas fa-briefcase"></i>
            <h2>Work Experience</h2>
          </div>
          {experiences.map((exp, idx) => (
            <div className="section-item" key={idx}>
              <div className="section-item-header">
                <span className="item-number">#{idx + 1}</span>
                {experiences.length > 1 && (
                  <button className="btn-remove-sm" onClick={() => removeExperience(idx)} title="Remove">
                    <i className="fas fa-times"></i>
                  </button>
                )}
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Position</label>
                  <input type="text" value={exp.position} onChange={(e) => handleExperienceChange(idx, 'position', e.target.value)} placeholder="Senior Developer" />
                </div>
                <div className="form-group">
                  <label>Company</label>
                  <input type="text" value={exp.company} onChange={(e) => handleExperienceChange(idx, 'company', e.target.value)} placeholder="Company Name" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Location</label>
                  <input type="text" value={exp.location} onChange={(e) => handleExperienceChange(idx, 'location', e.target.value)} placeholder="Windhoek, Namibia" />
                </div>
                <div className="form-group">
                  <label>Start Date</label>
                  <input type="text" value={exp.start} onChange={(e) => handleExperienceChange(idx, 'start', e.target.value)} placeholder="Jun 2018" />
                </div>
                <div className="form-group">
                  <label>End Date</label>
                  <input type="text" value={exp.end} onChange={(e) => handleExperienceChange(idx, 'end', e.target.value)} placeholder="Present" />
                </div>
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea value={exp.description} onChange={(e) => handleExperienceChange(idx, 'description', e.target.value)} placeholder="Describe your responsibilities and key achievements..." rows="3"></textarea>
              </div>
            </div>
          ))}
          <button className="btn-add" onClick={addExperience}><i className="fas fa-plus"></i> Add Position</button>

          <div className="form-header">
            <i className="fas fa-graduation-cap"></i>
            <h2>Education</h2>
          </div>
          {educations.map((edu, idx) => (
            <div className="section-item" key={idx}>
              <div className="section-item-header">
                <span className="item-number">#{idx + 1}</span>
                {educations.length > 1 && (
                  <button className="btn-remove-sm" onClick={() => removeEducation(idx)} title="Remove">
                    <i className="fas fa-times"></i>
                  </button>
                )}
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Degree</label>
                  <input type="text" value={edu.degree} onChange={(e) => handleEducationChange(idx, 'degree', e.target.value)} placeholder="Bachelor of Science in Computer Science" />
                </div>
                <div className="form-group">
                  <label>Institution</label>
                  <input type="text" value={edu.institution} onChange={(e) => handleEducationChange(idx, 'institution', e.target.value)} placeholder="University of Namibia" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Location</label>
                  <input type="text" value={edu.location} onChange={(e) => handleEducationChange(idx, 'location', e.target.value)} placeholder="Windhoek" />
                </div>
                <div className="form-group">
                  <label>Start Date</label>
                  <input type="text" value={edu.start} onChange={(e) => handleEducationChange(idx, 'start', e.target.value)} placeholder="2014" />
                </div>
                <div className="form-group">
                  <label>End Date</label>
                  <input type="text" value={edu.end} onChange={(e) => handleEducationChange(idx, 'end', e.target.value)} placeholder="2018" />
                </div>
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea value={edu.description} onChange={(e) => handleEducationChange(idx, 'description', e.target.value)} placeholder="Relevant coursework, honors, GPA, activities..." rows="2"></textarea>
              </div>
            </div>
          ))}
          <button className="btn-add" onClick={addEducation}><i className="fas fa-plus"></i> Add Education</button>

          <div className="form-header">
            <i className="fas fa-certificate"></i>
            <h2>Certifications</h2>
          </div>
          {certifications.map((cert, idx) => (
            <div className="section-item" key={idx}>
              <div className="section-item-header">
                <span className="item-number">#{idx + 1}</span>
                {certifications.length > 1 && (
                  <button className="btn-remove-sm" onClick={() => removeCertification(idx)} title="Remove">
                    <i className="fas fa-times"></i>
                  </button>
                )}
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Certification Name</label>
                  <input type="text" value={cert.name} onChange={(e) => handleCertificationChange(idx, 'name', e.target.value)} placeholder="AWS Certified Solutions Architect" />
                </div>
                <div className="form-group">
                  <label>Issuer</label>
                  <input type="text" value={cert.issuer} onChange={(e) => handleCertificationChange(idx, 'issuer', e.target.value)} placeholder="Amazon Web Services" />
                </div>
                <div className="form-group">
                  <label>Date</label>
                  <input type="text" value={cert.date} onChange={(e) => handleCertificationChange(idx, 'date', e.target.value)} placeholder="2023" />
                </div>
              </div>
            </div>
          ))}
          <button className="btn-add" onClick={addCertification}><i className="fas fa-plus"></i> Add Certification</button>

          <div className="form-header">
            <i className="fas fa-cogs"></i>
            <h2>Skills & Languages</h2>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label><i className="fas fa-code"></i> Skills</label>
              <textarea value={skills} onChange={(e) => setSkills(e.target.value)} placeholder="JavaScript, React, Node.js, Project Management, Python, Data Analysis, UI/UX Design" rows="3"></textarea>
              <span className="hint">Separate skills with commas</span>
            </div>
            <div className="form-group">
              <label><i className="fas fa-language"></i> Languages</label>
              <textarea value={languages} onChange={(e) => setLanguages(e.target.value)} placeholder="English (Native), Afrikaans (Fluent), Oshiwambo (Native)" rows="3"></textarea>
              <span className="hint">Separate languages with commas</span>
            </div>
          </div>
        </div>

        <div className="preview-section">
          <div className="preview-header">
            <i className="fas fa-eye"></i>
            <h2>CV Preview</h2>
            <span className="badge">A4 Ready</span>
          </div>
          <div className={`cv-preview template-${template}`} ref={previewRef} id="cv-preview">
            {/* Name & Title */}
            <div className="cv-header">
              <div className="cv-name">{personal.fullName || 'YOUR NAME'}</div>
              <div className="cv-title">{personal.jobTitle || 'PROFESSIONAL TITLE'}</div>
            </div>

            {/* Contact Bar */}
            <div className="cv-contact-bar">
              {personal.email && <span><i className="fas fa-envelope"></i> {personal.email}</span>}
              {personal.phone && <span><i className="fas fa-phone"></i> {personal.phone}</span>}
              {(personal.city || personal.country) && <span><i className="fas fa-map-marker-alt"></i> {[personal.city, personal.country].filter(Boolean).join(', ')}</span>}
              {personal.linkedin && <span><i className="fab fa-linkedin"></i> {personal.linkedin.replace(/^https?:\/\//, '')}</span>}
              {personal.github && <span><i className="fab fa-github"></i> {personal.github.replace(/^https?:\/\//, '')}</span>}
              {personal.portfolio && <span><i className="fas fa-globe"></i> {personal.portfolio.replace(/^https?:\/\//, '')}</span>}
            </div>

            {/* Summary */}
            {personal.summary && (
              <div className="cv-section">
                <div className="cv-section-title">
                  <i className="fas fa-quote-right"></i> Professional Summary
                </div>
                <p className="cv-summary-text">{personal.summary}</p>
              </div>
            )}

            {/* Work Experience */}
            {experiences.some((e) => e.position || e.company) && (
              <div className="cv-section">
                <div className="cv-section-title">
                  <i className="fas fa-briefcase"></i> Work Experience
                </div>
                <div className="cv-timeline">
                  {experiences.map((exp, idx) => (
                    (exp.position || exp.company) && (
                      <div className="cv-timeline-item" key={idx}>
                        <div className="cv-timeline-dot"></div>
                        <div className="cv-timeline-content">
                          <div className="cv-item-header">
                            <div>
                              <span className="cv-item-title">{exp.position}</span>
                              {exp.company && <span className="cv-item-subtitle"> at {exp.company}</span>}
                            </div>
                            <span className="cv-item-date">
                              {exp.start}{exp.start && exp.end ? ' — ' : ''}{exp.end}
                            </span>
                          </div>
                          {exp.location && <div className="cv-item-location"><i className="fas fa-map-marker-alt"></i> {exp.location}</div>}
                          {exp.description && <p className="cv-item-desc">{exp.description}</p>}
                        </div>
                      </div>
                    )
                  ))}
                </div>
              </div>
            )}

            {/* Education */}
            {educations.some((e) => e.degree || e.institution) && (
              <div className="cv-section">
                <div className="cv-section-title">
                  <i className="fas fa-graduation-cap"></i> Education
                </div>
                <div className="cv-timeline">
                  {educations.map((edu, idx) => (
                    (edu.degree || edu.institution) && (
                      <div className="cv-timeline-item" key={idx}>
                        <div className="cv-timeline-dot"></div>
                        <div className="cv-timeline-content">
                          <div className="cv-item-header">
                            <div>
                              <span className="cv-item-title">{edu.degree}</span>
                              {edu.institution && <span className="cv-item-subtitle"> — {edu.institution}</span>}
                            </div>
                            <span className="cv-item-date">
                              {edu.start}{edu.start && edu.end ? ' — ' : ''}{edu.end}
                            </span>
                          </div>
                          {edu.location && <div className="cv-item-location"><i className="fas fa-map-marker-alt"></i> {edu.location}</div>}
                          {edu.description && <p className="cv-item-desc">{edu.description}</p>}
                        </div>
                      </div>
                    )
                  ))}
                </div>
              </div>
            )}

            {/* Certifications */}
            {hasCertifications && (
              <div className="cv-section">
                <div className="cv-section-title">
                  <i className="fas fa-certificate"></i> Certifications
                </div>
                <div className="cv-cert-grid">
                  {certifications.map((cert, idx) => (
                    cert.name && (
                      <div className="cv-cert-item" key={idx}>
                        <div className="cv-cert-icon"><i className="fas fa-award"></i></div>
                        <div>
                          <span className="cv-cert-name">{cert.name}</span>
                          {cert.issuer && <span className="cv-cert-issuer"> — {cert.issuer}</span>}
                          {cert.date && <span className="cv-cert-date"> ({cert.date})</span>}
                        </div>
                      </div>
                    )
                  ))}
                </div>
              </div>
            )}

            {/* Skills */}
            {skillArray.length > 0 && (
              <div className="cv-section">
                <div className="cv-section-title">
                  <i className="fas fa-cogs"></i> Skills
                </div>
                <div className="cv-skills">
                  {skillArray.map((skill, idx) => (
                    <div className="cv-skill" key={idx}>{skill}</div>
                  ))}
                </div>
              </div>
            )}

            {/* Languages */}
            {languageArray.length > 0 && (
              <div className="cv-section">
                <div className="cv-section-title">
                  <i className="fas fa-language"></i> Languages
                </div>
                <div className="cv-languages">
                  {languageArray.map((lang, idx) => (
                    <div className="cv-language-item" key={idx}>
                      <i className="fas fa-check-circle"></i> {lang}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="actions">
            <button className="btn download-btn" onClick={printCV}><i className="fas fa-file-pdf"></i> Download PDF</button>
            <button className="btn print-btn" onClick={printCV}><i className="fas fa-print"></i> Print</button>
            <button className="btn reset-btn" onClick={resetForm}><i className="fas fa-undo"></i> Reset</button>
            <Link to="/" className="btn home-btn"><i className="fas fa-home"></i> Home</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CVBuilder

