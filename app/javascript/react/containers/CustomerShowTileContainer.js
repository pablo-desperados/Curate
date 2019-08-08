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
      designated_user: {},
      diary: [],
      selectedDiary:{},
      current_user: {}
    }
    this.formPayload = this.formPayload.bind(this)
    this.handlePinClick = this.handlePinClick.bind(this)
    this.handleDeleteClick = this.handleDeleteClick.bind(this)
  }

  handleDeleteClick(event){
    event["current_customer"] = this.state.current_customer.id
    fetch(`/api/v1/customers/${this.state.designated_user.id}/diaries/${event}`,{
      credentials: 'same-origin',
      method: 'DELETE',
      body: JSON.stringify(event),
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
      this.setState({diary: responseBody })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));

  }
  handlePinClick(event){
    fetch(`/api/v1/customers/${this.state.current_customer.id}/diaries/${event.id}`,{
      credentials: 'same-origin',
      method: 'PATCH',
      body: JSON.stringify(event),
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
      this.setState({selectedDiary: responseBody})
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  formPayload(payload){
    payload["user"] = this.state.designated_user
    fetch(`/api/v1/customers/${this.props.match.params.id}/diaries`,{
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
      this.setState({ diary :responseBody})
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
      this.setState({current_customer: response.customer, designated_user: response.user, diary: response.diaries, selectedDiary: response.selected, current_user: response.current_user})
    }))

  }

  render(){
    let entrypage;
    if (this.state.diary.length === 0) {
       entrypage = <EmptyDiaryEntriesComponent/>
    }else {
     entrypage = this.state.diary.map((entry) =>{

         return(
           <DiaryEntriesComponent
             key={entry.diary.id}
             information={entry.diary}
             owner={entry.user}
             currentUser={this.state.current_user}
             handlePinClick={this.handlePinClick}
             handleDeleteClick={this.handleDeleteClick}
            />
         )
     })
    }


    return(
    <div className="customer-show grid-x messages-container">
      <div className="cell small-3 callout-diary-creatio grid-y" >
        <CustomerDashboard
          customerInfo={this.state.current_customer}
          currentUser={this.state.designated_user}
          handleReload={this.handleReload}
          selectedDiary ={this.state.selectedDiary}
          />
      </div>
      <div className="cell auto grid-container ">
        <DiaryFormContainer
          formPayload={this.formPayload} />
        <div className="diary-entries-container grid-container cell E">
          {entrypage}
        </div>
      </div>

    </div>
  )
  }
}
export default CustomerShowTileContainer
