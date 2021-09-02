  
import React, { Component } from 'react'

class LikesList extends Component {
  render() {
    return (
        <div>
          <p>Liked By:</p>
          <ul>
            {this.props.likes.map((like) => {
              return (
                	<li key={like.id+like.favoriteMovieID}>{this.props.users[like.userID].name}</li>
				)
            })}
          </ul>
		</div>
    )
  }
}

export default LikesList