import React from 'react';
import { connect } from 'react-redux';

import QuestionCard from './QuestionCard';

import * as selectors from './selectors';
import * as questionActions from './state/questions';


class List extends React.Component {

  componentDidMount() {
    this.props.onFetchQuestions();
  }

  render() {
    const { questionsList } = this.props;

    return (
      <div>
        <ul>
          {questionsList.map(question =>
            <li key={question.id}><QuestionCard question={question} /></li>
          )}
        </ul>
      </div>
    );
  }
}


List.defaultProps = {
  onFetchQuestions: () => {},
  questionsList: [],
};


const dispatchMap = (dispatch) => ({
  onFetchQuestions: () => dispatch(questionActions.fetchQuestions()),
});

const container = connect(state => ({
  questionsList: selectors.selectQuestionsList(state),
}), dispatchMap);

export default container(List);