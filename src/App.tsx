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
            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Ffunny-dogs&psig=AOvVaw2ODL5_qTthV1oR0wdV9oIh&ust=1757364734679000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNiBj_zDx48DFQAAAAAdAAAAABAE" alt="Placeholder Image" />
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
