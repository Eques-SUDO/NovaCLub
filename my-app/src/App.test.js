import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders ETERNOTE MUSIC text', async () => {
  render(<App />);
  await waitFor(() => {
    const logoElement = screen.getByText(/ETERNOTE MUSIC/i);
    expect(logoElement).toBeInTheDocument();
  });
});
