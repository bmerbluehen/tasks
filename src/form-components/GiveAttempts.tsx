import React, { useState } from "react";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requests, setRequests] = useState<number>(0);

    const useAttempt = () => {
        setAttempts(attempts - 1);
    };

    const gainAttempts = () => {
        setAttempts(attempts + requests);
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts: {attempts}</div>
            <input
                type="number"
                value={requests}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const value = parseInt(e.target.value) || 0;
                    setRequests(value);
                }}
            />
            <button onClick={gainAttempts}>gain</button>
            <button onClick={useAttempt} disabled={attempts === 0}>
                use
            </button>
        </div>
    );
}
