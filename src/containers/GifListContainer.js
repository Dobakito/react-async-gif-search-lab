import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {

    state = {
        gifs: []
    }

    
    apiCall(search){
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
         .then((response) => response.json())
         .then(({data}) => {
            this.setState({ gifs: data.map( gif => ({ 
                url: gif.images.original.url 
                    })
                )}
            )
         })        

    }
    
    render() {
        return (
            <div>
                <GifSearch apiCall={this.apiCall}/>
                <GifList gifs={this.state.gifs}/>
            </div>
        )
    }
}
