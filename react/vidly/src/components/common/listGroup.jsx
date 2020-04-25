import React, { Component } from 'react'

class ListGroup extends Component {
  state = {}
  render() {
    const { items, selectedGenre, onItemSelect, textProperty, valueProperty } = this.props
    return (
      <React.Fragment>
        <ul className="list-group col">
          {items.map((genre) => (
            <li
              key={genre[valueProperty]}
              style={{ cursor: 'pointer' }}
              className={
                selectedGenre === genre ? 'list-group-item active' : 'list-group-item'
              }
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

ListGroup.defaultProps = {
  textProperty: 'name',
  valueProperty: '_id'
}

export default ListGroup
