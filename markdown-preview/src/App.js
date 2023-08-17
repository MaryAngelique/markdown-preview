import './App.css';
import { marked } from "marked";
import { useState } from "react";

function App() {
    const [ text, setText ] = useState("");
    
    return (
        <div className="App">
            <textarea 
                id="editor" 
                onChange = { ( event ) => { 
                    setText(event.target.value) 
                }}
                value = { text }
              ></textarea>
            <div id="preview">{ text }</div>
        </div>
    );
}

export default App;
