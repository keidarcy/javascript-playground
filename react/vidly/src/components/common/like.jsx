import React, { Component } from 'react'

class Like extends Component {
  state = {}
  render() {
    let classes = 'fa fa-heart'
    if (!this.props.liked) classes += '-o'
    return (
      <React.Fragment>
        <i
          style={{ cursor: 'pointer' }}
          onClick={this.props.onLikeToggle}
          className={classes}
          aria-hidden="true"
        ></i>
      </React.Fragment>
    )
  }
}

export default Like
