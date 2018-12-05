import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import { Heading } from '@sumup/circuit-ui';

const baseStyles = ({ theme }) => css`
  font-weight: ${theme.fontWeight.regular};
`;

const Question = styled(Heading)(baseStyles);

Question.propTypes = {
  children: PropTypes.string.isRequired
};

/**
 * @component
 */
export default Question;
