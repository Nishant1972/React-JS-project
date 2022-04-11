import React, {useState} from 'react'
const _ = require("lodash");

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
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        msg.pitch = 1.5;
        window.speechSynthesis.speak(msg);
    }

    const CamelCase = () => {
        setText(_.camelCase(text));
    }
    
    const RemoveSpace = () => {
        setText(text.replace(/\s+/g, ' ').trim());
    }
    // const Italic = () => {
    //     let newtext = <i>{text}</i>;
    //     alert(newtext);
    // }
      
    var wordlen = (x) => {
        x = 0;
        for(let i = 0; i < text.length-1; ++i) {
            if(text[i] !== ' ') {
                while(i < text.length && text[i] !== ' ') {
                    ++i;
                    continue;
                }
                ++x;
            }
        }   
        return x;
    }
    let x;
    const [text, setText] = useState('');
return (
    <>
    <div>
        <h1>{props.heading}</h1>
        <div id = "demo" className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="Box" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpCase}>Upper Case</button>
        <button className="btn btn-primary mx-2" onClick={handleLCase}>Lower Case</button>
        <button className="btn btn-primary mx-2" onClick={CamelCase}>Camel Case</button>
        <button className="btn btn-primary mx-2" onClick={RemoveSpace}>Trim spaces</button>
        <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
    </div>
    <div className="container my-4">
        <h2>Text Summary</h2>
        <p>{wordlen(x)} Words and {text.length} Characters</p>
        <p>You can read text in around {0.008 * wordlen(x)} minutes.</p>
        <h4>Preview</h4>
        <p>{text}</p>
    </div>
    </>
  )
}
