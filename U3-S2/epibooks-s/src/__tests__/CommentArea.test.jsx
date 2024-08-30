import { render, screen } from '@testing-library/react';
import CommentArea from '../components/CommentArea';

// Test per verificare che CommentArea venga renderizzato correttamente
describe('CommentArea component', () => {
  it('should render CommentsList and AddComment components', () => {
    // Renderizza CommentArea con un asin fittizio
    render(<CommentArea asin="1944866191" />);

    // Verifica che il componente CommentsList sia nel documento (ad esempio cercando un testo specifico)
    expect(screen.getByText(/comment/i)).toBeInTheDocument();

    // Verifica che il componente AddComment sia nel documento (ad esempio cercando un testo specifico)
    expect(screen.getByText(/invia commento/i)).toBeInTheDocument();
  });
});

