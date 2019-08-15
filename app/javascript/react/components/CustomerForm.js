import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'

class CustomerForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      first_name: "",
      last_name: "",
      lifecycle_status: "",
      email: "",
      company_name: "",
      phone_number: "",
      location: "",
      title: "",
      profile_picture: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    let state = event.target.name
    this.setState({[state]: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()

    let payload = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      lifecycle_status: this.state.lifecycle_status,
      email: this.state.email,
      company_name: this.state.company_name,
      phone_number: this.state.phone_number,
      location: this.state.location,
      title: this.state.title,
      profile_picture: this.state.profile_picture
    }
    fetch(`/api/v1/customers/${this.props.match.params.id}`, {
      credentials: 'same-origin',
      method: 'PATCH',
      body: JSON.stringify(payload),
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
    }).then((response) => {
      this.props.history.push(`/users/${response.id}/customers`)
    }).catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentDidMount() {

    fetch(`/api/v1/customers/${this.props.match.params.id}`).then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
        throw(error)
      }
    }).then((response) => {
      this.setState({
        first_name: response.customer.first_name,
        last_name: response.customer.last_name,
        company_name: response.customer.company_name,
        lifecycle_status: response.customer.lifecycle_status,
        email: response.customer.email,
        location: response.customer.location,
        phone_number: response.customer.phone_number,
        title: response.customer.title,
        profile_picture: response.customer.profile_picture.url
      })
    })
  }

  render() {
    let image;
    if (this.state.profile_picture !== null) {
      image = <img className="form-image" src={this.state.profile_picture}></img>
    } else {

      image = <div className="grid-x ">
        <div className=" grid-container cell small-offset-4 small-12 fa-10x user-card-picture"><FontAwesomeIcon icon={faUser}/></div>
      </div>
    }
    return (<div>
      <div className="grid-container grid-customer-diary">
        <h3>Select a tile to access a customer's diary</h3>
      </div>
      <div className="grid-container form-container-main customer-add ">
        <div className="callout cell small-offset-1 callout-image-form">
          {image}
        </div>
        <div className="callout callout-diary-input callout-edit">
          <form onSubmit={this.handleSubmit}>
            <label>
              First Name:
              <input name="first_name" type="text" value={this.state.first_name} onChange={this.handleChange}/>
            </label>

            <label>
              Last Name:
              <input name="last_name" type="text" value={this.state.last_name} onChange={this.handleChange}/>
            </label>

            <label>
              Status:
              <select name="lifecycle_status" value={this.state.lifecycle_status} onChange={this.handleChange}>
                <option value="Not contacted">Not contacted</option>
                <option value="Contacted">Contacted</option>
                <option value="Disqualified">Disqualified</option>
                <option value="New Lead">New Lead</option>
                <option value="Current customer">Current customer</option>
                <option value='Champion'>Champion</option>
              </select>
            </label>

            <label>
              Company:
              <input name="company_name" type="text" value={this.state.company_name} onChange={this.handleChange}/>
            </label>

            <label>
              Job title:
              <input name="title" type="text" value={this.state.title} onChange={this.handleChange}/>
            </label>

            <label>
              Phone:
              <input name="phone_number" type="text" value={this.state.phone_number} onChange={this.handleChange}/>
            </label>

            <label>
              Email:
              <input name="email" type="text" value={this.state.email} onChange={this.handleChange}/>
            </label>

            <label>
              Location:
              <input name="location" type="text" value={this.state.location} onChange={this.handleChange}/>
            </label>

            <input type="submit" value="Submit"/>
          </form>
        </div>
      </div>
    </div>)
  }
}

export default CustomerForm
