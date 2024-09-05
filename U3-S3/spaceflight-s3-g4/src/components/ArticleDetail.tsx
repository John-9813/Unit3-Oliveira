import React, { useEffect, useState } from 'react'; // Importa React e gli hook useEffect e useState
import { useParams } from 'react-router-dom'; // Importa useParams per ottenere i parametri della rotta
import { Article } from '../lib/interfaces'; // Importa l'interfaccia Article

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Ottiene l'id dall'URL
  const [article, setArticle] = useState<Article | null>(null); // Stato per memorizzare i dettagli dell'articolo

  useEffect(() => {
    // Effettua il fetch dei dettagli dell'articolo quando il componente viene montato o quando l'id cambia
    fetch(`https://api.spaceflightnewsapi.net/v4/articles/${id}`)
      .then(response => response.json()) // Converte la risposta in JSON
      .then(data => setArticle(data)); // Aggiorna lo stato con i dettagli dell'articolo
  }, [id]); // L'effetto viene eseguito ogni volta che l'id cambia

  if (!article) {
    return <div>Loading...</div>; // Mostra un messaggio di caricamento se l'articolo non è ancora stato caricato
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

