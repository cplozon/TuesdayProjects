import axios from 'axios';
import React, { Component } from 'react';
import cheerio from 'cheerio';

class ScrapeForm extends Component {
  state = {
    articles: []
  }


  componentDidMount() {
    axios.get('https://www.autoblog.com/auto-repair')
    .then(response => {
      var $ = cheerio.load(response.data);

      var infoArticles = [];

      $(".media-heading").each(function(i, element) {
      // Save the text and href of each link enclosed in the current element
      var article= {};

      article.title = $(element).children("a").text();
      article.subTitle = $(element).children(".media-description").text();
      article.link = $(element).children("a").attr("href");
      infoArticles.push(article);

      
    });
      this.setState({articles:infoArticles});
      console.log(infoArticles);

      console.log($(".media-heading").length);
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }



  render() {
    return (


      <section id="two" className="wrapper style3 fade-up">
      <div className="inner">
      <h2>Articles From AutoBlog</h2>
      </div>

      <p>test</p>
      </section>
      );
  }
}
export default ScrapeForm;