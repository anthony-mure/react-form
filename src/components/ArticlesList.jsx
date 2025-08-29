
const articlesList = ['skateboard', 'bicicletta', 'monopattino', 'driftskates', 'monociclo']

const ArticlesList = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <ul>
            {articlesList.map((article, index) => (
            <li key={index}>{article}</li>
           ))};
          </ul>
        </div>
      </div>
      
    </div>
  )
};

export default ArticlesList
