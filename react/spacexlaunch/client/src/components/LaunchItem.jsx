import React from 'react'
import { Link } from 'react-router-dom'

function LaunchItem({
  launch: { flight_number, mission_name, launch_success, launch_date, launch_date_local }
}) {
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h4>
            Mission:
            <span className={launch_success ? 'text-success' : 'text-danger'}>
              {mission_name}
            </span>
          </h4>
          <h4>Date: {launch_date_local}</h4>
          <div className="col-md-3">
            <Link to={`/launch/${flight_number}`} className="btn btn-secondary">
              detail
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LaunchItem
