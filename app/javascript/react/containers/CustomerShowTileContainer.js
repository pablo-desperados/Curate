import React from 'react'
import CustomerDashboard from './CustomerDashboard'
import DiaryFormContainer from './DiaryFormContainer'
import DiaryEntriesComponent from '../components/DiaryEntriesComponent'
import EmptyDiaryEntriesComponent from '../components/EmptyDiaryEntriesComponent'

class CustomerShowTileContainer extends React.Component{
  constructor(props){
    super(props)
    this.state={
      current_customer: {},
      current_user: {},
      diary: []
    }
    this.formPayload = this.formPayload.bind(this)
  }

  formPayload(payload){
    fetch(`/api/v1/customers/${this.state.current_customer.id}/diaries`,{
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response)=>{
      if (response.ok) {
        return response.json()
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error)
      }
    })
    .then((responseBody)=>{
      this.setState({ diary: responseBody})
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
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
      this.setState({current_customer: response.customer, current_user: response.user})
    }))

  }

  render(){
    let entrypage;
    if (this.state.diary.length === 0) {
       entrypage = <EmptyDiaryEntriesComponent/>
    }else {
     entrypage = <DiaryEntriesContainer/>
    }
    return(
    <div className="customer-show grid-x">
      <div className=" cell small-3 callout-diary-creation">
        <CustomerDashboard
          customerInfo={this.state.current_customer}
          currentUser={this.state.current_user}
          handleReload={this.handleReload}
          />
      </div>
      <div className="cell auto grid-container">
        <DiaryFormContainer
          formPayload={this.formPayload} />
        <div className="diary-entries-container cell auto">
          {entrypage}
        </div>
      </div>

    </div>
  )
  }
}
export default CustomerShowTileContainer
