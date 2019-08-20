import React from 'react'
import CustomersContainer from '../containers/CustomersContainer'
import {Link} from 'react-router-dom'
import handlingStatus from '../support/cardTag'
import CustomerForm from './CustomerForm'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser, faEnvelope} from '@fortawesome/free-solid-svg-icons'

const CustomerEditForm = props => {

  let name = `${props.information.first_name} ${props.information.last_name}`
  let title = props.information.title
  let statusClass = handlingStatus(props.information.lifecycle_status)
  let status = props.information.lifecycle_status
  let company = props.information.company_name
  let location = props.information.location
  let email = props.information.email
  let phoneNumber = props.information.phone_number
  let dateObject = new Date(props.information.updated_at)
  let lastUpdatedDate = `${dateObject.getMonth() + 1}/${dateObject.getDate()}/${dateObject.getFullYear()}`

  let image =(
    <div className="grid-x ">
      <div className=" grid-container  cell small-offset-3 small-12 fa-7x user-card-picture"><FontAwesomeIcon icon={faUser}/></div>
    </div>)

    if (props.information.profile_picture !== undefined) {
      image = <img className="form-image" src={props.information.profile_picture.url}></img>
    }

  let minititle = "Select a log to pin here!"
  let minibody = ""
  if (props.selectedDiary) {
    minititle = props.selectedDiary.title
    minibody = props.selectedDiary.body
  }

  return (
    <div>
    <div className="grid-x grid-margin-x form-container">
      <div className="cell small-8 callout callout-image-form">
        {image}
      </div>
      <div className="cell auto diary-updated-border">
        <p className="diary-updated">Last Updated: {lastUpdatedDate}</p>
      </div>
      <div className="cell diary-name">
        <div className="grid-x">
          <h3 className="cell small-8">{name}</h3>
        </div>
        <h4 className="diary-title ">{title}</h4>
      </div>
    </div>
    <div className="callout grid-y form-container">
      <div className=" cell grid-x">
        <p className="cell small-2">Status:</p>
        <p className="cell small-offset-1 auto ">
          <span className={`${statusClass} dashboard-tag`}>{status}</span>
        </p>
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
        <p className="cell small-offset-1 auto form-subtitle">{phoneNumber}</p>
      </div>
      <div className=" cell grid-x">
        <p className="cell small-2">Location:</p>
        <p className="cell small-offset-1 auto form-subtitle">{location}</p>
      </div>

      <div className=" cell grid-x grid-margin-x button-grid">
        <Link to={`/users/${props.userInfo.id}/customers/${props.information.id}/edit`}>
          <div onClick={props.handleEdit} className="link-dash cell button primary  ">
            <p className="delete-tag">Edit Customer</p>
          </div>
        </Link>
        <div onClick={props.handleDelete} className="link-dash button small-offset-2 alert">
          <p className="delete-tag">Delete</p>
        </div>
      </div>
    </div>
    <div className="callout grid-y form-container">

      <div className="cell grid-x grid-margin-x">
        <h5 className="grid-container">Pinned log</h5>
      </div>
      <div className="callout mini-comment grid-container ">
        <div className="grid-x">
          <h4 className="cell minititle small-12">{minititle}</h4>
          <p className="cell minibody small-12">{minibody}</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CustomerEditForm
