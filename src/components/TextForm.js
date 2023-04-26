import React, { useState } from "react";

export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleUpClick = () => {
        setText(text.toUpperCase());
        props.showAlert("Convert to uppertcase!", "success");
    };

    const handleLoClick = () => {
        setText(text.toLowerCase());
        props.showAlert("Convert to lowercase!", "success");
    };

    const handleDelete = () => {
        setText("");
        props.showAlert("Succesfully Delete!", "success");
    };

    // const handleDowenloadText = (e) => {
    //     let element = document.createElement("a")
    //     element.href = "data:text/plain," + encodeURIComponent(e);
    //     element.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(e);
    //     element.target = "_blank";
    //     element.download = "textFile.csv";
    //     element.click()
    // }

    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        setText("Copied to Clipboard", "success");
    };

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        setText("Remove extra spaces", "success");
    };

    const handleChange = (e) => {
        setText(e.target.value);
    };

    return (
        <>
            <div
                className="container"
                style={{
                    color: props.mode === "dark" ? "white" : "#042743",
                }}
            >
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        id="myBox"
                        rows="8"
                        value={text}
                        onChange={handleChange}
                        style={{
                            backgroundColor: props.mode === "light" ? "white" : "grey",
                            color: props.mode === "light" ? "#042743" : "white",
                        }}
                    ></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>
                    Convert to Uppercase
                </button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>
                    Convert to Lowercase
                </button>
                <button className="btn btn-primary mx-1" onClick={handleDelete}>
                    Delete
                </button>
                {/* <button className="btn btn-primary mx-1" onClick={handleDowenloadText}>Download Text</button> */}
                <button className="btn btn-primary mx-1" onClick={handleCopy}>
                    Copy Text
                </button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
                    Remove Extra Spaces
                </button>
            </div>
            <div
                className="container my-3"
                style={{
                    color: props.mode === "dark" ? "white" : "#042743",
                }}
            >
                <h1>Your text summary</h1>
                <p>
                    {text.split(" ").length} words and {text.length} characters
                </p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>
                    {text.length > 0
                        ? text
                        : "Enter somthing in the texbox above to preview it here!"}
                </p>
            </div>
        </>
    );
}
