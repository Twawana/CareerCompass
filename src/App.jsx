import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Landing from './pages/Landing'
import Assessment from './pages/Assessment'
import Tips from './pages/Tips'
import Careers from './pages/Careers'
import About from './pages/About'
import CVBuilder from './pages/CVBuilder'
import Policy from './pages/Policy'
import Jarvis from './pages/Jarvis'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/about" element={<About />} />
        <Route path="/cv" element={<CVBuilder />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/jarvis" element={<Jarvis />} />
      </Routes>
    </Layout>
  )
}

export default App

