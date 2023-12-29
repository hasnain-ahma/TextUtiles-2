
import React,{useState} from 'react'

export default function Textform(props) {

const HandleUpClick=()=>{
    console.log('upper click');
    let newText=text.toUpperCase();
    setText(newText);
   props.showAlert('Converted Upper case Successfully','Success');
}
const HandleLowClick=()=>{
    console.log('upper click');
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert('Converted Lower case Successfully','Success');
}
const HandleClearClick=()=>{  
    let newText='';
    setText(newText);
    props.showAlert('Cleared Successfully','Success');
}
const HandleCopy=()=>{  
    var text =document.getElementById('MyText');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert('Copied Successfully','Success');
}
const HandleSetSpace=()=>{  
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert('Set Spaces Successfully','Success');
}
const HandleOnChange=(event)=>{
    console.log('On change');
    setText(event.target.value);

}
const [text, setText] = useState('');
    return (
        <>
    <div className='container' style={{color:props.mode==='light'?'white':'black' }}>
  
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.head}</label>
  <textarea class="form-control" style={{backgroundColor:props.mode==='light'?'grey':'white',color:props.mode==='light'?'white':'black' }} value={text} onChange={HandleOnChange} id="MyText" rows="10"></textarea>
</div>
<button type="button" class="btn btn-primary mx-1"  onClick={HandleUpClick}>Convert Upper Case</button>
<button type="button" class="btn btn-primary mx-1" onClick={HandleLowClick}>Convert Lower Case</button>
<button type="button" class="btn btn-primary mx-1" onClick={HandleClearClick}>Clear</button>
<button type="button" class="btn btn-primary mx-1" onClick={HandleCopy}>Copy</button>
<button type="button" class="btn btn-primary mx-1" onClick={HandleSetSpace}>Set Spaces</button>

    </div>
    <div className="container my-3" style={{color:props.mode==='light'?'white':'black' }}>
        <h1>Your text Summary</h1>
        <p>{text.split(' ').length} words and {text.length} charecters</p>
        <p>{0.008*text.split(' ').length} Minutes with Read</p>
        <h1>Preview</h1>
        <p>{text}</p>
    </div>
    </>
  )
}
