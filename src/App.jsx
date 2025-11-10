import './App.css'

function App() {

  const url = "https://api.kanye.rest/"

async function getQuote  () {
  const response = await fetch(url)
  const data = await response.json()
}

  
  getQuote();

  return (
    <>
      <h1></h1>
    </>
  )
}

export default App
