import React from 'react'
import axios from 'axios'

export default class NewPlaylist extends React.Component {

    constructor() {
        super()
        this.state = {
            input: '',
            dirtied: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    isValid() {
        return (this.state.input.length <= 16 && this.state.input.length > 0)
    }

    handleChange(event) {
        this.setState({input: event.target.value, dirtied: true})
        this.isValid()
    }

    handleSubmit(event) {
        event.preventDefault()
        this.setState({
            input: '',
            dirtied: false
        })
        this.props.newplaylist(this.state.input)
    }

    render() {
        return (
            <div className="well">
                <form onSubmit={this.handleSubmit} className="form-horizontal">
                    <fieldset>
                        <legend>New Playlist</legend>
                        <div className="form-group">
                            <label className="col-xs-2 control-label">Name</label>
                            <div className="col-xs-10">
                                <input value={this.state.input} onChange={this.handleChange}
                                       className='form-control' type="text"/>
                            </div>
                        </div>
                        {!this.isValid() && this.state.dirtied && <div className="alert alert-warning">Invalid Input</div>}
                        <div className="form-group">
                            <div className="col-xs-10 col-xs-offset-2">
                                <button type="submit" className="btn btn-success" disabled={!this.isValid()}>
                                    Create Playlist
                                </button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}
