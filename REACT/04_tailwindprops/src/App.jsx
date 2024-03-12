import Card from './components/card'
import './App.css'

function App() {
  let myobj = {
    username:"hitesh",
    age: 31
  }
  return (
    <>
      <h1 className='bg-red-500 text-black p-4 rounded-xl mb-5'>Tailwind Test</h1>
      <Card username = "Hitesh" btntext = "Click me "/>
      <Card username = "Siddhant" btntext = "Visit me"/>
    </>
  )
}

export default App
