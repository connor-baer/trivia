import React, { Component } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { Button, Badge } from '@sumup/circuit-ui';
import styled from 'react-emotion';

import Question from '../../components/Question';
import AnswerList from '../../components/AnswerList';
import questions from '../../input.json';

const ScoreBadge = styled(Badge)`
  display: block;
  margin: 0 auto 16px;
`;

class App extends Component {
  static propTypes = {
    questions: PropTypes.array,
    incrementScore: PropTypes.func,
    updateLeaderboard: PropTypes.func,
    navigate: PropTypes.func,
    score: PropTypes.number
  };

  state = {
    selected: null,
    question: questions[0]
  };

  getQuestion = () => {
    const currentQuestionId = this.state.question.id;
    const nextQuestionId = Number(currentQuestionId) + 1;

    if (nextQuestionId === questions.length) {
      return null;
    }

    return questions[nextQuestionId];
  };

  handleAnswer = event => {
    const { value } = event.target;
    const correct = value === this.state.question.answer;
    this.setState({ selected: value, correct });
  };

  handleNextQuestion = () => {
    const nextQuestion = this.getQuestion();
    this.props.incrementScore();

    if (nextQuestion === null) {
      this.finish();
      return;
    }

    this.setState({ question: nextQuestion, selected: null });
  };

  finish = () => {
    const { navigate, updateLeaderboard } = this.props;
    updateLeaderboard();
    navigate('finish');
  };

  render() {
    const { navigate, score } = this.props;
    const { question, selected, correct } = this.state;

    return (
      <>
        <ScoreBadge color="warning">{`💸 ${score}`}</ScoreBadge>
        <Question id="question">{question.question}</Question>
        <AnswerList
          answers={question.options}
          onSelect={this.handleAnswer}
          selected={selected}
          correct={question.answer}
        />
        {selected && correct && (
          <Button onClick={this.handleNextQuestion}>Next</Button>
        )}
        {selected && !correct && <Button onClick={this.finish}>Finish</Button>}
        <Button
          plain
          style={{ marginTop: '16px' }}
          onClick={() => navigate('start')}
        >
          Restart Game
        </Button>
      </>
    );
  }
}

export default App;
