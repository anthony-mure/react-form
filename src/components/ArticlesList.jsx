import { useState } from "react";

const articlesList = ['skateboard', 'bicicletta', 'monopattino', 'driftskates', 'monociclo']

const ArticlesList = () => {

  const [articles, setArticles] = useState(articlesList);
  const [newArticle, setNewArticle] = useState('');

  const handleForm = (e) => {
    e.preventDefault();
    const article = newArticle.trim();
    const copyArticles = [...articles, article];
    setArticles(copyArticles);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <ul>
            {articles.map((article, index) => (
              <li key={index}>{article}</li>
           ))};
          </ul>
        </div>
        <div className="col-12">
          <form onSubmit={ handleForm }>
            <input type="text" value={newArticle} onChange={(event) => {
              setNewArticle(event.target.value);
            }}
            />
             <button className="btn btn-success ms-3">Aggiungi</button>
          </form>
        </div>
      </div>
      
    </div>
  )
};

export default ArticlesList
