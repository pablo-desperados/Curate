import React from 'react'

const EmptyCustomerContainer = props =>{

  return(

    <div className="grid-x dashboard-blank callout alert">
      <div className="grid-x">
        <h3 className="cell small-12 ">You haven't added any customers<br/>Create a new customer profile now!</h3>
        <div className="grid-container grid-x">
          <a href={`/users/${props.userId}/customers/new/`} type="button" className="cell customer-add-button button">Add a new customer</a>
        </div>
      </div>
    </div>
  )

}


export default  EmptyCustomerContainer
