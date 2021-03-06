import React, {Component} from 'react';
import Songs from './Songs';
import axios from 'axios';

export default class SinglePlaylist extends Component {

    constructor() {
        super();

        this.state = {
            playlist: {}
        };

    }

    componentWillReceiveProps (nextProps) {
        const currentPlaylist = this.state.playlist.id
        const nextPlaylist = nextProps.match.params.playlistId
        if (currentPlaylist !== nextProps) {
            axios.get(`/api/playlists/${nextPlaylist}`)
            .then(res => res.data)
            .then(newPlaylist => this.setState({
                playlist: newPlaylist
            }));
        }
    }

    componentDidMount() {
        const playlistId = this.props.match.params.playlistId;

        axios.get(`/api/playlists/${playlistId}`)
            .then(res => res.data)
            .then(playlist => this.setState({
                playlist
        }));
    }

    render() {
        const playlist = this.state.playlist;

        return (
            <div>
                <h3>{ playlist.name }</h3>
                <Songs songs={playlist.songs}/> {/** Hooray for reusability! */}
                { playlist.songs && !playlist.songs.length && <small>No songs.</small> }
                <hr />
            </div>
        );
    }
}