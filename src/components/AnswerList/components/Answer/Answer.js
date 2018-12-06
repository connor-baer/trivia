import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import RadioButton from '@sumup/circuit-ui/lib/components/RadioButton';

const baseStyles = ({ theme }) => css`
  color: red;
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
