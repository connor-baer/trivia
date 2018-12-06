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

const Answer = styled(RadioButton)(baseStyles);

Answer.propTypes = {
  example: PropTypes.string
};

Answer.defaultProps = {};

/**
 * @component
 */
export default Answer;
