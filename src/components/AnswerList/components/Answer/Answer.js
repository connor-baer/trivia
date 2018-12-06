import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import { RadioButton } from '@sumup/circuit-ui';

const baseStyles = ({ theme }) => css`
  width: 50%;
  padding: 4px ${theme.spacings.kilo};
  cursor: pointer;

  &::before,
  &::after {
    content: none;
    box-sizing: border-box;
    height: auto;
    width: auto;
    background-color: transparent;
    border-radius: 0;
    display: inline;
    position: static;
    transform: none;
    margin-left: ${theme.spacings.bit};
    opacity: 1;
  }

  &:hover {
    background-color: #ffc859;
    border-radius: 30px;
  }
`;

const checkedStyles = ({ theme, checked }) =>
  checked &&
  css`
    font-weight: ${theme.fontWeight.bold};
  `;

const correctStyles = ({ theme, selected, correct }) =>
  selected &&
  correct &&
  css`
    opacity: 1;
    color: ${theme.colors.success};

    &::after {
      content: '✅';
    }
  `;

const incorrectStyles = ({ theme, checked, correct }) =>
  checked &&
  !correct &&
  css`
    opacity: 1;
    color: ${theme.colors.danger};

    &::after {
      content: '❌';
    }
  `;

const Answer = styled(RadioButton)(
  baseStyles,
  checkedStyles,
  correctStyles,
  incorrectStyles
);

Answer.propTypes = {
  correct: PropTypes.bool,
  selected: PropTypes.string,
  checked: PropTypes.bool
};

Answer.defaultProps = {
  checked: false
};

/**
 * @component
 */
export default Answer;
