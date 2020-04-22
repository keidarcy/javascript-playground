import React, { Component } from 'react'

class ListGroup extends Component {
  state = {}
  render() {
    const { items, onItemSelect, textProperty, valueProperty } = this.props
    return (
      <React.Fragment>
        <ul className="list-group col">
          <li className="list-group-item">All Genres</li>
          {items.map((genre) => (
            <li
              key={genre[valueProperty]}
              style={{ cursor: 'pointer' }}
              className="list-group-item"
              onClick={() => onItemSelect(genre)}
            >
              {genre[textProperty]}
            </li>
          ))}
        </ul>
      </React.Fragment>
    )
  }
}

export default ListGroup
