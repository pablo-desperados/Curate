import React from 'react'
import handlingStatus from '../support/cardTag'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'

const CustomerCardUserContainer = (props) => {
  let image
  let date = props.full_date
  let name = `${props.first_name} ${props.last_name}`
  let statusClass = handlingStatus(props.status)
  let status = props.status
  let company = props.company

  if (props.profile_picture.url !== null) {
    image = <img className="card-picture" src={props.profile_picture.url}></img>
  } else {
    image = <div className="grid-x">
              <div className="grid-container cell small-offset-3 small-12 fa-7x user-card-picture">
                <FontAwesomeIcon icon={faUser}/>
              </div>
            </div>
  }

  return (<div className="card grid-y usersearccard ">
    <div className="cell small-5">
      {image}
    </div>
    <div className="small-7 callout card-body card-body-user-customers">
      <div className="grid-y  ">
        <p className="cell card-date">Created: {date}</p>
        <h5 className="card-name ">{name}</h5>
        <div className=" cell info-tag grid-x grid-padding-x">
          <p className="cell small-4 ">Status:</p>
          <div className='cell auto'>
            <p className={`card-tag ${statusClass}`}>{status}</p>
          </div>
        </div>
        <div className=" cell info-tag grid-x grid-padding-x ">
          <div className='cell small-offset-2 auto'>
            <div onClick={() => {
                props.handleCardClick(props)
              }} className="button success import-button">
              <p>Import profile</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>)
}

export default CustomerCardUserContainer
