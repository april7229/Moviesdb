import React, {Component} from 'react';
import './css/app.css';
import MovieRow from './MovieRow.js';
import $ from 'jquery';
import Filters from "./filters/Filters";

<<<<<<< HEAD
class App extends Component
{
  constructor( props )
  {
    super( props );
    this.state = {};   
    this.performSearch( "a" );
  }
  performSearch( searchTerm )
  {
    console.log( "Perform search using moviedb" );
    // const urlString = "https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=" + searchTerm;
    const urlString =
  'https://api.themoviedb.org/3/movie/now_playing?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=&language=en-US&page=1' +
  searchTerm

  
    $.ajax( {
      url: urlString,
      success: ( searchResults ) =>
      {
        console.log( "Fetched data successfully" );
        //  console.log(searchResults);
        const results = searchResults.results
        // console.log(results[0]);
=======
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {filter: "All", query: "", baseurl: "https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085"};
        this.filterChangeHandler = this.filterChangeHandler.bind(this);
        this.searchChangeHandler = this.searchChangeHandler.bind(this);
    }
>>>>>>> c7fae18811891db98db926746076eea9f160b585

    performSearch(value, baseurl) {
        console.log("Perform search using moviedb");
        let urlString = baseurl;
        if (value === "" || value === null) {
            return;
        }

        urlString += "&query=" + value;

        $.ajax({
            url: urlString,
            success: (searchResults) => {
                console.log("Fetched data successfully");
                console.log(searchResults);

                const results = searchResults.results;

                let movieRows = [];

                results.forEach((movie) => {
                    movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path;
                    const movieRow = <MovieRow key={movie.id} movie={movie}/>
                    movieRows.push(movieRow);
                });

                this.setState({rows: movieRows, query: value, baseurl: baseurl});
            },
            error: (xhr, status, err) => {
                console.error(`Failed to fetch data ${err}`);
            }
        });
    }

    searchChangeHandler(event) {
        console.log(event.target.value);

        this.performSearch(event.target.value, this.state.baseurl);
    }

    filterChangeHandler(event) {

        console.log(event);
        this.performSearch(this.state.query, event);
    }

    render() {
        return (
            <div>
                <table className="titleBar">
                    <tbody>
                    <tr>
                        <td className="logo">
                            <img alt="app icon" src="movies_icon.jpg"/>
                        </td>
                        <td className="title">
                            <h1> MoviesDB Search </h1>
                        </td>
                        <td className="searchBarContainer">
                            <input className="searchBar" onChange={this.searchChangeHandler.bind(this)} placeholder="Enter search term"/>
                        </td>
                        <Filters changeHandler={this.filterChangeHandler}/>
                    </tr>
                    </tbody>
                </table>
                {this.state.rows}
            </div>

        );
    }
}

export default App;
