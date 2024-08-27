// import { Component } from "react";
import React, { useState, useEffect } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

// class CommentArea extends Component {
//   state = {
//     comments: [], // Stato iniziale che contiene i commenti
//   };

const CommentArea = ({ asin }) => {
  // Utilizza useState per gestire lo stato dei commenti
  const [comments, setComments] = useState([]);

  // Viene eseguito subito dopo che il componente è montato
  // componentDidMount = async () => {
  //   this.fetchComments(); // Chiama la funzione per fetchare i commenti
  // };

  // Viene eseguito ogni volta che il componente riceve nuovi props
  // componentDidUpdate = async (props) => {
  //   if (props.asin !== this.props.asin) {
  //     this.fetchComments(); // Fetch dei commenti solo se il valore di asin è cambiato
  //   }
  // };

  //  Funzione per ottenere i commenti dal server
  // fetchComments = async () => {
  //   console.log(`Fetching comments for ASIN: ${this.props.asin}`);
  //   try {
  //     const response = await fetch(
  //       `https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`,
  //       {
  //         headers: {
  //           Authorization:
  //             "Bearer TOKEN",
  //         },
  //       }
  //     );
   // Funzione per fetchare i commenti dal server
   const fetchComments = async () => {
    console.log(`Fetching comments for ASIN: ${asin}`);
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${asin}`,
        {
          headers: {
            Authorization:
              "Bearer TOKEN",
          },
        }
      );
      if (response.ok) {
        const comments = await response.json();
        console.log("Fetched comments:", comments);
        this.setState({ comments }); // Aggiorna lo stato con i nuovi commenti
      } else {
        console.log("Errore nel fetch dei commenti");
      }
    } catch (error) {
      console.log(error);
    }
  };

//   render() {
//     return (
//       <div>
//         <CommentsList comments={this.state.comments} />
//         <AddComment asin={this.props.asin} fetchComments={this.fetchComments} />
//       </div>
//     );
//   }
// }

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


