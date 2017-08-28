import React from 'react';
import { connect } from 'react-redux';

import * as selectors from './selectors';
import QuestionCard from './QuestionCard';


const List = (props) => {
  const { questionsList } = props;

  return (
    <div>
      <ul>
        {questionsList.map(question =>
          <li key={question.id}><QuestionCard question={question} /></li>
        )}
      </ul>
    </div>
  );
};

List.propTypes = {

};

List.defaultProps = {
  questionsList: [],
};


const container = connect(state => ({
  questionsList: selectors.selectQuestionsList(state),
}));

export default container(List);