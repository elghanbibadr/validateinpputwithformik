import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import DemoOutput from './DemoOutput';

const App = () => {
 const [addParagraph,setAddParagraph]=useState(false)

 console.log('app Running')
 const handleBtnClicked= ()=>setAddParagraph(prv => !prv)
   return(
    <div>
      <h1>hello world</h1>
      <button onClick={handleBtnClicked}>change Paragraph</button>
       <DemoOutput show={addParagraph} />
      {addParagraph && <p>this is a new Paragraph</p>}
    </div>
   )
 };

export default App;