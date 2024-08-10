import './App.css'
import Heading from "./components/Heading"
import Button from './components/Button'
import { useEffect, useState } from 'react'
import BooksDisplay from './components/BooksDisplay'

function App() {

  // const [showButtons, setShowButtons] = useState(true)

  // function toggleShowButtons () {
  //   setShowButtons(!showButtons)
  // }


  // function changeText(newText) {
  //   setText(newText)
  // }





  return (
    <>
      <BooksDisplay />

      {/* <button onClick={() => {changeText("New New Text")}}>Change Text</button> */}
      {/* {
          showButtons ? <>
          <Button defaultStart={0} />
          <Button defaultStart={50} />
          <Button defaultStart={60} /> 
          </> : <p>No buttons to show</p>
        } */}
    </>
  )
}

export default App
