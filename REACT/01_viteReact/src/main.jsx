import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// JSX format we used 
function MyApp(){
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

// JS format which is parsed from JSX by bundler
// const ReactElement = {
//   type:'a',
//   props: {
//     href:"https://google.com",
//     target:'_blank'
//   },
//   children: "Click me to Visit Google"
// }

const anotherUser  = "Chai Aur Code"
const newElement = React.createElement(
  'a',
  {href:"https://google.com",target:'_blank'},
  "Click me To visit Google",
  anotherUser
)
const anotherElement = (
  <a href='Google.com'>Visit Google</a>
)
ReactDOM.createRoot(document.getElementById('root')).render(
    // <MyApp /> // this is a function 

    // ReactElement // it is not working because it is custom object require some 
    // operation to render 

    // anotherElement // works

    // newElement // it will work because we generate it by using createElement 
    <App/>

)
