import { render, screen } from '@testing-library/react';
import { Tester, TesterProps } from './Tester';

describe('Tester', () => {
  const defaultProps: TesterProps = {
    name: 'George',
  };

  it('renders correctly', () => {
    const props = { ...defaultProps };
    render(<Tester {...props} />);
    expect(screen.queryByText('Hello George')).toBeInTheDocument();
  });
});
