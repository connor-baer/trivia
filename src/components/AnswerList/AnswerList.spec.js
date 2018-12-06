import React from 'react';

import AnswerList from './AnswerList';

const defaultProps = {
  answers: [
    {
      id: '1',
      option: 'Foo'
    },
    {
      id: '2',
      option: 'Bar'
    }
  ],
  onSelect: jest.fn()
};

const renderAnswerList = (props = {}) =>
  render(<AnswerList {...{ ...defaultProps, ...props }} />);

describe('AnswerList', () => {
  it('should render with default styles', () => {
    const { container } = renderAnswerList();
    expect(container.firstChild).toMatchSnapshot();
  });

  it.skip('should meet accessibility guidelines', async () => {
    const wrapper = renderToHtml(<AnswerList {...defaultProps} />);
    const actual = await axe(wrapper);
    expect(actual).toHaveNoViolations();
  });
});
