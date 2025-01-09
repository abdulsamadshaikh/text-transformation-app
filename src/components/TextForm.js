import React, {useState} from 'react'

export default function TextForm() {
    // Function to uppercase the text
    const handleUpClick = () => {
        if (text && typeof text === 'string') {
            let newUpText = text.toUpperCase();
            setText(newUpText);
        } else {
            return false;
        }
    }
    // Function to lowercase the text
    const handleLwClick = () => {
        if (text && typeof text === 'string') {
            let newLwText = text.toLowerCase();
            setText(newLwText);
        } else {
            return false;
        }
    }
    // Function to capitalize the text
    const handleCpClick = () => {
        if (text && typeof text === 'string') {
            let capitalizedText = text
                .split(' ') // Split the text into words
                .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
                .join(' '); // Join the words back into a string
            setText(capitalizedText);
        } else {
            return false;
        }
    }
    // Function to copy the text
    const handleCtClick = () => {
        if (text && text.trim() !== "") { // Check if the text is not empty
            navigator.clipboard.writeText(text)
                .then(() => {
                    console.log("Text copied to clipboard!");
                    alert("Text copied to clipboard!"); // Optionally alert the user
                })
                .catch((error) => {
                    console.error("Error copying text: ", error);
                });
        } else {
            alert("Please enter some text first!"); // Show a message if the text is empty
        }
    }
    // Function to clear the text
    const handleClearClick = () => {
        setText(""); // Set the text to an empty string
    }
    // Function to update the text in the textarea field
    const handleOnChange = (event)=> {
        setText(event.target.value);
    }
    const [text, setText] = useState();
    return (
        <>
            <textarea id="textForm" value={text} onChange={handleOnChange} name="textForm" rows="8" cols="20" placeholder="Type text here..."></textarea>
            <div className="action-btn-group">
                <button className="text-btn" onClick={handleUpClick}>UpperCase</button>
                <button className="text-btn" onClick={handleLwClick}>LowerCase</button>
                <button className="text-btn" onClick={handleCpClick}>Capitalize</button>
                <button className="text-btn" onClick={handleCtClick}>Copy Text</button>
                <button className="text-btn" onClick={handleClearClick}>Clear Text</button>
            </div>
        </>
  )
}