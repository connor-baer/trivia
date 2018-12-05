import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@sumup/circuit-ui';

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
    return this.props.questions[0];
  };

  render() {
    const { question, isPlaying } = this.state;

    if (!isPlaying) {
      return <Button onClick={this.startGame}> Start Game</Button>;
    }

    const answers = question.options.map(({ id, option }) => ({
      label: option,
      value: id
    }));

    return (
      <>
        <Question>{question.question}</Question>
        <AnswerList answers={answers} />
      </>
    );
  }
}

export default App;
