import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Heading, Button, Text } from '@sumup/circuit-ui';
import styled, { css } from 'react-emotion';

function Finish({ navigate, score }) {
  return (
    <>
      <Heading>GAME OVER</Heading>
      <Text>You have answered {score} questions correctly! 🎉</Text>
      <Button primary onClick={navigate('start')}>
        Start Over
      </Button>
    </>
  );
}

export default Finish;
