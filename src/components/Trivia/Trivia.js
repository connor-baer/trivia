import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Heading, Button } from '@sumup/circuit-ui';

import randomNumber from '../../utils/random-number';
import Question from '../Question';
import AnswerList from '../AnswerList';

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

    const answers = question.options.map(({ id, option }) => ({
      label: option,
      value: id.toString()
    }));

    return (
      <>
        <Question>{question.question}</Question>
        <AnswerList answers={answers} onSelect={this.validateAnswer} />
      </>
    );
  }
}

export default App;
