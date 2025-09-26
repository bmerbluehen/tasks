import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🍺" | "😴" | "🏅" | "💘" | "🎄"; //National Beer Day, World Sleep Day, National Sports Day, Valentine's Day, Christmas

const nextHoliday: Record<Holiday, Holiday> = {
    "💘": "😴",
    "😴": "🍺",
    "🍺": "🏅",
    "🏅": "🎄",
    "🎄": "💘",
};

const nextByAlphabet: Record<Holiday, Holiday> = {
    "🎄":"🍺",
    "🍺":"🏅",
    "🏅":"💘",
    "💘":"😴",
    "😴":"🎄",
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🍺");

    return (
        <div>
        <div>Holiday: {holiday}</div>
        <Button onClick={() => {setHoliday(nextByAlphabet[holiday])}}>Advanced by Alphabet</Button>
        <Button onClick={() => {setHoliday(nextHoliday[holiday])}}>Advanced by Year</Button>
        </div>
    );
}
