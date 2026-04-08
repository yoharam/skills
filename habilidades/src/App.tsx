import { Routes, Route } from 'react-router-dom'
import './App.css'

function Home() {
  return <h1>Home</h1>
}

function About() {
  return <h1>About</h1>
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default App