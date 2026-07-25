import { useState } from 'react'
import { categoryInfo, careerDescriptions, qualificationLabels } from '../data/careerData'
import './Careers.css'

function Careers() {
  const [activeCategory, setActiveCategory] = useState('tech')

  const categories = ['tech', 'people', 'nature', 'creative', 'builder']

  return (
    <div className="container main-content">
      <div className="nav-tabs">
        {categories.map((cat) => (
          <div
            key={cat}
            className={`nav-tab ${cat}-tab ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {categoryInfo[cat].name}
          </div>
        ))}
      </div>

      {categories.map((cat) => (
        <div
          key={cat}
          id={cat}
          className={`career-category ${cat}-category`}
          style={{ display: activeCategory === cat ? 'block' : 'none' }}
        >
          <h2>
            <i className={`fas ${categoryInfo[cat].icon}`}></i> {categoryInfo[cat].name}
          </h2>
          <p className="category-desc">{categoryInfo[cat].description}</p>

          {Object.entries(qualificationLabels).map(([qualKey, qualLabel]) => {
            const careers = careerDescriptions[cat]?.[qualKey]
            if (!careers || careers.length === 0) return null

            return (
              <div className="qualification-level" key={qualKey}>
                <h3>{qualLabel}</h3>
                <div className="career-list">
                  {careers.map((career, idx) => (
                    <div className="career-card" key={idx}>
                      <div className="career-name">{career.name}</div>
                      <div className="career-description">{career.desc}</div>
                      <span className={`qualification-tag ${cat}-tag`}>{qualLabel}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}

export default Careers

