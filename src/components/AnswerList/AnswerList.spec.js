import React from 'react';

import AnswerList from './AnswerList';

const defaultProps = {
  answers: [
    {
      value: 1,
      label: 'Foo'
    },
    {
      value: 2,
      label: 'Bar'
    }
  ]
};

describe('AnswerList', () => {
  it('should render with default styles', () => {
    const { container } = render(<AnswerList {...defaultProps} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it.skip('should meet accessibility guidelines', async () => {
    const wrapper = renderToHtml(<AnswerList {...defaultProps} />);
    const actual = await axe(wrapper);
    expect(actual).toHaveNoViolations();
  });
});
