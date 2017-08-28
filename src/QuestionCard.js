import React from 'react';


const QuestionCard = (props) => {
  const { question } = props;

  return (
    <div>{question.title}</div>
  );
};


export default QuestionCard;