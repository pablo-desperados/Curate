import React from 'react'
import SearchBar from '../components/SearchBar'
import UserTile from '../components/UserTile'

class SearchUsersContainer extends React.Component{
  constructor(props){
    super(props)
    this.state={
      users: [],
      current_user: ""
    }
    this.handlepayload = this.handlepayload.bind(this)
    this.handleCardClick = this.handleCardClick.bind(this)
  }
  handlepayload(information){
    this.setState({users: information})
  }

  handleCardClick(event){
    fetch("api/v1/hubspot/",{
      credentials: 'same-origin',
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
    .then((response)=>{
      debugger
    })
    // this.props.history.push(`/users/${this.state.current_user.id}/users/${event}`)
  }

  componentDidMount(){
    fetch('/api/v1/users')
    .then((response) => {
    if (response.ok) {
      return response.json()
    } else {
      let errorMessage = `${response.status} (${response.statusText})`,
      error = new Error(errorMessage);
      throw(error)
    }
    })
    .then((response)=>{
      this.setState({users: response.users, current_user: response.current_user})
    })
    .catch((error) =>
      console.error(`Error in fetch: ${error.message}`))
  }


  render(){

    let users="";
    if (this.state.users[0] !== undefined) {
      users = this.state.users.map(element=>{
        return(
        <UserTile
          key={element.user.id}
          information={element}
          handleCardClick={this.handleCardClick} />)
      })

    }
    return(
    <div className="grid-container">
      <div className="grid-x">
        <div className="grid-container">
          <SearchBar
            handlepayload={this.handlepayload}/>
        </div>
      </div>
      <a href="https://app.hubspot.com/oauth/authorize?scope=contacts&redirect_uri=https://curate-io.herokuapp.com/mainpage&client_id=d67d1212-e949-4316-bd76-059051d30bf3">rjviu</a>
      <div className="grid-x grid-margin-x grid-user-index">
        {users}
      </div>
    </div>
  )
  }

}


export default SearchUsersContainer
