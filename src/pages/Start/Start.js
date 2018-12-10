import React from 'react';
import { Heading, Button, Input, Label } from '@sumup/circuit-ui';

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
      <Label htmlFor="username">What is your name?</Label>
      <Input
        onChange={handleChange}
        value={currentUser}
        placeholder="Jane"
        id="username"
      />
      <Button primary onClick={handleStartGame} disabled={!currentUser}>
        Start Game
      </Button>
      <Button
        style={{ marginTop: '16px' }}
        onClick={() => navigate('leaderboard')}
        plain
      >
        View leaderboard
      </Button>
    </>
  );
}

export default Start;
