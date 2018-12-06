import React from 'react';
import PropTypes from 'prop-types';

import Answer from './components/Answer';

const AnswerList = ({ answers, onSelect, selected }) => {
  return (
    <>
      {answers &&
        answers.map(({ option, id, className, ...props }) => (
          <Answer
            key={id}
            value={id}
            name="answer-list"
            onToggle={onSelect}
            checked={id === selected}
            aria-labelledby="question"
            role="radiogroup"
          >
            {option}
          </Answer>
        ))}
    </>
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
