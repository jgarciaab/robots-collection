import React from 'react'
import { render, screen } from '@testing-library/react' 
import { Card } from './card.component'

test('should render properly', () => {
  const fakeRobot = {
    id: 1,
    name: 'Fake Robot Name',
    email: 'fake@test.com'
  };
  render(<Card robot={fakeRobot}/>);
  expect(screen.getByText('Fake Robot Name')).toBeVisible()
  expect(screen.getByText('fake@test.com')).toBeVisible()
});