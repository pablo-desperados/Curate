import React from 'react'
import CustomerCardContainer from './CustomerCardContainer'

class CustomersContainer extends React.Component{
  constructor(props){
    super(props)
      this.state ={
        customerList:[]
      }
    this.fetchUserCustomers = this.fetchUserCustomers.bind(this)
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
    let customers = this.state.customerList.map(customer=>{
      let date = new Date(customer.created_at)
      let full_date = `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`
      return(
        <CustomerCardContainer
        key={customer.id}
        full_date={full_date}
        first_name={customer.first_name}
        last_name={customer.last_name}
        company={customer.company}
        status={customer.lifecycle_status}
        profile_picture={customer.profile_picture}
        />
      )
    })
    return(
      <div className="grid-container">
        <div className="grid-x">
        {customers}
        </div>
      </div>
    )
  }



}

export default CustomersContainer
