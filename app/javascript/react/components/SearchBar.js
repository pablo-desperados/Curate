import React, {Component} from 'react'

class SearchBar extends Component{
  constructor(props){
    super(props)
    this.state={
      searchString: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event){
    event.preventDefault()
    const body = JSON.stringify({ search_string: this.state.searchString})
    fetch('/api/v1/users/search', {
      method: 'POST',
      body: body,
      credentials: 'same-origin',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
    })
    .then(response=> response.json())
    .then((response)=>{
      this.props.handlepayload(response)
    })

  }

  handleChange(event){
  const newSearchString = event.target.value
   this.setState({ searchString: newSearchString })
  }

  render(){

    return(
      <div className="grid-x">
        <form onSubmit={this.handleSubmit}>
          <label className="cell search-bar-title">Click on a user tile below or search for them. </label>
          <div className="grid-x grid-margin-x">
            <input type='text' name='searchString' className="cell small-9" value={this.state.searchString} onChange={this.handleChange} />
            <input type='submit' value='Submit' className="cell small-2 add-customer-button search-button button success"/>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
