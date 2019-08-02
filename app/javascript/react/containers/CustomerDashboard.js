import React from 'react'
import CustomerEditForm from '../components/CustomerEditForm'

class CustomerDashboard extends React.Component{
  constructor(props){
  super(props)
  this.state={
    }
    this.handleDelete = this.handleDelete.bind(this)
  }
  handleDelete(event){
    fetch(`/api/v1/customers/${this.props.customerInfo.id}`,{
      credentials: 'same-origin',
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
    if (response.ok) {
      return response.json()
    } else {
      let errorMessage = `${response.status} (${response.statusText})`,
      error = new Error(errorMessage);
      throw(error)
    }
    })

  }

  render(){
    return(
      <div>
        <div className="form-container ">
          <CustomerEditForm
            information={this.props.customerInfo}
            handleDelete={this.handleDelete}
            userInfo={this.props.currentUser}
            />
        </div>

      </div>
    )
  }
}
export default CustomerDashboard
