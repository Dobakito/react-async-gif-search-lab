import React, { Component } from 'react'

export default class GifList extends Component {

    listGifs = () => {
        this.props.gifs.forEach(gif => 
           `${gif.url}`
        );
    }
    
    render() {
        return (
            <ul>
                <img src={this.listGifs} alt="gif"/>
            </ul>
        )
    }
}
