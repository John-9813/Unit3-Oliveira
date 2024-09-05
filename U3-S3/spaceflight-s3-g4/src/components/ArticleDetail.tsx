import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Article } from '../lib/interfaces';

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    fetch(`https://api.spaceflightnewsapi.net/v4/articles/${id}`)
      .then(response => response.json())
      .then(data => setArticle(data));
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1>{article.title}</h1>
      <img src={article.image_url} alt={article.title} className="img-fluid" />
      <p>{article.summary}</p>
      <a href={article.url} className="btn btn-primary">Read Full Article</a>
    </div>
  );
};

export default ArticleDetail;
