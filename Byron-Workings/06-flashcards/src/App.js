import { useState } from "react";
import "./styles.css";

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];
// <------------- Byrons Attempt ----------->
// const renderQuestions = () => {
//   return questions.map((q) => {
//     return <Card question={q.question} answer={q.answer} key={q.id} />;
//   });
// };

// const Card = ({ question, answer }) => {
//   const [showAnswer, setShowAnswer] = useState(null);

//   const handleClick = () => {
//     setShowAnswer();
//   };
//   return (
//     <div onClick={handleClick} className={`${showAnswer ? "selected" : ""}`}>
//       {!showAnswer && <span>{question}</span>}
//       {showAnswer && <span>{answer}</span>}
//     </div>
//   );
// };

// function FlashCards() {
//   return <div className="flashcards">{renderQuestions()}</div>;
// }

// export default function App() {
//   return (
//     <div className="App">
//       <FlashCards />
//     </div>
//   );
// }
// <------------- Byrons Attempt ----------->

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);

  const handleClick = (id) => {
    setSelectedId(id !== selectedId ? id : null);
  };

  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          onClick={() => handleClick(question.id)}
          key={question.id}
          className={question.id === selectedId ? "selected" : ""}
        >
          <p>
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}
