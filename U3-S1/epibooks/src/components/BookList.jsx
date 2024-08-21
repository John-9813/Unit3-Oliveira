import React, { useState } from 'react'
import SingleBook from './SingleBook'
import { Container, Row, Col, Form } from 'react-bootstrap'

const BookList = ({ books }) => {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <Container>
      <Form.Group className="mb-3" controlId="formSearch">
        <Form.Control
          type="text"
          placeholder="Search for a book..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Form.Group>
      <Row>
        {filteredBooks.map((book) => (
          <Col key={book.asin} xs={12} md={4} lg={3}>
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default BookList
