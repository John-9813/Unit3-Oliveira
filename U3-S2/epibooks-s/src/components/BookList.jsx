import React, { useState } from "react";
import SingleBook from "./SingleBook";
import { Col, Form, Row } from "react-bootstrap";

// class BookList extends Component {
//   state = {
//     searchQuery: '',
//   };

const BookList = ({ books, selectedBookAsin, selectBook }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // render() {
  return (
    <>
      {/* Campo di ricerca */}
      <Row className="justify-content-start mt-5">
        <Col xs={12} md={4} className="text-center">
          <Form.Group>
            <Form.Control
              type="search"
              placeholder="Cerca un libro"
              // value={this.state.searchQuery}
              // onChange={(e) => this.setState({ searchQuery: e.target.value })}
              value={searchQuery} // Collega lo stato della query di ricerca al valore dell'input
              onChange={(e) => setSearchQuery(e.target.value)} // Aggiorna lo stato quando l'input cambia
            />
          </Form.Group>
        </Col>
      </Row>
      {/* Lista di libri filtrata */}
      <Row className="g-2 mt-3">
        {/* {this.props.books
            .filter((b) =>
              b.title.toLowerCase().includes(this.state.searchQuery)
            )
            .map((b) => (
              <Col xs={12} md={4} key={b.asin}>
                <SingleBook
                  book={b}
                  isSelected={this.props.selectedBookAsin === b.asin}
                  selectBook={() => this.props.selectBook(b.asin)} */}
        {books
          .filter((b) =>
            b.title.toLowerCase().includes(searchQuery.toLowerCase())
          ) // Filtra i libri in base alla query di ricerca
          .map((b) => (
            <Col xs={12} md={4} key={b.asin}>
              <SingleBook
                book={b}
                isSelected={selectedBookAsin === b.asin} // Controlla se il libro è selezionato
                selectBook={() => selectBook(b.asin)} // Passa la funzione selectBook con l'asin del libro
              />
            </Col>
          ))}
      </Row>
    </>
  );
};

export default BookList;
