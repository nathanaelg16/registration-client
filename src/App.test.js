import React from 'react';
import { render } from '@testing-library/react';
import RegistrationCentral from './RegistrationCentral';

test('renders learn react link', () => {
  const { getByText } = render(<RegistrationCentral />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
