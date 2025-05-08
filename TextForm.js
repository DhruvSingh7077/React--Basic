import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // consolo.log("uppercase was clicked" text)
     let newText = text.toUpperCase();
       setText(newText);
       props.showAlert("Converted to upperCase","sucess");
    }
    const handleLoClick = ()=>{
        // consolo.log("uppercase was clicked" text)
     let newText = text.toLowerCase();
       setText(newText);
       props.showAlert("Converted to lowerCase","sucess");
    }
    const handleOnChange = (event)=>{
        //consoloe.log(on change)
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here');
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'? 'white':'#042743'}}>
        <h1>{props.heading}</h1>
      <div class="mb-3">
      <label htmlFor="myBox" className="form-label">Email address</label>
     <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?
     '#13466e' :'white',color:props.mode==='dark'?'white':'#042743'}}
     id="myBox" rows="8"></textarea>
            </div>
            <button className="byn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="byn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
            {/* <button className="byn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button className="byn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button className="byn btn-primary mx-1 my-1" onClick={handleExtraSpacesClick}>Remove Extra Spaces</button> */}
    </div>
    <div className="container my-3">
      <h2>your text summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}
