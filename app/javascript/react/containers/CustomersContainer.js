import React from 'react'
import { Redirect} from "react-router-dom"
import CustomerEditForm from '../components/CustomerEditForm'
import CustomerCardContainer from './CustomerCardContainer'
import EmptyCustomerContainer from '../components/EmptyCustomerContainer'

class CustomersContainer extends React.Component{
  constructor(props){
    super(props)
      this.state ={
        customerList:[]
      }
    this.fetchUserCustomers = this.fetchUserCustomers.bind(this)
    this.handleCardClick = this.handleCardClick.bind(this)
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

  handleCardClick(event){
    window.location.href = `/users/${this.props.match.params.id}/customers/${event.toString()}`
  }

  fetchUserCustomers(){
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
    .then(response=> {
      this.setState({ customerList: response})
    })
    .catch((error) =>
      console.error(`Error in fetch: ${error.message}`))
    }

    componentDidMount(){
      this.fetchUserCustomers()
    }

  render(){
    let customers
    if (this.state.customerList.length === 0) {
      let userId = this.props.match.params.id
     customers = <EmptyCustomerContainer
       userId={userId}/>
   }else {
      customers = this.state.customerList.reverse().map(customer=>{
       let date = new Date(customer.created_at)
       let full_date = `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`
       return(
         <CustomerCardContainer
           key={customer.id}
           id={customer.id}
           handleCardClick={this.handleCardClick}
           full_date={full_date}
           first_name={customer.first_name}
           last_name={customer.last_name}
           company={customer.company}
           status={customer.lifecycle_status}
           profile_picture={customer.profile_picture}
           />
       )
     })
   }
    return(
      <div className="grid-x">
        <div className="grid-container grid-index-title cell full animated fadeInDown">
          <div className="grid-x">
            <h1 className="cell auto">Your Contacts</h1>
          </div>
          <div className="grid-x ">
            <h3 className="cell">Select a tile to access a customer's diary</h3>
          </div>
        </div>

        <div className="cell grid-x grid-container grid-customer-index">
            {customers}
        </div>


      </div>
    )
  }



}
export default CustomersContainer
