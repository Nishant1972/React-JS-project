import React, {useState} from 'react'

export default function TextForm(props) {
    const handleOnChange = (event) => {
        //console.log("On change");
        setText(event.target.value);
    }
    const handleUpCase = () => {
        //console.log("Upper Case Done");
        setText(text.toUpperCase());
    }

    const handleLCase = () => {
        //console.log("Lower Case Done");
        setText(text.toLowerCase());
    }

    const [text, setText] = useState('');
return (
    <>
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="Box" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpCase}>Upper Case</button>
        <button className="btn btn-primary mx-2" onClick={handleLCase}>Lower Case</button>
    </div>
    <div className="container my-4">
        <h2>Text Summary</h2>
        <p>{text.split(" ").length} Words and {text.length} Characters</p>
        <p>You can read text in around {0.008 * text.split(" ").length} minutes.</p>
        <h4>Preview</h4>
        <p>{text}</p>
    </div>
    </>
  )
}
