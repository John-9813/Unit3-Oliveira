import React from 'react';
import { Card } from 'react-bootstrap';
import '../App.css';

const SingleBook = ({ book, isSelected, selectBook }) => {
  return (
    <Card
      onClick={selectBook}
      className={`single-book ${isSelected ? 'selected' : ''}`}
    >
      <Card.Img variant="top" src={book.img} className="book-image" />
      <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Title className="book-title">
          {book.title}
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;



