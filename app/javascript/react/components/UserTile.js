import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'

const UserTile = props =>{

  let name = `${props.information.user.first_name} ${props.information.user.last_name}`
  let number = `${props.information.user_num}`
const picture = <div className="cell small-offset-2 small-10 fa-7x user-card-picture"><FontAwesomeIcon icon={faUser}/></div>

  return(
    <div className="callout cell small-4  click-function grid-container usercardcontainer">
    <div className="cell small-5 grid-container">
      <div className="grid-x grid-container">
        {picture}
      </div>
    </div>
    <div className="small-7 callout card-body">
      <div className="grid-y">

        <div className=" cell info-tag grid-x grid-padding-x">
          <p className="cell auto status-tag"> <strong>{name}</strong></p>
        </div>
        <div className=" cell info-tag grid-x grid-padding-x">
          <p className="cell small-4">Customers:</p>
          <div className='cell small-offset-2 auto'>
            {number}
          </div>
        </div>
      </div>
    </div>
    </div>
  )

}


export default  UserTile
