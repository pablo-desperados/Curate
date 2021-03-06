import React from 'react'
import {Redirect, BrowserRouter} from 'react-router-dom'
import CustomerEditForm from '../components/CustomerEditForm'
import CustomersContainer from './CustomersContainer'
class CustomerDashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete(event) {
    fetch(`/api/v1/customers/${this.props.customerInfo.id}`, {
      credentials: 'same-origin',
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
        throw(error)
      }
    }).then(response => {
      location.pathname = `users/${response.id}/customers`
    })
  }

  render() {
    return (<div className="cell auto dashboard-container">
      <div >
        <CustomerEditForm information={this.props.customerInfo} handleDelete={this.handleDelete} handleEdit={this.handleEdit} userInfo={this.props.currentUser} selectedDiary={this.props.selectedDiary}/>
      </div>

    </div>)
  }
}
export default CustomerDashboard
