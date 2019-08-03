import React from 'react'
import CustomersContainer from '../containers/CustomersContainer'
import {Link} from 'react-router-dom'
import handlingStatus from '../support/cardTag'

const CustomerEditForm = props =>{
  let image, last_updated, name, title, status, statusclass, company, location, email, phone_number
  debugger
  if (props.information.id !== undefined) {
    image = props.information.profile_picture.url
    last_updated = new Date(props.information.updated_at)
    last_updated = `${last_updated.getMonth()+1}/${last_updated.getDate()}/${last_updated.getFullYear()}`
    name = `${props.information.first_name} ${props.information.last_name}`
    title = props.information.title
    statusclass = handlingStatus(props.information.lifecycle_status)
    status = props.information.lifecycle_status
    company = props.information.company_name
    location = props.information.location
    email = props.information.email
    phone_number = props.information.phone_number
  }

  return(
    <div>
      <div className="grid-x grid-margin-x callout form-container">
          <div className="cell small-8 callout callout-image-form">
            <img className="form-image" src={image}></img>
          </div>
          <div className="cell auto">
            <p className="diary-updated">Last Updated: {last_updated}</p>
          </div>
          <div className="cell diary-name">
            <h1>{name}</h1>
            <h3 className="diary-title ">{title}</h3>
          </div>
      </div>
      <div className="callout grid-y form-container">
        <div className=" cell grid-x">
          <p className="cell small-2">Status:</p>
          <p className="cell small-offset-1 auto "><span className={`${statusclass} dashboard-tag`}>{status}</span></p>
        </div>
        <div className=" cell grid-x">
          <p className="cell small-2">Email:</p>
          <p className="cell small-offset-1 auto ">{email}</p>
        </div>
        <div className=" cell grid-x">
          <p className="cell small-2">Company:</p>
          <p className="cell small-offset-1 auto form-subtitle">{company}</p>
        </div>
        <div className=" cell grid-x">
          <p className="cell small-2">Phone:</p>
          <p className="cell small-offset-1 auto form-subtitle">{phone_number}</p>
        </div>
        <div className=" cell grid-x">
          <p className="cell small-2">Location:</p>
          <p className="cell small-offset-1 auto form-subtitle">{location}</p>
        </div>

        <div className=" cell grid-x grid-margin-x">
          <div onClick={props.handleDelete} className="link-dash button alert cell small-offset-3 small-6"><p className="delete-tag">Delete user</p></div>
        </div>
      </div>
    </div>
  )
}

export default CustomerEditForm
