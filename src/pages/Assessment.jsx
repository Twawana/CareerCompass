import { useState } from 'react'
import { Link } from 'react-router-dom'
import { careerOptions } from '../data/careerData'
import './Assessment.css'

function Assessment() {
  const [answers, setAnswers] = useState({
    q1: '', q2: '', q3: '', q4: '', q5: '', qualification: '',
  })
  const [result, setResult] = useState(null)
  const [showResult, setShowResult] = useState(false)

  const questions = [
    {
      id: 'q1', label: '1. What do you enjoy more?',
      options: [
        { value: 'tech', label: 'Working with tech' },
        { value: 'people', label: 'Helping people' },
        { value: 'nature', label: 'Working outdoors' },
        { value: 'builder', label: 'Crafting/building' },
        { value: 'creative', label: 'Creating content/designing' },
      ],
    },
    {
      id: 'q2', label: '2. Choose your ideal activity:',
      options: [
        { value: 'tech', label: 'Coding/building apps' },
        { value: 'people', label: 'Leading a group' },
        { value: 'nature', label: 'Planting/inspecting fields' },
        { value: 'builder', label: 'Building/sculpting' },
        { value: 'creative', label: 'Designing visuals' },
      ],
    },
    {
      id: 'q3', label: '3. Which subject do you prefer?',
      options: [
        { value: 'tech', label: 'Math/computers' },
        { value: 'people', label: 'Languages/business' },
        { value: 'nature', label: 'Biology/chemistry/agriculture' },
        { value: 'builder', label: 'Physics/math' },
        { value: 'creative', label: 'Arts/media studies' },
      ],
    },
    {
      id: 'q4', label: '4. Pick a passion area:',
      options: [
        { value: 'creative', label: 'Creating content/designing' },
        { value: 'builder', label: 'Building/fixing things' },
        { value: 'tech', label: 'Tech-related work' },
        { value: 'people', label: 'Helping/influencing people' },
        { value: 'nature', label: 'Working with nature' },
      ],
    },
    {
      id: 'q5', label: '5. How do you prefer to work?',
      options: [
        { value: 'independent', label: 'Independently' },
        { value: 'team', label: 'In a small team' },
        { value: 'team', label: 'In a big team' },
        { value: 'flexible', label: 'Flexible/remote' },
      ],
    },
  ]

  const handleRadioChange = (questionId, value) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }))
  }

  const handleQualificationChange = (e) => {
    setAnswers((prev) => ({ ...prev, qualification: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { q1, q2, q3, q4, q5, qualification } = answers
    if (!q1 || !q2 || !q3 || !q4 || !q5 || !qualification) {
      alert('Please answer all questions before submitting')
      return
    }

    const counts = {
      tech: [q1, q2, q3, q4].filter((a) => a === 'tech').length,
      people: [q1, q2, q3, q4].filter((a) => a === 'people').length,
      nature: [q1, q2, q3, q4].filter((a) => a === 'nature').length,
      builder: [q1, q2, q3, q4].filter((a) => a === 'builder').length,
      creative: [q1, q2, q3, q4].filter((a) => a === 'creative').length,
    }

    const highest = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b)
    const workStyles = {
      independent: "You prefer working independently, which suggests you'd thrive in self-directed roles or remote positions.",
      team: "You enjoy working in a team, indicating you'd do well in collaborative environments.",
      flexible: "You like flexible or remote working environments, which many modern careers now offer.",
    }

    const careersList = careerOptions[highest]?.[qualification] || careerOptions[highest]?.none || []
    const qualLabels = {
      none: 'None/still in school', grade12: 'Grade 12', certificate: 'Certificate',
      diploma: 'Diploma', degree: "Bachelor's degree", masters: "Master's degree", phd: 'PhD',
    }

    setResult({
      field: highest.toUpperCase(),
      workStyle: workStyles[q5] || '',
      qualification: qualLabels[qualification] || qualification,
      careersList,
    })
    setShowResult(true)
  }

  const progressPercent = () => (Object.values(answers).filter((v) => v !== '').length / 6) * 100

  const handleRetake = () => {
    setAnswers({ q1: '', q2: '', q3: '', q4: '', q5: '', qualification: '' })
    setShowResult(false)
    setResult(null)
  }

  if (showResult && result) {
    return (
      <div className="assessment-wrapper">
        <div className="quiz-container results-container">
          <h2><i className="fas fa-chart-line"></i> Your Career Matches</h2>
          <div className="career-output">
            <p>Your strongest fit is in the <strong>{result.field}</strong> field based on your preferences.</p>
            {result.workStyle && <p className="work-style">{result.workStyle}</p>}
            <p>With your current qualification level ({result.qualification}), here are some career options to consider:</p>
            <ul className="career-list-result">
              {result.careersList.map((career, idx) => (
                <li key={idx}>{career}</li>
              ))}
            </ul>
            <p className="work-style">Remember that these are just suggestions. Many successful professionals combine skills from multiple areas!</p>
          </div>
          <div className="btn-group">
            <Link to="/tips" className="action-link"><i className="fas fa-lightbulb"></i> Pro Tips</Link>
            <Link to="/" className="action-link"><i className="fas fa-home"></i> Back Home</Link>
            <Link to="/careers" className="action-link"><i className="fas fa-book"></i> Learn More</Link>
          </div>
          <button onClick={handleRetake} className="action-link retake-btn"><i className="fas fa-redo"></i> Retake Quiz</button>
        </div>
      </div>
    )
  }

  return (
    <div className="assessment-wrapper">
      <div className="quiz-container">
        <h1><i className="fas fa-rocket"></i> Career Compass</h1>
        <p className="subtitle">Discover your ideal career path with our intelligent assessment</p>

        <div className="progress-container">
          <div className="progress-bar" style={{ width: `${progressPercent()}%` }}></div>
        </div>

        <form onSubmit={handleSubmit}>
          {questions.map((q) => (
            <div className="question" key={q.id}>
              <label>{q.label}</label>
              <div className="radio-group">
                {q.options.map((opt, idx) => (
                  <label className="radio-option" key={idx}>
                    <input
                      type="radio"
                      name={q.id}
                      value={opt.value}
                      checked={answers[q.id] === opt.value}
                      onChange={() => handleRadioChange(q.id, opt.value)}
                    />
                    {opt.label}
                  </label>
                ))}
              </div>
            </div>
          ))}

          <div className="question">
            <label>6. What qualifications do you currently have?</label>
            <select value={answers.qualification} onChange={handleQualificationChange}>
              <option value="">-- Select one --</option>
              <option value="none">None/still in school</option>
              <option value="grade12">Grade 12</option>
              <option value="certificate">Certificate</option>
              <option value="diploma">Diploma</option>
              <option value="degree">Bachelor's degree</option>
              <option value="masters">Master's degree</option>
              <option value="phd">PhD</option>
            </select>
          </div>

          <button type="submit"><i className="fas fa-search"></i> Find My Career Path</button>

          <Link to="/" className="action-link"><i className="fas fa-arrow-left"></i> Back home</Link>
        </form>
      </div>
    </div>
  )
}

export default Assessment

