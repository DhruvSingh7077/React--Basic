import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick= ()=>{
        // consolo.log("uppercase was clicked" text)
     let newText = text.toUpperCase();
       setText(newText)
    }
    const handleOnChange = (event)=>{
        //consoloe.log(on change)
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter text here');
  return (
    <div>
        <h1>{props.heading}</h1>
      <div class="mb-3">
      <label for="myBox" className="form-label">Email address</label>
     <textarea className="form-control"  value={text} onChange={handleOnChange}id="myBox" rows="8"></textarea>
            </div>
            <button className="byn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
    </div>
  )
}
