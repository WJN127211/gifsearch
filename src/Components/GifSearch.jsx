import React, { Component } from "react";
import SearchField from './SearchField';
import GifCard from './GifCard';

class GifSearch extends Component {
    //we create the gifs to hold the data from the ApI
    state = {
        gifs: []
    };

    //Use to treading gifs on initial load
    componentDidMount() {
        //first we have to get the ApI url
        fetch('https://api.giphy.com/v1/gifs/trending?api_key=XRD1DCirW6Y1xqXXwQlSP9Bgro6Dd9Zb')
            .then(response => response.json())
            //we store the data in the state gifs variable
            .then(data => {
                this.setState({ gifs: data.data });
            })
            .catch(error => console.error("Error"));

    }

    //similar to the above function, but we pass the search word as para, then we store the data from api to gifs
    SearchGifs = (searchitem) => {
        fetch(`http://api.giphy.com/v1/gifs/search?q=${searchitem}&api_key=XRD1DCirW6Y1xqXXwQlSP9Bgro6Dd9Zb`)
            .then(response => response.json())
            .then(data => {
                this.setState({ gifs: data.data });
            })
            .catch(error => console.error("Error"));
    }

    RandomSearch = () => {
        fetch('http://api.giphy.com/v1/gifs/random?api_key=XRD1DCirW6Y1xqXXwQlSP9Bgro6Dd9Zb')
            .then(response => response.json())
            .then(data => {
                this.setState({ gifs: [data.data] });
            })
            .catch(error => console.error("Error"));
    }

    render() {
        return (
            <div  style={{
                textAlign: 'center',

            }}>

                {/*then in the GifSearch component we can use this function*/}

                <SearchField SearchGifs={this.SearchGifs} />
                <button type='submit'
                    onClick={this.RandomSearch}
                >Random Search</button>
                <div className='gif-Result'
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center'
                    }}
                >
                    {/*//we use the GifCard to show the result from the result
                    //in the following code gif from gifs, we pass all of the data to the GifCard, use gif as array to display the content from the ApI*/}
                    {this.state.gifs.map(gif => <GifCard key={gif.id} gif={gif} />)}
                </div>
            </div>
        );
    }



}
export default GifSearch;