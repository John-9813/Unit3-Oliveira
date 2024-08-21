import React, { Component } from "react";
import { Card } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  toggleSelect = () => {
    this.setState((prevState) => ({
      selected: !prevState.selected,
    }));
  };

  render() {
    const { book } = this.props;
    const { selected } = this.state;

    return (
      <Card className="h-100" onClick={this.toggleSelect}>
        <Card.Img variant="top" src={book.img} className="book-cover" />
        <Card.Body className="card-body">
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>{book.price} - {book.category}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
