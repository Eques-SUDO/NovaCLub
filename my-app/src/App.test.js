import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders NOVA MUSIC text', async () => {
  render(<App />);
  await waitFor(() => {
    const logoElement = screen.getByText(/NOVA MUSIC/i);
    expect(logoElement).toBeInTheDocument();
  });
});
