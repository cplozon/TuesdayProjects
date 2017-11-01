import axios from 'axios';
import React, { Component } from 'react';
import cheerio from 'cheerio';

class ScrapeTwo extends Component {
  state = {
    articles: []
  }

  // When this component mounts, go scrape our articles
  componentDidMount() {
    axios.get('https://www.autoblog.com/auto-repair')
    .then(response => {
      var $ = cheerio.load(response.data);

  // Once our GET request comes back with the page's HTML, use Cheerio to parse it, building up articles and saving them in a 'scrapedArticles' array:
    var scrapedArticles = [];

    $(".media-heading").each(function(i, element) {
      // Save the text and href of each link enclosed in the current element
      var article= {};

      article.title = $(element).children("a").text();
      article.subTitle = $(element).children("a").text();
      article.link = $(element).children("a").attr("href");
    
      if (scrapedArticles.length < 3) {
      scrapedArticles.push(article);
    };
      
    });
  


    this.setState({articles:scrapedArticles});
      console.log(scrapedArticles);

      console.log($(".title").length);
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
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
                  <button className="articlebutton ">View Article</button>
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
      <div className="container">
       <section id="two" className="wrapper style3 fade-up">
        <div className="row">
          <div className="inner">
            
            <div className="panel panel-primary">
            <br />
            <h3>The Best Articles From DIY Auto Repair</h3>
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
            </section>
            <br />
            <br />
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
export default ScrapeTwo;

