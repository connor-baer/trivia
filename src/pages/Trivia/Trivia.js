import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Heading, Button, Text } from '@sumup/circuit-ui';
import styled, { css } from 'react-emotion';

import randomNumber from '../../utils/random-number';
import Question from '../../components/Question';
import AnswerList from '../../components/AnswerList';
import questions from '../../input.json';

const RestartButton = styled(Button)`
  margin-top: 20px;
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
    this.setState({ selected: value });
  };

  handleNextQuestion = () => {
    const nextQuestion = this.getQuestion();
    this.setState({ question: nextQuestion, selected: null });
  };

  render() {
    const { navigate } = this.props;
    const { question, selected } = this.state;

    return (
      <>
        <Question id="question">{question.question}</Question>
        <AnswerList
          answers={question.options}
          onSelect={this.handleAnswer}
          selected={selected}
          correct={question.answer}
        />
        {selected && <Button onClick={this.handleNextQuestion}>Next</Button>}
        <RestartButton plain onClick={navigate('start')}>
          Restart Game
        </RestartButton>
      </>
    );
  }
}

export default App;
