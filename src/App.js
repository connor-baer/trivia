import React from 'react';
import styled, { css } from 'react-emotion';
import { ThemeProvider } from 'emotion-theming';
import { Card, theme as themes, injectGlobalStyles } from '@sumup/circuit-ui';
import { ReactComponent as LogoIcon } from './assets/logo.svg';
import Trivia from './components/Trivia';
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

const App = () => (
  <ThemeProvider theme={circuit}>
    <Container>
      <Logo data-testid="sumup-logo" />
      <Card>
        <Trivia questions={questions} />
      </Card>
    </Container>
  </ThemeProvider>
);

export default App;
