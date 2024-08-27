// import { Component } from "react";
import React, { useState, useEffect } from "react"; // Importa useState e useEffect da React
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

const CommentArea = ({ asin }) => {
  // Utilizza useState per gestire lo stato dei commenti
  const [comments, setComments] = useState([]);

  // Funzione per fetchare i commenti dal server
  const fetchComments = async () => {
    console.log(`Fetching comments for ASIN: ${asin}`);
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${asin}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmNkZjI5NDY5NDA2YTAwMTUwZDk1NmIiLCJpYXQiOjE3MjQ3NzMwMTMsImV4cCI6MTcyNTk4MjYxM30.KFTr0hyddi6HcW9FeovKNKCmzPY4wQ_B04uY70m8Dj0",
          },
        }
      );
      if (response.ok) {
        const comments = await response.json();
        console.log("Fetched comments:", comments);
        setComments(comments); // Aggiorna lo stato dei commenti
      } else {
        console.log("Errore nel fetch dei commenti");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect simula componentDidMount e componentDidUpdate
  useEffect(() => {
    fetchComments(); // Chiama fetchComments quando il componente si monta o asin cambia
  }, [asin]); // Esegue l'effetto solo se asin cambia

  return (
    <div>
      <CommentsList comments={comments} />
      <AddComment asin={asin} fetchComments={fetchComments} />
    </div>
  );
};

export default CommentArea;



