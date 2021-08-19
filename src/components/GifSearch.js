import React, { Component } from 'react'

export default class GifSearch extends Component {
constructor(props) {
    super(props)

    this.state = {
         search: ""
    }
}

    handleChange = (event) => {
        this.setState({
            search: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.apiCall(this.state.search)
    }

    render() {
        return (
            <div>
                <form
                onSubmit={this.handleSubmit}
                >
                <input
                onChange={this.handleChange}
                value={this.state.search}
                type="text"
                ></input>
                </form>
            </div>
        )
    }
}
