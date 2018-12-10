import React from 'react';
import { Heading, Button } from '@sumup/circuit-ui';

import Leaderboard from '../../components/Leaderboard';

function Page({ navigate, leaderboard }) {
  return (
    <>
      <Heading>
        Leaderboard{' '}
        <span role="img" aria-label="hundred points">
          💯
        </span>
      </Heading>
      <Leaderboard leaderboard={leaderboard} />
      <Button onClick={() => navigate('start')}>Return home</Button>
    </>
  );
}

export default Page;
