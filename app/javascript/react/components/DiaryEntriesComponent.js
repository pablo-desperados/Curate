import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbtack,  faMinusCircle} from '@fortawesome/free-solid-svg-icons'

const DiaryEntriesComponent = props =>{
  let title, body, date, full_date
  if (props.information.id !== undefined) {
     title = props.information.title
     body = props.information.body
     date = new Date(props.information.created_at)
     full_date = `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`
   }
  const element = <div onClick={()=>{props.handlePinClick({title: title, body:body, id: props.information.id})}} className="pin-tag"><FontAwesomeIcon icon={faThumbtack} className="tack"/> Pin this entry</div>
  const deletesign = <div className="pin-tag"><FontAwesomeIcon icon={faMinusCircle} className="delete"/> delete</div>
  return(
      <div className="grid-container messages-container">
        <div className="grid-y callout comment">

            <div className="cell small-4 text text-title grid-x grid-margin-x">
              <p className="cell small-9">{title}</p>
              <div className="cell auto ">
                {element}
              </div>
              <div className="cell auto">
                {deletesign}
              </div>
            </div>
            <div className="grid-x grid-padding-x">
              <p className=" cell small-9 text text-body">
                {body}
              </p>
                <p className="cell secondary small-offset-2 text-tag auto">
                  Made By: {props.user.first_name} {props.user.last_name}<br/>Create at: {full_date}
              </p>
            </div>
        </div>
      </div>
  )

}


export default DiaryEntriesComponent
