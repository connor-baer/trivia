import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Heading, Button } from '@sumup/circuit-ui';
import styled from 'react-emotion/macro';
import { css } from 'emotion/macro';

import randomNumber from '../../utils/random-number';
import Question from '../Question';
import AnswerList from '../AnswerList';

const RestartButton = styled(Button)`
  margin-top: 20px;
`;

class App extends Component {
  static propTypes = {
    questions: PropTypes.array
  };

  state = {
    isPlaying: false,
    selected: null,
    question: {}
  };

  startGame = () => {
    const firstQuestion = this.props.questions[0];
    this.setState({ question: firstQuestion, isPlaying: true });
  };

  restartGame = () => {
    this.setState({ isPlaying: false, selected: null });
  };

  getQuestion = () => {
    const currentQuestionId = this.state.question.id;
    const nextQuestionId = Number(currentQuestionId) + 1;

    if (nextQuestionId === this.props.questions.length) {
      return null;
    }

    return this.props.questions[nextQuestionId];
  };

  handleAnswer = event => {
    const { value } = event.target;
    this.setState({ selected: value });
  };

  handleNextQuestion = () => {
    const nextQuestion = this.getQuestion();
    this.setState({ question: nextQuestion, selected: null });
  };

  render() {
    const { question, isPlaying, selected } = this.state;

    if (!isPlaying) {
      return (
        <>
          <Heading>Welcome to SumUp trivia 👋</Heading>
          <Button primary onClick={this.startGame}>
            Start Game
          </Button>
        </>
      );
    }

    return (
      <>
        <Question id="question">{question.question}</Question>
        <AnswerList
          answers={question.options}
          onSelect={this.handleAnswer}
          selected={selected}
          correct={question.answer}
        />
        <RestartButton plain onClick={this.restartGame}>
          Restart Game
        </RestartButton>
        {selected && <Button onClick={this.handleNextQuestion}>Next</Button>}
      </>
    );
  }
}

export default App;
