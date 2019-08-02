import React from 'react'
import CustomerDashboard from './CustomerDashboard'

class CustomerShowTileContainer extends React.Component{
  constructor(props){
    super(props)
    this.state={
      current_customer: {}
    }
  }

  componentDidMount(){
    fetch(`/api/v1/users/${this.props.match.params.user_id}/customers/${this.props.match.params.id}`)
    .then((response) => {
    if (response.ok) {
      return response.json()
    } else {
      let errorMessage = `${response.status} (${response.statusText})`,
      error = new Error(errorMessage);
      throw(error)
    }
    })
    .then((response=>{
      this.setState({current_customer: response.customer})
    }))

  }

  render(){
    return(
    <div className="customer-show grid-x">
      <div className=" cell small-5 callout-diary-creation">
        <CustomerDashboard
          customerInfo={this.state.current_customer}
          />
      </div>

      <div>
      </div>
    </div>
  )
  }
}
export default CustomerShowTileContainer
