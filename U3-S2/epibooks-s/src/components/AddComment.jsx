import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class AddComment extends Component {
  state = {
    review: {
      comment: "",
      rate: 1,
      elementId: this.props.asin,
    },
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify(this.state.review),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmM3NDUzNTQzYTU2ODAwMTU4ZWM0MWIiLCJpYXQiOjE3MjQzMzU0MTMsImV4cCI6MTcyNTU0NTAxM30.c4oJZnl34fK3UzrgF55WQWeNax9yxwxICgmmnTmEFLA",
          },
        }
      );
      if (response.ok) {
        alert("Commento aggiunto!");
        this.setState({
          review: {
            comment: "",
            rate: 1,
            elementId: this.props.asin, // Manteniamo l'asin corretto
          },
        });
        this.props.fetchComments(); // Richiamiamo i commenti aggiornati
      } else {
        alert("Errore nell'invio del commento");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Commento</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={this.state.review.comment}
            onChange={(e) =>
              this.setState({
                review: { ...this.state.review, comment: e.target.value },
              })
            }
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Voto</Form.Label>
          <Form.Control
            as="select"
            value={this.state.review.rate}
            onChange={(e) =>
              this.setState({
                review: { ...this.state.review, rate: e.target.value },
              })
            }
            required
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Invia commento
        </Button>
      </Form>
    );
  }
}

export default AddComment;

