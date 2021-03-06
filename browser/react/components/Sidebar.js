import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {

  const playLists = props.playlist;

  return (
    <sidebar>
      <img src="juke.svg" className="logo" />
      <section>
        <h4 className="menu-item">
          <Link to="/albums">ALBUMS</Link>
        </h4>
      </section>
      <section>
        <h4 className="menu-item">
          <Link to="/artists">ARTISTS</Link>
        </h4>
      </section>
      <hr />
      <section>
        <h4 className="text-muted">PLAYLISTS</h4>
        <h4>
          <Link className="btn btn-primary btn-block" to="/newplaylist">
            <span className="glyphicon glyphicon-plus"></span> PLAYLIST
          </Link>
        </h4>
      </section>
      <hr />
        <ul className="list-unstyled">
        {
          playLists&&playLists.map(playlist => {
            return (
              <li key={playlist.id} className="playlist-item menu-item">
                <Link to={`/playlist/${playlist.id}`}>{playlist.name}</Link>
              </li>
            )
          }) 
        } 
        </ul>
    </sidebar>
  );
}

export default Sidebar;
