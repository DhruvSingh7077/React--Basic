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
    const handleClearClick = ()=>{
      let newText = '';
      setText(newText);
      props.showAlert("Text Cleared","sucess");
    }
    const handleOnChange = (event)=>{
        //consoloe.log(on change)
        setText(event.target.value);
    }
    const handleCopy = () =>{
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      document.getSelection().removeAllRanges();
      props.showAlert("copied to clipboard", "success");
    }
    const [text, setText] = useState('Enter text here');
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'? 'white':'#042743'}}>
        <h1 className='mb-4'>{props.heading}</h1>
      <div className="mb-3">
      <label htmlFor="myBox" className="form-label">Email address</label>
     <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?
     '#13466e' :'white',color:props.mode==='dark'?'white':'#042743'}}
     id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
            <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
             <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
             <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
             {/* <button className="byn btn-primary mx-1 my-1" onClick={handleExtraSpacesClick}>Remove Extra Spaces</button> */}   
    </div>
    <div className="container my-3">
      <h2>your text summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  );
}
