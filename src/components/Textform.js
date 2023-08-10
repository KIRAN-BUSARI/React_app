import React, { useState } from 'react'

export default function TextForm(props) {

    const handleOnClickUpper = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleOnClickLower = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearText = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const handleCopy = () => {
        var text = document.getElementById("my-box");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied Text!", "success");
    }

    const [text, setText] = useState("");

    return (
        <>
            <div className="mb-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <textarea
                    style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
                    onChange={handleOnChange}
                    value={text}
                    className="form-control"
                    id="my-box"
                    rows={3}
                />
                <button className="btn btn-primary my-3 mx-2" onClick={handleOnClickUpper} >Convert to UPPERCASE</button>
                <button className="btn btn-primary my-3 mx-2" onClick={handleOnClickLower} >CONVERT TO lowercase</button>
                <button className="btn btn-primary my-3 mx-2" onClick={handleClearText} >Clear Text</button>
                <button className="btn btn-primary my-3 mx-2" onClick={handleCopy} >Copy Text</button>
                <div>
                    <p>{"Number of words : " + text.split(" ").filter((element) => {return element != 0 }).length}</p>
                    <p>{"Number of characters : " + text.length}</p>
                </div>
            </div>
        </>
    )
}