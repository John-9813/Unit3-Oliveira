import React from "react";
import { ListGroupItem } from "react-bootstrap";

const SingleComment = ({ comment }) => (
    <ListGroupItem>
      {comment.author}: {comment.comment} (Voto: {comment.rate})
    </ListGroupItem>
  );

  export default SingleComment