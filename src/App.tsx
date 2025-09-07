import React from "react";
import "./App.css";
import {Button} from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p>
                Created by Benjamin Meredith
            </p>
            <p>
                Hello World
            </p>
            <h1>
                Header
            </h1>
            <img src="https://media.istockphoto.com/id/1407655089/photo/funny-pomeranian-dog-summer-ready-for-bath-wrapped-with-a-towel-and-sunglasses-isolated-on.jpg?s=612x612&w=0&k=20&c=wCmR5IKoVVTm5NQY9UL2hBTTkU0AvlG3gnEK8AWUWr8=" alt="Placeholder Image" />
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
            <Button onClick={() => {console.log("Hello World!")}}>
                Log Hello World
            </Button>
            <div style={{ width: "50px", height: "100px", background: "red" }} />
        </div>
    );
}

export default App;
