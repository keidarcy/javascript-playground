import React from 'react'

// class Navbar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         Navbar
//         <button className="btn-info btn">{this.props.TotalCounters}</button>
//         {this.props.TotalCounters}
//       </nav>
//     )
//   }
// }

const Navbar = ({ TotalCounters }) => {
  console.log('Navbar - rendered')
  return (
    <nav className="navbar navbar-light bg-light">
      Navbar
      <button className="btn-info btn">{TotalCounters}</button>
      {TotalCounters}
    </nav>
  )
}

export default Navbar
