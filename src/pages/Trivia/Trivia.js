import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Heading, Button, Text, Badge } from '@sumup/circuit-ui';
import styled, { css } from 'react-emotion';

import randomNumber from '../../utils/random-number';
import Question from '../../components/Question';
import AnswerList from '../../components/AnswerList';
import questions from '../../input.json';

const RestartButton = styled(Button)`
  margin-top: 20px;
`;

const ScoreBadge = styled(Badge)`
  display: block;
  margin: 0 auto 16px;
`;

class App extends Component {
  static propTypes = {
    questions: PropTypes.array
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
      return this.props.navigate('finish');
    }

    this.setState({ question: nextQuestion, selected: null });
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
        {selected && !correct && (
          <Button onClick={() => navigate('finish')}>Finish</Button>
        )}
        <RestartButton plain onClick={() => navigate('start')}>
          Restart Game
        </RestartButton>
      </>
    );
  }
}

export default App;
