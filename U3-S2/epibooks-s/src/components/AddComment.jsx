import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const AddComment = ({ asin, fetchComments }) => {
 
  const [review, setReview] = useState({
    comment: "", 
    rate: 1, 
    elementId: asin, 
  });

  // Funzione per gestire l'invio del form
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previene il comportamento predefinito del form di ricaricare la pagina

    try {
      // Effettua una chiamata POST per inviare il commento
      console.log("Invio il commento:", review);
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify(review), // Converte lo stato review in una stringa JSON
          headers: {
            "Content-Type": "application/json", // Indica che il body è in formato JSON
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmNkZjI5NDY5NDA2YTAwMTUwZDk1NmIiLCJpYXQiOjE3MjQ3NzMwMTMsImV4cCI6MTcyNTk4MjYxM30.KFTr0hyddi6HcW9FeovKNKCmzPY4wQ_B04uY70m8Dj0", // Token per l'autenticazione
          },
        }
      );

      // Controlliamo se la risposta è ok
      if (response.ok) {
        alert("Commento aggiunto!");
        console.log("Commento inviato correttamente");
        // Resettiamo lo stato del commento
        setReview({
          comment: "",
          rate: 1,
          elementId: asin, // Manteniamo l'asin attuale
        });
        fetchComments(); // Aggiorniamo la lista dei commenti
      } else {
        alert("Errore nell'invio del commento");
        console.error("Errore nella risposta del server");
      }
    } catch (error) {
      console.error("Errore durante la richiesta", error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Commento</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={review.comment}
          onChange={(e) =>
            setReview({ ...review, comment: e.target.value })
          }
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Voto</Form.Label>
        <Form.Control
          as="select"
          value={review.rate}
          onChange={(e) =>
            setReview({ ...review, rate: e.target.value })
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
};

export default AddComment;

