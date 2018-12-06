import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Heading, Button, Text } from '@sumup/circuit-ui';
import styled, { css } from 'react-emotion';

import questions from '../../input.json';

function Finish({ navigate, score }) {
  const isMillionaire = questions.length === score;

  if (isMillionaire) {
    return (
      <>
        <Heading>You're a millionare! 💰</Heading>
        <Text>You have answered all {score} questions correctly! 🎉</Text>
        <Button primary onClick={() => navigate('start')}>
          Play again
        </Button>
      </>
    );
  }

  return (
    <>
      <Heading>GAME OVER ☠️</Heading>
      <Text>You have answered {score} questions correctly.</Text>
      <Button primary onClick={() => navigate('start')}>
        Start Over
      </Button>
    </>
  );
}

export default Finish;
