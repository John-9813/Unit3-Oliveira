import React, { Component } from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import fantasy from '../data/books/fantasy.json'
import history from '../data/books/history.json'
import horror from '../data/books/horror.json'
import romance from '../data/books/romance.json'
import scifi from '../data/books/scifi.json'

class AllTheBooks extends Component {
  render() {
    const books = [
      fantasy[0],
      history[0],
      horror[0],
      romance[0],
      scifi[0],
    ]

    return (
      <Container className="my-5">
        <Row className="justify-content-center">
          {books.map((book) => (
            <Col key={book.asin} xs={12} sm={6} md={4} lg={2} className="mb-4">
              <Card className="h-100 d-flex flex-column justify-content-between book">
                <Card.Img
                  variant="top"
                  src={book.img}
                  className="book-cover"
                />
                <Card.Body>
                  <Card.Title className="text-truncate">{book.title}</Card.Title>
                  <Card.Text>
                    <strong>Price:</strong> ${book.price}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    )
  }
}

export default AllTheBooks


