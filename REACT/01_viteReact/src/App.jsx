import Chai from "./Chai"
function App() {
  const UserName = "Siddhant"

  return (
    // Generally you can return 1 tag only
    // to return multiple tags we can use fragments <></>
    <>
    <h1>Hello {UserName}</h1>
    <Chai/>
    </>
    
  )
}

export default App
