import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface DoubleHalfProps {
    clicked: () => void;
}

function Doubler({ clicked }: DoubleHalfProps): React.JSX.Element {
    return <Button onClick={clicked}>Double</Button>;
}

function Halver({ clicked }: DoubleHalfProps): React.JSX.Element {
    return <Button onClick={clicked}>Halve</Button>;
}

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);

    const double = () => {
        setDhValue(dhValue * 2);
    };
    const half = () => {
        setDhValue(dhValue / 2);
    };

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler clicked={double}></Doubler>
            <Halver clicked={half}></Halver>
        </div>
    );
}
