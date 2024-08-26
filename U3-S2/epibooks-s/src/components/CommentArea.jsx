import { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  componentDidMount = async () => {
    this.fetchComments();
  };

  componentDidUpdate = async (prevProps) => {
    if (prevProps.asin !== this.props.asin) {
      this.fetchComments();
    }
  };

  fetchComments = async () => {
    console.log(`Fetching comments for ASIN: ${this.props.asin}`);
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmM3NDUzNTQzYTU2ODAwMTU4ZWM0MWIiLCJpYXQiOjE3MjQzMzU0MTMsImV4cCI6MTcyNTU0NTAxM30.c4oJZnl34fK3UzrgF55WQWeNax9yxwxICgmmnTmEFLA",
          },
        }
      );
      if (response.ok) {
        const comments = await response.json();
        console.log("Fetched comments:", comments);
        this.setState({ comments });
      } else {
        console.log("Errore nel fetch dei commenti");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <CommentsList comments={this.state.comments} />
        <AddComment asin={this.props.asin} fetchComments={this.fetchComments} />
      </div>
    );
  }
}

export default CommentArea;
