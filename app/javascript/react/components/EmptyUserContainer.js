import React from 'react'

const EmptyUserContainer = props =>{
  let name;
  if (props.user.id !== undefined) {
    name=`${props.user.first_name} ${props.user.last_name}`
  }
  return(

    <div className="grid-x dashboard-blank callout alert">
      <div className="grid-x">
        <h3 className="cell small-12 ">{name} doesn't have any users yet.</h3>
      </div>
    </div>
  )

}


export default  EmptyUserContainer
