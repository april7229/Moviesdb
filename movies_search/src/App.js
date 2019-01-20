import React, {Component} from 'react';
import './css/app.css';
import MovieRow from './MovieRow.js';
import NowPlayingFilter from './filters/NowPlayingFilter';
import $ from 'jquery';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.performSearch("a");
    }

    performSearch(searchTerm) {
        console.log("Perform search using moviedb");
        const urlString = "https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=" + searchTerm;


        $.ajax({
            url: urlString,
            success: (searchResults) => {
                console.log("Fetched data successfully");
                //  console.log(searchResults);
                const results = searchResults.results
                // console.log(results[0]);

                var movieRows = [];

                results.forEach((movie) => {
                    movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path;
                    // console.log(movie.poster_path);
                    const movieRow = <MovieRow key={movie.id} movie={movie}/>
                    movieRows.push(movieRow);
                })
                this.setState({rows: movieRows});
            },
            error: (xhr, status, err) => {
                console.error("Failed to fetch data");
            }
        })
    }

    searchChangeHandler(event) {
        console.log(event.target.value);
        const boundObject = this;
        const searchTerm = event.target.value;
        this.performSearch(searchTerm);
    }

    render() {
        return (
            <div>
                <table className="titleBar">
                    <tbody>
                    <tr>
                        <td>
                            <img alt="app icon" width="50" src="movies_icon.jpg"/>
                        </td>
                        <td>
                            <h1> MoviesDB Search </h1>

                        </td>
                    </tr>
                    </tbody>
                </table>

                <input class="searchBar" onChange={this.searchChangeHandler.bind(this)} placeholder="Enter search term"/>
                <NowPlayingFilter/>
                {this.state.rows}
            </div>

        );
    }
}


export default App;
