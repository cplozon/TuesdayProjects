import React, {Component} from 'react';
import SearchBar from './search_bar';
import List from './list';
import Detail from './detail'
import SidebarTwo from '../theme/SidebarTwo'
import Footer from '../theme/Footer'
import YouTubHeader from "./YouTubHeader"
import ScrapedArticles from "./ScrapedArticles"
import ScrapeTwo from "./ScrapeTwo"
import YTSearch from 'youtube-api-search';



const API_KEY = "AIzaSyA7qpYTkyEEt_FSySWfVfY0rFFBMf58L4k";

class YouTubeSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {videos: [], selectedVideo: null};
  }

  componentDidMount() {
    this.search('Car Oil Change');
  }

  search(term) {
    YTSearch({key: API_KEY, term: term}, videos => this.setState({videos: videos, selectedVideo: videos[0]}));
  }

  onVideoSelect(selectedVideo) {
    this.setState({selectedVideo})
  }

  render() {
    return (
    <div>
      <SidebarTwo />
        <div id="wrapper">
        <YouTubHeader />
          <div className="container-fluid" id="wrapper">
            <div className="row" id="center">
             <div className="col-md-12">
              <SearchBar onSearchTerm={this.search.bind(this)} />
            </div>
          </div>
     
        <div className="row" id="center">
          <div className="col-md-6">
           <br />
            <Detail video={this.state.selectedVideo} />
          </div>
          <br />
          <div className=".col-md-6"id="center">
           <br />
            <List
              videos={this.state.videos}
              onVideoSelect={(selectedVideo) => this.onVideoSelect(selectedVideo)}
            />
            </div>
            </div>
        </div>
        <br />
        <br />
        <br />
        <ScrapedArticles />
        <ScrapeTwo />
        <br />
        <br />
        <br />
         <Footer />
      </div>
    </div>

    );
  }
}

export default YouTubeSearch;


