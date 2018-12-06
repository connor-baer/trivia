import React, { Component } from 'react';
import styled, { css } from 'react-emotion';
import { ThemeProvider } from 'emotion-theming';
import { Card, theme as themes, injectGlobalStyles } from '@sumup/circuit-ui';

import { ReactComponent as LogoIcon } from './assets/logo.svg';
import Start from './pages/Start';
import Trivia from './pages/Trivia';
import Finish from './pages/Finish';
import Leaderboard from './pages/Leaderboard';

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

const pageMap = {
  start: Start,
  play: Trivia,
  finish: Finish,
  leaderboard: Leaderboard
};

const Logo = styled(LogoIcon)`
  ${({ theme }) => css`
    display: block;
    fill: ${theme.colors.white};
    margin-bottom: ${theme.spacings.tera};
    margin-top: ${theme.spacings.peta};
  `};
`;

const Container = styled('article')`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  min-height: 100vh;
  margin: 0 auto;
`;

class App extends Component {
  state = {
    route: 'start',
    score: 0,
    currentUser: '',
    leaderboard: []
  };

  navigate = route => {
    this.setState({ route });
  };

  incrementScore = () => {
    this.setState(prevState => ({ score: prevState.score + 1 }));
  };

  resetScore = () => {
    this.setState({ score: 0 });
  };

  setCurrentUser = currentUser => {
    this.setState({ currentUser });
  };

  updateLeaderboard = () => {
    this.setState(prevState => {
      const { currentUser: user, score, leaderboard } = prevState;
      return {
        leaderboard: [...leaderboard, { user, score }]
      };
    });
  };

  render() {
    const Page = pageMap[this.state.route];
    return (
      <ThemeProvider theme={circuit}>
        <Container>
          <Logo data-testid="sumup-logo" />
          <Card>
            <Page
              {...this.state}
              navigate={this.navigate}
              resetScore={this.resetScore}
              incrementScore={this.incrementScore}
              setCurrentUser={this.setCurrentUser}
              updateLeaderboard={this.updateLeaderboard}
            />
          </Card>
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
