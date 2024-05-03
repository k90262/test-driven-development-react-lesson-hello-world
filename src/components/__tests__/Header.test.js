import { createRoot } from 'react-dom/client';
import Header from '../Header';

it('renders without crash', () => {
  const div = document.createElement('div');
  createRoot(div).render(<Header />);
});
