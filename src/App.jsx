import { useState, useEffect } from 'react'

import './App.css'

function App() {

  const [quote, setQuote] = useState("")
  const url = "https://api.kanye.rest/"

  

  const getQuote = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setQuote(data["quote"])
}

  useEffect( () => {
      getQuote();
  }, [])



  return (
    <>
      <h1>Generátor API</h1>
      <h2>{quote}</h2>
      <button onClick={getQuote}>Získat další citát</button>
    </>
  )
}

export default App
