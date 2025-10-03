import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [choice, setChoice] = useState<string>(options[0]);
    const isCorrect = choice === expectedAnswer;

    return (
        <div>
            <h3>Multiple Choice Question</h3>

            <select
                value={choice}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    setChoice(e.target.value);
                }}
            >
                {options.map((opt) => (
                    <option key={opt} value={opt}>
                        {opt}
                    </option>
                ))}
            </select>

            <span>{isCorrect ? "✔️" : "❌"}</span>
        </div>
    );
}
