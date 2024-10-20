import { useState } from "react"

function App() {
  const [fontFam , setFontFam] = useState("");
  const [fontSz , setFontSz] = useState("");
  const [textColor , setTextColor] = useState("");
  const journalStyle = {
    fontFamily : fontFam,
    color :textColor, 
    fontSize : fontSz
  }
  return (
    <>
      <h1 style={{textAlign : "center"}}>Journal App</h1>

    
      <p style={journalStyle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, dolorum perferendis similique,
         harum ullam sed, maxime incidunt 
        architecto molestias hic quam. Mollitia quam quia adipisci quod asperiores libero sapiente temporibus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, dolorum perferendis similique,
         harum ullam sed, maxime incidunt 
        architecto molestias hic quam. Mollitia quam quia adipisci quod asperiores libero sapiente temporibus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, dolorum perferendis similique,
         harum ullam sed, maxime incidunt 
        architecto molestias hic quam. Mollitia quam quia adipisci quod asperiores libero sapiente temporibus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, dolorum perferendis similique,
         harum ullam sed, maxime incidunt 
        architecto molestias hic quam. Mollitia quam quia adipisci quod asperiores libero sapiente temporibus.
      </p>

      <h3>Change Font Family : </h3>
      <select value={fontFam}
       onChange={((e) => setFontFam(e.target.value))}>
        <option value="">.......</option>
        <option value="sans-serif">sans-serif</option>
        <option value="monospace">monospace</option>
        <option value="fantasy">fantasy</option>
      </select>
      <h3>Change Font Size : </h3>
      <select value={fontSz}
        onChange={((e) => setFontSz(e.target.value))}
      >
        <option value="">.......</option>
        <option value="20px">small</option>
        <option value="30px">Medium</option>
        <option value="40px">big</option>
      </select>
      <h3>Change Text Color : </h3>
      <select value={textColor}
       onChange={((e) => setTextColor(e.target.value))}>
        <option value="">.......</option>
        <option value="black">black</option>
        <option value="red">red</option>
        <option value="blue">blue</option>
        <option value="green">green</option>
      </select>
    </>
  )
}

export default App
