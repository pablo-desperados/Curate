import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'

const UserTile = props => {
  let infoId = props.information.user.id
  let name = `${props.information.user.first_name} ${props.information.user.last_name}`
  let number = `${props.information.user_num}`
  let image;
  if (props.information.user.profile_photo.url !== null) {
    image = <img className="form-image form-image-user" src={props.information.user.profile_photo.url}></img>
  } else {
    image =
    <div className="grid-x ">
      <div className=" grid-container  default-user-picture  cell small-offset-3 small-12 fa-7x user-card-picture"><FontAwesomeIcon icon={faUser}/></div>
    </div>
  }
  return (<div className="callout card-user cell small-4  click-function grid-container usercardcontainer" onClick={() => {
      props.handleCardClick(infoId)
    }}>
    <div className="cell small-5 grid-container">
      <div className="grid-x ">
        {image}
      </div>
    </div>
    <div className="small-7 callout card-body card-body-user">
      <div className="grid-y">

        <div className=" cell info-tag grid-x grid-padding-x">
          <p className="cell auto status-tag">
            <strong>{name}</strong>
          </p>
        </div>
        <div className=" cell info-tag grid-x grid-padding-x">
          <p className="cell small-4">Customers:</p>
          <div className='cell small-offset-2 auto'>
            {number}
          </div>
        </div>
      </div>
    </div>
  </div>)
}

export default UserTile
