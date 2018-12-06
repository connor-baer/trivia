import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Heading, Button, Text } from '@sumup/circuit-ui';
import styled, { css } from 'react-emotion';

import Leaderboard from '../../components/Leaderboard';
import questions from '../../input.json';

function Page({ navigate, leaderboard }) {
  return (
    <>
      <Heading>Leaderboard 💯</Heading>
      <Leaderboard leaderboard={leaderboard} />
      <Button onClick={() => navigate('start')}>Return home</Button>
    </>
  );
}

export default Page;
