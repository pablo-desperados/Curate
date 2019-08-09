import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbtack,  faMinusCircle} from '@fortawesome/free-solid-svg-icons'

const DiaryEntriesComponent = props =>{
  let title, body, date, full_date, name

  if (props.information.id !== undefined) {
     title = props.information.title
     body = props.information.body
     date = new Date(props.information.created_at)
     full_date = `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`

     if (props.information.user_id === props.currentUser.id) {
       name= <strong>You</strong>
     }else{
       name= `${props.owner.first_name} ${props.owner.last_name}`
     }
   }
  const element = <a onClick={()=>{props.handlePinClick({title: title, body:body, id: props.information.id})}} className="pin-tag"><FontAwesomeIcon icon={faThumbtack} className="tack"/> Pin this log</a>
  const deletesign = <div onClick={()=>{props.handleDeleteClick({ id: props.information.id})}} className="pin-tag"><FontAwesomeIcon icon={faMinusCircle} className="delete"/> Delete</div>
  return(
      <div className="grid-container callout messages-container animated fadeIn">
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
                Made By: {name}<br/>Create at: {full_date}
              </p>
          </div>
        </div>
      </div>
  )

}


export default DiaryEntriesComponent
