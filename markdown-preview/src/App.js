import './App.css';
import { useState } from "react";

function App() {
    const [ text, setText ] = useState("");
    
    return (
        <div className="App">
            <textarea 
                id="editor" 
                onChange = { ( event ) => { 
                    setText(event.tatget.value) 
                }}
                value = { text }
              ></textarea>
            <div id="preview"></div>
        </div>
    );
}

export default App;
