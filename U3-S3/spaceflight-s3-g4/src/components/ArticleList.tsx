import React, { useEffect, useState } from 'react'; // Importa React e gli hook useEffect e useState
import { Card, Button } from 'react-bootstrap'; // Importa i componenti Card e Button da react-bootstrap
import { Article, ApiResponse } from '../lib/interfaces'; // Importa le interfacce Article e ApiResponse

const ArticleList: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]); // Stato per memorizzare la lista degli articoli

  useEffect(() => {
    // Effettua il fetch degli articoli quando il componente viene montato
    fetch('https://api.spaceflightnewsapi.net/v4/articles')
      .then(response => response.json()) // Converte la risposta in JSON
      .then((data: ApiResponse) => setArticles(data.results)); // Aggiorna lo stato con i risultati degli articoli
  }, []); // L'array vuoto come secondo argomento assicura che l'effetto venga eseguito solo una volta

  return (
    <div className="container">
      <h1>Spaceflight News</h1>
      <div className="row d-flex">
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


