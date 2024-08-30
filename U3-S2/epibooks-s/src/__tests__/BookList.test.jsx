import { render, screen } from '@testing-library/react';
import BookList from '../components/BookList';
import fantasy from '../data/fantasy.json';

describe('BookList component', () => {
  it('renders as many cards as objects in the JSON', () => {
    render(<BookList books={fantasy} />);

    // Ottieni tutte le immagini, che rappresentano le copertine dei libri nelle card
    const bookCards = screen.getAllByRole('img');

    // Verifica che il numero di card sia uguale al numero di oggetti nel JSON
    expect(bookCards.length).toBe(fantasy.length);
  });

  it('filters books based on the search query', () => {
    render(<BookList books={fantasy} />);
    
    // Simula l'inserimento di testo nel campo di ricerca
    const searchInput = screen.getByPlaceholderText('Cerca un libro');
    screen.getByRole('textbox').value = 'harry';
  
    // Dovresti avere un numero inferiore di card visibili se il filtro funziona
    const filteredBooks = fantasy.filter((b) =>
      b.title.toLowerCase().includes('harry')
    );
    const bookCards = screen.getAllByRole('img');
    
    expect(bookCards.length).toBe(filteredBooks.length);
  });
  
});



