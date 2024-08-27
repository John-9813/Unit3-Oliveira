import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import { Container, Row, Col } from "react-bootstrap";
import BookList from "./components/BookList";
import CommentArea from "./components/CommentArea";
import { useState } from "react";

import fantasy from "./data/fantasy.json";

const App = () => {
  const [selectedBookAsin, setSelectedBookAsin] = useState(null);

  const selectBook = (asin) => {
    setSelectedBookAsin((prevSelectedAsin) =>
      prevSelectedAsin === asin ? null : asin
    );
  };

  return (
    <>
      <MyNav />
      <Container>
        <Welcome />
        <Row>
          <Col md={8}>
            <BookList
              books={fantasy}
              selectBook={selectBook}
              selectedBookAsin={selectedBookAsin}
            />
          </Col>
          <Col md={4} className="sticky-comment-area">
            {selectedBookAsin && <CommentArea asin={selectedBookAsin} />}
          </Col>
        </Row>
      </Container>
      <MyFooter />
    </>
  );
};

export default App;

