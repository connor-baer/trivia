import React from 'react';

import Question from './Question';

const defaultProps = {
  children: 'What is your name?'
};

describe('Question', () => {
  it('should render with default styles', () => {
    const { container } = render(<Question {...defaultProps} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should meet accessibility guidelines', async () => {
    const wrapper = renderToHtml(<Question {...defaultProps} />);
    const actual = await axe(wrapper);
    expect(actual).toHaveNoViolations();
  });
});
