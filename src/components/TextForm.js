import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    
    const [text, setText] = useState("Enter text here");
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase","success")
    }
    const handleLowClick = ()=>{
        console.log("Lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase","success")
    }
    const handleClearClick = ()=>{
        console.log("Clear was clicked");
        let newText = "";
        setText(newText)
        props.showAlert("Text Cleared","success")
    }
    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value);
    }
    const handleCopy = ()=>{
        var text = document.getElementById("textbar");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied","success")
    }
    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <input type="text" className="form-control" value={text}  onChange={handleOnChange} id="textbar"/>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lowercase</button>
                <button className="btn btn-primary" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
            </div>
            <hr></hr>
            <div className="container my-3">
                <h1>Text Summary</h1> 
                <p><b>Words :</b> {text.split(" ").length}<br/>
                    <b>Characters : </b>{text.length}<br/>
                    <b>Time to read : </b>{text.split(" ").length * 0.008} Minutes<br></br>
                    <b>Your Text : </b>{text.length>0?text:"Enter your text first"}</p>
            
            </div>
        </>
    )
}
TextForm.propTypes = {
    heading: PropTypes.string.isRequired
}
