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
    question: {}
  };

  startGame = () => {
    const firstQuestion = this.getQuestion();
    this.setState({ question: firstQuestion, isPlaying: true });
  };

  restartGame = () => {
    this.setState({ isPlaying: false });
  };

  getQuestion = () => {
    const { questions } = this.props;
    const randomIndex = randomNumber(0, questions.length);
    console.log('Index', randomIndex);
    return questions[randomIndex];
  };

  validateAnswer = event => {
    const { value } = event.target;
    const isCorrect = Number(value) === this.state.question.answer;
    console.log(value, this.state.question.answer);

    if (isCorrect) {
      const nextQuestion = this.getQuestion();
      this.setState({ question: nextQuestion });
      return;
    }

    this.setState({ isPlaying: false });
  };

  render() {
    const { question, isPlaying } = this.state;

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
        <AnswerList answers={question.options} onSelect={this.validateAnswer} />
        <RestartButton plain onClick={this.restartGame}>
          Restart Game
        </RestartButton>
      </>
    );
  }
}

export default App;
