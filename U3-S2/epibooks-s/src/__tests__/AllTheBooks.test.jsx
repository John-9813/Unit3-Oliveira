import { render, screen } from '@testing-library/react';
import AllTheBooks from '../components/AllTheBooks';
import fantasy from '../data/fantasy.json';

describe('AllTheBooks component', () => {
  it('should render all the books on JSON', () => {

    render(<AllTheBooks />);
    
    // Verifico che il numero di cards renderizzate corrisponda al numero di libri nel JSON
    const bookCards = screen.getAllByRole('img'); // Ottiene tutte le immagini dei libri
    expect(bookCards.length).toBe(fantasy.length); // Confronta il numero di immagini con il numero di libri
  });
});
