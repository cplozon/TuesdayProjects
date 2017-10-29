
import React, {Component} from 'react';
import SearchBar from './search_bar';
import List from './list';
import Detail from './detail'
import Sidebar from '../theme/Sidebar'
import Footer from '../theme/Footer'
import Post from '../theme/Post'
import YTSearch from 'youtube-api-search';

const pic8 = require('../theme/images/pic08.jpg')

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
      <Sidebar />
        <div id="wrapper">

          <section id="one" className="wrapper style2 spotlights">
            <Post title="Search Your Car Problem" image={pic8} text="Find The Best Information Available For Your DIY Automotive Repair Project" href="/" />
          </section>

      <div className="container-fluid" id="wrapper">
        <div className="row" id="center">
          <div className="col-md-12">
            <SearchBar onSearchTerm={this.search.bind(this)} />
          </div>
        </div>
        <br />
        <div className="row" id="center">
          <div className="col-md-6">
            <Detail video={this.state.selectedVideo} />
          </div>
          <br />
          <div className=".col-md-6"id="center">
            <List
              videos={this.state.videos}
              onVideoSelect={(selectedVideo) => this.onVideoSelect(selectedVideo)}
            />
          </div>
        </div>
      </div>
      </div>
      <Footer />
      </div>

    );
  }
}

export default YouTubeSearch;


