import React from 'react';
import { Card } from 'react-bootstrap';

const SingleBook = ({ book, isSelected, selectBook }) => {
  return (
    <Card
      onClick={selectBook}
      style={{ border: isSelected ? '3px solid red' : 'none' }}
    >
      <Card.Img variant="top" src={book.img} />
      <Card.Body>
        <Card.Title style={{ color: 'black' }}>
          {book.title}
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;

