import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faThumbtack, faMinusCircle} from '@fortawesome/free-solid-svg-icons'

const DiaryEntriesComponent = props => {

    let title = props.information.title
    let body  = props.information.body
    let date = new Date(props.information.created_at)
    let completeDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`

    let entryAuthor =  `${props.owner.first_name} ${props.owner.last_name}`

    if (props.information.user_id === props.currentUser.id) {
      entryAuthor = <strong>You</strong>
    }

  const element =(
    <a onClick={() => {props.handlePinClick({title: title, body: body, id: props.information.id})}} className="pin-tag">
        <FontAwesomeIcon icon={faThumbtack} className="tack"/>
        Pin this log
    </a>)

  const deletesign =(
    <div onClick={() => {props.handleDeleteClick({id: props.information.id})}} className="pin-tag">
      <FontAwesomeIcon icon={faMinusCircle} className="delete"/>Delete
    </div>)

  return (<div className="grid-container callout messages-container animated fadeIn">
    <div className="grid-y comment">
      <div className="cell small-4 text text-title grid-x grid-margin-x">
        <p className="cell title-tag small-8">{title}</p>
        <div className="cell auto pin-tag ">
          {element}
        </div>
        <div className="cell auto pin-tag">
          {deletesign}
        </div>
      </div>
      <div className="grid-x grid-padding-x">
        <p className=" cell small-9 text text-body">
          {body}
        </p>
        <p className="cell secondary text-tag auto">
          Made By: {entryAuthor}<br/>Create at: {completeDate}
        </p>
      </div>
    </div>
  </div>)

}

export default DiaryEntriesComponent
