import React from 'react';

import Answer from './Answer';

const defaultProps = {
  value: '1',
  name: 'group',
  children: 'Foo',
  onChange: jest.fn()
};

describe('Answer', () => {
  it('should render with default styles', () => {
    const { container } = render(<Answer {...defaultProps} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it.skip('should meet accessibility guidelines', async () => {
    const wrapper = renderToHtml(<Answer {...defaultProps} />);
    const actual = await axe(wrapper);
    expect(actual).toHaveNoViolations();
  });
});
