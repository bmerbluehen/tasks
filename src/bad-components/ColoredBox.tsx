import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

interface ChangeColorProps {
    next: () => void;
}

interface ColorPreviewProps {
    color: string;
}

function ChangeColor({ next }: ChangeColorProps): React.JSX.Element {
    return <Button onClick={next}>Next Color</Button>;
}

function ColorPreview({ color }: ColorPreviewProps): React.JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: color,
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px",
            }}
        ></div>
    );
}

export function ColoredBox(): React.JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);

    const nextColor = () => {
        setColorIndex((colorIndex + 1) % COLORS.length);
    };

    const currentColor = COLORS[colorIndex];

    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {currentColor}</span>
            <div>
                <ChangeColor next={nextColor}></ChangeColor>
                <ColorPreview color={currentColor}></ColorPreview>
            </div>
        </div>
    );
}
