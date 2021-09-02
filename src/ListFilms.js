  
import React, { Component } from 'react';
import LikesList from './LikesList';

class ListFilms extends Component {
  render() {
    return (
      	<ul>
          {this.props.movies.map((movie) => {
            const likesArr = this.props.profiles.filter(obj => parseInt(obj.favoriteMovieID, 10) === movie.id);
            return (
                <li key={movie.id}>
                  <h2>{movie.name}</h2>
                  {likesArr.length
                    ? <LikesList key={movie.id} likes={likesArr} users={this.props.users} />
                    : <p>None of the current users liked this movie</p>
                  }
                </li>
            );
          })}
		</ul>
	)
  }
}

export default ListFilms