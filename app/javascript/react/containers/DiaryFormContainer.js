import React from 'react'

class DiaryFormContainer extends React.Component{
  constructor(props){
    super(props)
    this.state={
      title: "",
      body: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event){
    event.preventDefault();
    let payload = {
      title: this.state.title,
      body: this.state.body
    }
    this.props.formPayload(payload)
    this.setState({title: "", body: ""})
  }

  handleChange(event){
    let state = event.target.name
	  this.setState({[state]:event.target.value})
  }

  render(){
    return(
      <div className="grid-x">
        <div className="cell auto ">
          <div className="grid-y grid-container diary-input-container">
            <div className="grid-x">
              <div className="cell auto">
                <h3>Log a new interaction</h3>
              </div>
            </div>
            <form onSubmit={this.handleSubmit}>
              <div className="cell callout callout-diary-input diary-form">
                <label className="label-text">Title
                  <input name="title" id="diary-input" value={this.state.title} type="text" placeholder="Enter a title..." onChange={this.handleChange}></input>
                </label>

                <div className="grid-x grid-margin-x">
                  <div className="cell small-10">
                    <label className="label-text">Body
                      <textarea name="body" id="diary-input" value={this.state.body} placeholder="Write your customer interactions here!" onChange={this.handleChange} />
                    </label>
                  </div>
                  <div className="cell small-2">
                    <input className="button diary-action-button" type="submit" value="Submit" />
                  </div>
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default DiaryFormContainer
