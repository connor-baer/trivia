import React, { Component } from 'react';
import styled from 'react-emotion/macro';
import { css } from 'emotion/macro';
import { ThemeProvider } from 'emotion-theming';
import {
  Card,
  theme as themes,
  injectGlobalStyles,
  Button
} from '@sumup/circuit-ui';
import { ReactComponent as LogoIcon } from './assets/logo.svg';
import Question from './components/Question';
import AnswerList from './components/AnswerList';
import questions from './input.json';

const { circuit } = themes;

// Inject Circuit UI's global styles into the DOM.
injectGlobalStyles({
  theme: circuit,
  /**
   * Customizations of the global styles are done like this.
   * Note that we are passing in a template literal without
   * using the css macro.
   */

  custom: `
    body {
      background-color: ${circuit.colors.n100};
    }
  `
});

const Logo = styled(LogoIcon)`
  ${({ theme }) => css`
    display: block;
    fill: ${theme.colors.white};
    margin-bottom: ${theme.spacings.tera};
    margin-top: ${theme.spacings.peta};
  `};
`;

const Container = styled('header')`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 450px;
  min-height: 100vh;
  margin: 0 auto;
`;

class App extends Component {
  state = {
    isPlaying: false,
    question: {}
  };

  startGame = () => {
    const firstQuestion = this.getQuestion();
    this.setState({ question: firstQuestion, isPlaying: true });
  };

  getQuestion = () => {
    return questions[0];
  };

  render() {
    const { question, isPlaying } = this.state;

    if (!isPlaying) {
      return (
        <ThemeProvider theme={circuit}>
          <Button onClick={this.startGame}> Start Game</Button>
        </ThemeProvider>
      );
    }

    const answers = question.options.map(({ id, option }) => ({
      label: option,
      value: id
    }));

    return (
      <ThemeProvider theme={circuit}>
        <Container>
          <Logo data-testid="sumup-logo" />
          <Card>
            <Question>{question.question}</Question>
            <AnswerList answers={answers} />
          </Card>
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
