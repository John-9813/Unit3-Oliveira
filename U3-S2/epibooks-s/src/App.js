import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import { Container, Row, Col } from 'react-bootstrap';
import BookList from './components/BookList';
import CommentArea from './components/CommentArea';
import { Component } from 'react';

import fantasy from './data/fantasy.json';

class App extends Component {
  state = {
    selectedBookAsin: null,
  };

  selectBook = (asin) => {
    this.setState({ selectedBookAsin: asin });
  };

  render() {
    return (
      <>
        <MyNav />
        <Container>
          <Welcome />
          <Row>
            <Col md={8}>
              <BookList books={fantasy} selectBook={this.selectBook} selectedBookAsin={this.state.selectedBookAsin} />
            </Col>
            <Col md={4}>
              {this.state.selectedBookAsin && (
                <CommentArea asin={this.state.selectedBookAsin} />
              )}
            </Col>
          </Row>
        </Container>
        <MyFooter />
      </>
    );
  }
}

export default App;

