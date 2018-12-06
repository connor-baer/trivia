import React from 'react';
import PropTypes from 'prop-types';

import Answer from './components/Answer';
import styled, { css } from 'react-emotion';

const containerStyles = ({ theme }) => css`
  display: flex;
  flex-wrap: wrap;
`;

const Container = styled('div')(containerStyles);

const AnswerList = ({ answers, onSelect, selected, correct }) => {
  return (
    <Container>
      {answers &&
        answers.map(({ option, id, className, ...props }) => (
          <Answer
            key={id}
            value={id}
            name="answer-list"
            onToggle={onSelect}
            selected={selected}
            checked={id === selected}
            aria-labelledby="question"
            role="radiogroup"
            correct={id === correct}
          >
            {option}
          </Answer>
        ))}
    </Container>
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
