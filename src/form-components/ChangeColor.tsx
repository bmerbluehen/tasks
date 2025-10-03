import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function ChangeColor(): React.JSX.Element {
    const colors = [
        "red",
        "blue",
        "green",
        "orange",
        "yellow",
        "purple",
        "pink",
        "brown",
    ];

    const [color, setColor] = useState<string>(colors[0]);

    return (
        <div>
            <h3>Change Color</h3>

            {colors.map((c) => (
                <Form.Check
                    key={c}
                    inline
                    type="radio"
                    name="color-choices"
                    label={c}
                    value={c}
                    checked={color === c}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setColor(e.target.value);
                    }}
                />
            ))}

            <div data-testid="colored-box" style={{ backgroundColor: color }}>
                {color}
            </div>
        </div>
    );
}
