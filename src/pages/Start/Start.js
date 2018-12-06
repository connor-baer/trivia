import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Heading, Button, Text } from '@sumup/circuit-ui';
import styled, { css } from 'react-emotion';

function Start({ navigate, resetScore }) {
  const handleStartGame = () => {
    resetScore();
    navigate('play');
  };
  return (
    <>
      <Heading>SumUp Trivia</Heading>
      <Text>Have fun! 🎉</Text>
      <Button primary onClick={handleStartGame}>
        Start Game
      </Button>
    </>
  );
}

export default Start;
