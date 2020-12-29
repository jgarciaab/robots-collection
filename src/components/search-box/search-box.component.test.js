import React from 'react'
import { render, screen } from '@testing-library/react' 
import { SearchBox } from './search-box.component'

test('should render properly', () => {
  render(<SearchBox />);
  expect(screen.getByPlaceholderText('search robots')).toBeVisible()
});