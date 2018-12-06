import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Button, Text, Input, Label } from '@sumup/circuit-ui';
import styled, { css } from 'react-emotion';

function Start({ navigate, resetScore, setCurrentUser, currentUser }) {
  const handleStartGame = () => {
    resetScore();
    navigate('play');
  };

  const handleChange = event => {
    const { value } = event.target;
    setCurrentUser(value);
  };
  return (
    <>
      <Heading>SumUp Trivia</Heading>
      <Label htmlFor="username">What's your name?</Label>
      <Input
        onChange={handleChange}
        value={currentUser}
        placeholder="Jane"
        id="username"
      />
      <Button primary onClick={handleStartGame} disabled={!currentUser}>
        Start Game
      </Button>
    </>
  );
}

export default Start;
