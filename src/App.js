import React from "react";

import "./App.css";

import SearchBar from "./components/SearchBar";

import youtube from "./api/youtubeapi";

import VideoList from "./components/VideoList";

import VideoDetails from "./components/VideoDetail";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: "",
  };
  
  onSelectVideo = (video) => {
    this.setState({ selectedVideo: video });
  };

  componentDidMount() {
    this.onTermSubmit("");
  }

  onTermSubmit = async (term) => {
    const res = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({ videos: res.data.items, selectedVideo: res.data.items[0] });
  };
  render() {
    return (
      <div className="container">
        <header>
          <div className="wrap">
            <div className="searchBar">
              <SearchBar onFormSubmit={this.onTermSubmit} />
            </div>
          </div>
        </header>

        {/* this div is for the search bar*/}
        <div className="container">
          <div className="row">
          <div class="col-xs-7 col-lg-8 test">

          {/* this div for video details*/}  
            
              <VideoDetails video={this.state.selectedVideo} />
            </div>
            <div class="col-xs-5 col-sm-6 col-lg-4">

              {/* this div for video lists*/} 
              <VideoList
                videos={this.state.videos}
                onSelectVideo={this.onSelectVideo}
              />
            </div>
          </div>
        </div>
        </div>
    );
  }
}

export default App;