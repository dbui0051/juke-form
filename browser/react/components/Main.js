import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import StatefulAlbums from './StatefulAlbums';
import SingleAlbum from './SingleAlbum';
import AllArtists from './AllArtists';
import SingleArtist from './SingleArtist';
import SinglePlaylist from './SinglePlaylist';
import Sidebar from './Sidebar';
import Player from './Player';
import NewPlaylist from './NewPlaylist';
import axios from 'axios';

export default class Main extends Component {

  constructor () {
    super()
    this.state = {
      playlists: []
    }
    this.addPlaylist = this.addPlaylist.bind(this)
  }

  componentDidMount () {
    axios.get('api/playlists')
      .then(response => {
          //console.log(data)
          this.setState({
              playlists: response.data
          })
    })
    .catch(error => (console.log(error)));
  }

  addPlaylist (playlistName) {
    axios.post('/api/playlists', { name: playlistName })
      .then(res => res.data)
      .then(playlist => {
        this.setState({
          playlists: [...this.state.playlists, playlist]
        })
    });
  }

  render () {
    return (
      <Router>
        <div id="main" className="container-fluid">
          <div className="col-xs-2">
            <Sidebar playlist={this.state.playlists}/>
          </div>
          <div className="col-xs-10">
            <Switch>
              <Route exact path="/albums" component={StatefulAlbums} />
              <Route path="/albums/:albumId" component={SingleAlbum} />
              <Route exact path="/artists" component={AllArtists} />
              <Route path="/artists/:artistId" component={SingleArtist} />
              <Route path="/newplaylist" render={
                () => <NewPlaylist newplaylist={this.addPlaylist} /> } />

              <Route path="/playlist/:playlistId" component={SinglePlaylist} />
              <Route component={StatefulAlbums} />
            </Switch>
          </div>
          <Player />
        </div>
    </Router>
    );
  }
}
