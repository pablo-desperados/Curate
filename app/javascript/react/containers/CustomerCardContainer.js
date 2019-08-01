import React from 'react'
import handlingStatus from '../support/cardTag'

const CustomerCardContainer=(props)=>{
    let profile_picture = props.profile_picture.url
    let date = props.full_date
    let first_name = props.first_name
    let last_name = props.last_name
    let statusClass = handlingStatus(props.status)
    let status= props.status
    let company;
    if (props.company != undefined) {
      company = props.company
    }else {
      company = "N/A"
    }
    debugger
  return(
    <div className="card grid-y click-function" onClick={props.handleCardClick}>
        <div className="cell small-5">
          <img className="card-picture" src={profile_picture}></img>
        </div>
        <div className="small-7 callout card-body">
          <div className="grid-y">
            <p className="cell card-date">Created: {date}</p>
            <h4 className="card-name">{first_name} {last_name}</h4>
            <div className=" cell info-tag grid-x grid-padding-x">
              <p className="cell small-4 status-tag">Status:</p>
              <div className='cell auto'>
                  <p className={`card-tag ${statusClass}`}>{status}</p>
              </div>
            </div>
            <div className=" cell info-tag grid-x grid-padding-x">
              <p className="cell small-4">Company:</p>
              <div className='cell auto'>
                  <p>{company}</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CustomerCardContainer
