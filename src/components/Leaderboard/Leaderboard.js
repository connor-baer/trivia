import React from 'react';
import PropTypes from 'prop-types';
import { Table } from '@sumup/circuit-ui';

/**
 * Describe Leaderboard here.
 */
const Leaderboard = ({ leaderboard }) => {
  const rows = leaderboard
    .sort((a, b) => b.score - a.score)
    .map(({ user, score }) => [user, `${score}`]);

  return (
    <div style={{ marginBottom: '16px' }}>
      <Table headers={['Username', 'Score']} rows={rows} rowHeaders={false} />
    </div>
  );
};

Leaderboard.propTypes = {
  /**
   * A consice description of the example prop.
   */
  example: PropTypes.string
};

Leaderboard.defaultProps = {};

/**
 * @component
 */
export default Leaderboard;
