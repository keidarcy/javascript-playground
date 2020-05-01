import React from 'react'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import LauncheItem from './LaunchItem'
import MissionKey from './MissionKey'

const LAUNCHES_QUERY = gql`
  {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`
const Launches = () => {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  return (
    <>
      <div className="display-4 my-3">Launches</div>
      <MissionKey />
      {data.launches.map((launch) => (
        <LauncheItem key={launch.flight_number} launch={launch} />
      ))}
    </>
  )
}

export default Launches
