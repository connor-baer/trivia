import React from 'react';

import Trivia from './Trivia';

describe.skip('Trivia', () => {
  // !TODO: write your tests.
  describe('styles', () => {
    it('should render with default styles', () => {
      const actual = create(<Trivia />);
      expect(actual).toMatchSnapshot();
    });
  });

  describe('business logic', () => {
    it('should have tests');
  });
  describe('accessibility', () => {
    it('should meet accessibility guidelines', async () => {
      const wrapper = renderToHtml(<Trivia />);
      const actual = await axe(wrapper);
      expect(actual).toHaveNoViolations();
    });
  });
});