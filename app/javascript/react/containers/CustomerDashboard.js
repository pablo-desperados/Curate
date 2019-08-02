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
      fetch(
        fetch(`/api/v1/users/${this.props.match.params.id}/customers`)
        .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
          throw(error)
        }
        })
      )
  }

  render(){
    return(
      <div>
        <div className="form-container ">
          <CustomerEditForm
            information={this.props.customerInfo}
            handleDelete={this.handleDelete}/>
        </div>

      </div>
    )
  }
}
export default CustomerDashboard
