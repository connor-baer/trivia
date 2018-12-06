import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Heading, Button, Text } from '@sumup/circuit-ui';
import styled, { css } from 'react-emotion';

function Start({ navigate }) {
  return (
    <>
      <Heading>SumUp Trivia</Heading>
      <Text>Have fun! 🎉</Text>
      <Button primary onClick={navigate('play')}>
        Start Game
      </Button>
    </>
  );
}

export default Start;
