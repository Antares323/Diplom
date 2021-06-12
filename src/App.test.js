import { render, screen } from '@testing-library/react';
import React from "react";
import SocialJSApp from "./App";

test('renders learn react link', () => {
  render(<SocialJSApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
