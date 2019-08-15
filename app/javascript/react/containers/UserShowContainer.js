import React from 'react'
import CustomerCardUserContainer from './CustomerCardUserContainer'
import EmptyUserContainer from '../components/EmptyUserContainer'

class UserShowContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      customerList: [],
      chosenUser: {},
      currentUser: {},
      errorMessage: ""
    }
    this.handleCardClick = this.handleCardClick.bind(this)
  }

  handleCardClick(event) {
    fetch(`/api/v1/users/${this.state.currentUser.id}/customers`, {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(event),
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
    }).then((responseBody) => {
      if (responseBody.warning !== undefined) {
        alert("You already have this customer in your dashboard")
      } else {
        this.setState({errorMessage: "thanks"})
      }
    })
  }

  componentDidMount() {
    fetch(`/api/v1/users/${this.props.match.params.user_id}`).then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
        throw(error)
      }
    }).then((response) => {
      this.setState({customerList: response.customers, chosenUser: response.user, currentUser: response.current_user})
    })
  }

  render() {
    let name
    if (this.state.chosenUser.id !== undefined) {
      name = `${this.state.chosenUser.first_name} ${this.state.chosenUser.last_name}`
    }
    let customers
    if (this.state.customerList.length === 0) {
      let userId = this.props.match.params.user_id
      customers = <EmptyUserContainer user={this.state.chosenUser}/>
    } else {
      customers = this.state.customerList.map(customer => {
        let date = new Date(customer.created_at)
        let full_date = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
        return (<CustomerCardUserContainer key={customer.id} id={customer.id} handleCardClick={this.handleCardClick} full_date={full_date} first_name={customer.first_name} last_name={customer.last_name} company={customer.company} status={customer.lifecycle_status} profile_picture={customer.profile_picture}/>)
      })
    }

    let messagesDiv;
    if (this.state.errorMessage.length > 0) {
      messagesDiv = <div className="callout cell success">
        <h4>The user was successfully imported</h4>
      </div>
    } else {
      messagesDiv = ""
    }
    return (<div className="grid-x">
      <div className="grid-container grid-index-title cell full animated fadeInDown">
        <div className="grid-x">
          <h1 className="cell auto">{name}&#39;s Contacts</h1>

        </div>
        <div className="grid-x ">
          <h3 className="cell">Select a customer tile to import their profile into your dashboard</h3>
          {messagesDiv}
        </div>
      </div>

      <div className="cell grid-x grid-container grid-customer-index">
        {customers}
      </div>
    </div>)
  }
}

export default UserShowContainer
