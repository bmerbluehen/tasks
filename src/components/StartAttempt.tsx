import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [started, setStarted] = useState<boolean>(false);
    function start(): void {
        if (attempts > 0) {
            setAttempts(attempts - 1);
            setStarted(true);
        }
    }
    function stop(): void {
        setStarted(false);
    }
    function mulligan(): void {
        setAttempts(attempts + 1);
    }
    
    return <div>
        <Button onClick={start} disabled={attempts === 0 || started}>Start Quiz</Button>
        <Button onClick={stop} disabled={!started}>Stop Quiz</Button>
        <Button onClick={mulligan} disabled={started}>Mulligan</Button>
        <div>Attempts left: {attempts}</div>
    </div>;
}
