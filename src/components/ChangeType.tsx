import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");
    
    const labelByType: Record<QuestionType, string> = {
        "short_answer_question": "Short Answer",
        "multiple_choice_question": "Multiple Choice",
    };
    
    
    function changeType(): void {
        setType((current) =>
            current === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    }

    return (
    <div>
      <div>Question Type: {labelByType[type]}</div>
      <Button onClick={changeType}>Change Type</Button>
    </div>
  );
}