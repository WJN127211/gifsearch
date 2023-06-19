import React, { Component } from 'react';


class SearchField extends Component {
    //we create the state to hold the searchitem
    state = {
        searchitem: 'Start To Search'
    };

    // in this function we wll handle input change, so when we
    //enter something to the input field, it well set the value equal to  the serchitem
    HandleInputChange = (event) => {
        this.setState({ searchitem: event.target.value });
    };

    //in this function, when we submit it will use the function searchGif in the GifSearch component
    HandleFormSubmit = (event) => {
        event.preventDefault();
        this.props.SearchGifs(this.state.searchitem);


    };

    // HandleRandomSubmit=(event)=>{
    //     event.preventDefault();
    //     this.props.RandomSearch();
    // }

    render() {
        return (
            <div>
                <form onSubmit={this.HandleFormSubmit}
                    style={{
                        textAlign: 'center',

                    }

                    }
                >
                    <input type='text' 
                           value={this.state.searchitem} 
                           onChange={this.HandleInputChange} 
                           style={{
                            width:'700px',
                            height:'40px',
                            margin:'50px',
                            borderRadius: '20px',
                            
                           }}
                           
                    />
                    <div>
                        <button type='submit'>Search</button>
                    </div>

                </form>
                {/* <button type='submit' onClick={this.HandleRandomSubmit}>Random</button> */}
            </div>
        );
    }


}

export default SearchField;