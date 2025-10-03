import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    const isCorrect = answer === expectedAnswer;

    return (
        <div>
            <h3>Check Answer</h3>
            <input
                type="text"
                value={answer}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setAnswer(e.target.value);
                }}
            />
            <span>{isCorrect ? "✔️" : "❌"}</span>
        </div>
    );
}
