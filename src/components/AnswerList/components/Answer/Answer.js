import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import { RadioButton } from '@sumup/circuit-ui';

const baseStyles = ({ theme }) => css`
  width: 50%;
  padding: 0 ${theme.spacings.kilo} ${theme.spacings.kilo} 0;
  cursor: pointer;

  &::before,
  &::after {
    content: none;
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
    color: ${theme.colors.success};
  `;

const incorrectStyles = ({ theme, checked, correct }) =>
  checked &&
  !correct &&
  css`
    color: ${theme.colors.danger};
  `;

const Answer = styled(RadioButton)(
  baseStyles,
  checkedStyles,
  correctStyles,
  incorrectStyles
);

Answer.propTypes = {
  correct: PropTypes.bool
};

Answer.defaultProps = {};

/**
 * @component
 */
export default Answer;
