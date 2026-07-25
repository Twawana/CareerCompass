import { useState, useRef, useEffect } from 'react'
import './Jarvis.css'

function Jarvis() {
  const [messages, setMessages] = useState([
    {
      sender: 'ai',
      text: "Hello! I'm JARVIS, your career assistant. I can help with career advice, University questions, and school subjects. What would you like to know?",
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const chatLogRef = useRef(null)

  const apiKey = "AIzaSyC-6gVr7xj6d3-W_MhAA9C7OPeExxxHnPA"
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`

  useEffect(() => {
    if (chatLogRef.current) {
      chatLogRef.current.scrollTop = chatLogRef.current.scrollHeight
    }
  }, [messages, loading])

  const addMessage = (sender, text) => {
    setMessages((prev) => [...prev, { sender, text }])
  }

  const handleSend = async () => {
    const userMessage = input.trim()
    if (!userMessage) return

    addMessage('user', userMessage)
    setInput('')
    setLoading(true)

    const prompt = `You are JARVIS created by T, an AI assistant specializing in careers, education, and school-related topics.
Analyze the user's message to understand their tone and 'vibe' (e.g., formal, informal, playful, serious, direct). Your response must match this tone precisely.
Keep your responses brief, to the point, and actually helpful, no more than 2-3 sentences.
Respond to the following user query: ${userMessage}`

    const payload = {
      contents: [{
        parts: [{ text: prompt }]
      }]
    }

    try {
      let response
      let retries = 0
      const maxRetries = 5
      const delay = 1000

      while (retries < maxRetries) {
        try {
          response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          })

          if (response.ok) {
            break
          } else if (response.status === 429) {
            const waitTime = delay * Math.pow(2, retries)
            await new Promise((resolve) => setTimeout(resolve, waitTime))
            retries++
          } else {
            throw new Error(`API error: ${response.statusText}`)
          }
        } catch (error) {
          if (retries === maxRetries - 1) throw error
          const waitTime = delay * Math.pow(2, retries)
          await new Promise((resolve) => setTimeout(resolve, waitTime))
          retries++
        }
      }

      const result = await response.json()
      const aiResponse = result.candidates[0].content.parts[0].text
      addMessage('ai', aiResponse)
    } catch (error) {
      console.error('Failed to fetch from Gemini API:', error)
      addMessage('ai', "Sorry, I'm having trouble connecting right now. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend()
    }
  }

  return (
    <div className="jarvis-container">
      <div className="chatbox">
        <h2>JARVIS Career Assistant</h2>
        <div className="chat-log" ref={chatLogRef}>
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`message ${msg.sender === 'user' ? 'user-message' : 'ai-message'}`}
            >
              {msg.text}
            </div>
          ))}
          {loading && (
            <div className="message ai-message loading-dots">
              <span></span><span></span><span></span>
            </div>
          )}
        </div>
        <div className="input-container">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask me about careers, colleges, or school subjects..."
            disabled={loading}
          />
          <button onClick={handleSend} disabled={loading}>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Jarvis
