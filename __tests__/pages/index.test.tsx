import { getPage } from 'next-page-tester';
import { screen, fireEvent } from '@testing-library/react';

describe('Home page', () => {
  it('renders home page', async () => {
    const { render } = await getPage({
      route: '/',
    });

    render();
    expect(screen.getByText('Hello World')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Profile'));
    await screen.findByText('Art Vandalay');
  });
});
