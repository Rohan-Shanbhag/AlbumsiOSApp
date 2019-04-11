import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';


class AlbumList extends Component {
  state = { albums: [] };


  componentWillMount() {
    axios.get('https://gist.githubusercontent.com/jaruserickson/ff698758924cefcf75a65e715c3c9a03/raw/ced8ce2313c9dfa937e9bb6bb18c77b8c071b73d/albums.json')
      .then(response => this.setState ({albums: response.data}));
  }

  renderAlbums(){
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} record={album} />
    );

  }

  render() {
    console.log(this.state);
    return (
        <ScrollView>
          {this.renderAlbums()}
        </ScrollView>
      );
  }
}


export default AlbumList;
