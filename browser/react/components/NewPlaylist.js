import React from 'react'

export default class NewPlaylist extends React.Component {

	constructor () {
		super()
		this.state = {
			input: '',
			validInput: true
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleValidation () {
		(this.state.input.length <= 16) && (this.state.input.length > 0) ? this.setState({validInput: false}) : this.setState({validInput: true})  
	}

	handleChange (event) {
		this.handleValidation()

		this.setState({
			input: event.target.value
		})
	}

	handleSubmit (event) {
		event.preventDefault()
		this.setState({
			input: ''
		})
	}

	render () {
		return (
			<div className="well">
			  <form onSubmit={this.handleSubmit} className="form-horizontal">
			    <fieldset>
			      <legend>New Playlist</legend>
			      <div className="form-group">
			        <label className="col-xs-2 control-label">Name</label>
			        <div className="col-xs-10">
			          <input value={this.state.input} onChange={this.handleChange} className="form-control" type="text"/>
			        </div>
			      </div>
			      <div className="form-group">
			        <div className="col-xs-10 col-xs-offset-2">
			          <button type="submit" className="btn btn-success" disabled={this.state.validInput}>Create Playlist</button>
			        </div>
			      </div>
			    </fieldset>
			  </form>
			</div>
		)
	}
}
