import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Article, ApiResponse } from '../lib/interfaces';

const ArticleList: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetch('https://api.spaceflightnewsapi.net/v4/articles')
      .then(response => response.json())
      .then((data: ApiResponse) => setArticles(data.results));
  }, []);

  return (
    <div className="container">
      <h1>Spaceflight News</h1>
      <div className="row">
        {articles.map(article => (
          <div className="col-md-4" key={article.id}>
            <Card className="mb-4">
              <Card.Img variant="top" src={article.image_url} alt={article.title} />
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>{article.summary}</Card.Text>
                <Button variant="primary" href={`/articles/${article.id}`}>Read More</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;

