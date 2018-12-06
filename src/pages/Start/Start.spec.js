import React from 'react';

import Start from './Start';
import questions from '../../input.json';

describe.skip('Start', () => {
  // !TODO: write your tests.
  describe('styles', () => {
    it('should render with default styles', () => {
      const actual = create(<Start />);
      expect(actual).toMatchSnapshot();
    });
  });

  describe('business logic', () => {
    it('should have tests');
  });
  describe('accessibility', () => {
    it('should meet accessibility guidelines', async () => {
      const wrapper = renderToHtml(<Start />);
      const actual = await axe(wrapper);
      expect(actual).toHaveNoViolations();
    });
  });
});

// describe('Start', () => {
//   describe('Get Questions', () => {
//     it('should reduce available questions', async () => {
//       const allQuestions = questions;

//       const actual = await axe(wrapper);
//       expect(actual).toHaveNoViolations();
//     });
//   });
// });
