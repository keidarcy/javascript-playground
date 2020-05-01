import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import { Link } from 'react-router-dom'

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_success
      launch_date_local
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`

const Launch = (props) => {
  let { flight_number } = props.match.params

  const { loading, error, data } = useQuery(LAUNCH_QUERY, {
    variables: { flight_number: Number(flight_number) }
  })
  if (loading) return null
  if (error) return `Error! ${error}`
  const {
    mission_name,
    flight_number: flight_id,
    launch_year,
    launch_success,
    rocket: { rocket_id, rocket_name, rocket_type }
  } = data.launch
  return (
    <>
      <h1 className="display-4 my-3">
        <span className="text-dark">Mission: </span>
        {mission_name}
      </h1>
      <h4 className="mb-3">Launch Details</h4>
      <ul className="list-group">
        <li className="list-group-item">Flight Number: {flight_id}</li>
        <li className="list-group-item">Launch Year: {launch_year}</li>
        <li className="list-group-item">
          Launch successful:{' '}
          <span className={launch_success ? 'text-success' : 'text-danger'}>
            {launch_success ? 'yes' : 'no'}
          </span>
        </li>
      </ul>
      <h4 className="my-3">Rocket Details</h4>
      <ul className="list-group">
        <li className="list-group-item">Rocket ID: {rocket_id}</li>
        <li className="list-group-item">Rocket Name: {rocket_name}</li>
        <li className="list-group-item">Rocket Type: {rocket_type}</li>
      </ul>
      <hr />
      <Link to="/" className="btn btn-secondary">
        BACK
      </Link>
    </>
  )
}

export default Launch
