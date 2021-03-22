import { getPage } from 'next-page-tester';
import { MockedProvider } from '@apollo/client/testing';
import { screen } from '@testing-library/react';

/**
 * @jest-environment jsdom
 */

describe('Profile page', () => {
  test('should render page and display user details', async () => {
    const { render } = await getPage({
      route: '/profile',
      useDocument: true,
      wrapper: {
        Page: (Page) => (pageProps) => {
          return (
            <MockedProvider>
              <Page {...pageProps} />
            </MockedProvider>
          );
        },
      },
    });
    render();

    // await screen.findByText('Post 1');
  });
});
