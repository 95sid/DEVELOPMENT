import { useState } from "react"


function App() {
  
  const [color,setColor] = useState("olive")
  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg font-bold " style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>RED</button>
        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg font-bold" style={{backgroundColor:"Green"}} onClick={()=>setColor("Green")}>GREEN</button>
        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg font-bold" style={{backgroundColor:"orange"}} onClick={()=>setColor("orange")}>ORANGE</button>
        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg font-bold" style={{backgroundColor:"purple"}} onClick={()=>setColor("purple")}>PURPLE</button>
      </div>
    </div>
     
    </div>
  )
}
export default App
