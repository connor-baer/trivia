import React from 'react';
import { Heading, Button, Text } from '@sumup/circuit-ui';

import Leaderboard from '../../components/Leaderboard';
import questions from '../../input.json';

function Finish({ navigate, score, leaderboard }) {
  const isMillionaire = questions.length === score;

  if (isMillionaire) {
    return (
      <>
        <Heading>
          You are a millionare!{' '}
          <span role="img" aria-label="bag of money">
            💰
          </span>
        </Heading>
        <Text>
          You have answered all {score} questions correctly!{' '}
          <span role="img" aria-label="confetti">
            🎉
          </span>
        </Text>
        <Leaderboard leaderboard={leaderboard} />
        <Button primary onClick={() => navigate('start')}>
          Play again
        </Button>
      </>
    );
  }

  return (
    <>
      <Heading>
        GAME OVER{' '}
        <span role="img" aria-label="dead skull">
          ☠️
        </span>
      </Heading>
      <Text>You have answered {score} questions correctly.</Text>
      <Leaderboard leaderboard={leaderboard} />
      <Button primary onClick={() => navigate('start')}>
        Start Over
      </Button>
    </>
  );
}

export default Finish;
