```// Create the Main component
class ScrapedArticles extends Component {
  state = {
    articles: []
  }

  // When this component mounts, go scrape our articles
  componentDidMount() {
  // Once our GET request comes back with the page's HTML, use Cheerio to parse it, building up articles and saving them in a 'scrapedArticles' array:
    // var scrapedArticles = [];
    // $(article element).each(function(){
    //    var article = {};
    //    article.title = $(...);
    //    article.link = $(...);
    //    article.whateverElse = $(...);
    //    scrapedArticles.push(article)
    // });
    // console.log(scrapedArticles);
    // Finally, we use this.setState({articles: scrapedArticles}) to update the state.
  }

  // A helper method for rendering the HTML when we have no articles matching the search
  renderEmpty = () => {
    return (
      <li className="list-group-item">
        <h3>
          <span>
            <em>No articles found</em>
          </span>
        </h3>
      </li>
    );
  }

  // A helper method for mapping through our articles and outputting some HTML
  renderArticles = () => {
    return this.state.articles.map((article, index) => {

      return (
        <div key={index}>
          <li className="list-group-item">
            <h3>
              <span>
                <em>{article.title}</em>
              </span>
              <span className="btn-group pull-right">
                <a href={article.link} rel="noopener noreferrer" target="_blank">
                  <button className="btn btn-default ">View Article</button>
                </a>
              </span>
            </h3>
          </li>
        </div>
      );
    });
  }

  // A helper method for rendering a container and all of our articles inside
  renderContainer = () => {
    return (
      <div className="main-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h1 className="panel-title">
                  <strong>
                    <i className="fa fa-download" aria-hidden="true"></i> Saved Articles</strong>
                </h1>
              </div>
              <div className="panel-body">
                <ul className="list-group">
                  {this.renderArticles()}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  // Our render method. Utilizing a few helper methods to keep this logic clean
  render() {
    // If we have no articles, we will return this.renderEmpty() which in turn returns some HTML
    if (!this.state.articles) {
      return this.renderEmpty();
    }
    // If we have articles, return this.renderContainer() which in turn returns all saves articles
    return this.renderContainer();
  }
};

// Export the module back to the route
export default ScrapedArticles;
```