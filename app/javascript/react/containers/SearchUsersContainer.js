import React from 'react'
import SearchBar from '../components/SearchBar'
import UserTile from '../components/UserTile'

class SearchUsersContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      current_user: ""
    }
    this.handlepayload = this.handlepayload.bind(this)
    this.handleCardClick = this.handleCardClick.bind(this)
  }
  handlepayload(information) {
    this.setState({users: information})
  }

  handleCardClick(event) {
    this.props.history.push(`/users/${event}`)
  }

  componentDidMount() {
    fetch('/api/v1/users').then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
        throw(error)
      }
    }).then((response) => {
      this.setState({users: response.users, current_user: response.current_user})
    }).catch((error) => console.error(`Error in fetch: ${error.message}`))
  }

  render() {

    let users = "";
    if (this.state.users[0] !== undefined) {
      users = this.state.users.map(element => {
        return (<UserTile key={element.user.id} information={element} handleCardClick={this.handleCardClick}/>)
      })

    }
    return (<div className="grid-container">
      <div className="grid-x">
        <div className="grid-container">
          <SearchBar handlepayload={this.handlepayload}/>
        </div>
      </div>
      <div className="grid-x grid-margin-x grid-user-index">
        {users}
      </div>
    </div>)
  }

}

export default SearchUsersContainer
