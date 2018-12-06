import React from 'react';
import { fireEvent } from 'react-testing-library';

import Answer from './Answer';

const onChangeMock = jest.fn();

const defaultProps = {
  value: '1',
  name: 'group',
  children: 'Foo',
  onToggle: onChangeMock,
  onChange: jest.fn()
};

const renderAnswer = (props = {}) =>
  render(<Answer {...{ ...defaultProps, ...props }} />);

describe('Answer', () => {
  it('should render with default styles', () => {
    const { container } = renderAnswer();
    expect(container.firstChild).toMatchSnapshot();
  });
  it('should render with checked styles', () => {
    const { container } = renderAnswer({ checked: true });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with correct styles', () => {
    const { container } = renderAnswer({ selected: 'foo', correct: true });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with incorrect styles', () => {
    const { container } = renderAnswer({ selected: 'foo', correct: false });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should call the onChange handler when clicked', () => {
    const { getByText } = renderAnswer({ selected: 'foo', correct: false });

    fireEvent.click(getByText('Foo'));
    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });

  it.skip('should meet accessibility guidelines', async () => {
    const wrapper = renderToHtml(<Answer {...defaultProps} />);
    const actual = await axe(wrapper);
    expect(actual).toHaveNoViolations();
  });
});
