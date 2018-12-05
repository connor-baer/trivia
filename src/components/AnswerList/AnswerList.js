import React from 'react';
import PropTypes from 'prop-types';
import { RadioButtonGroup } from '@sumup/circuit-ui';

const AnswerList = ({ answers, onSelect, selected }) => {
  return (
    <RadioButtonGroup
      options={answers}
      onChange={onSelect}
      value={selected}
      name="answer-list"
    />
  );
};

AnswerList.propTypes = {
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired
    })
  ),
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.number.isRequired
};

AnswerList.defaultProps = {
  answers: []
};

/**
 * @component
 */
export default AnswerList;
