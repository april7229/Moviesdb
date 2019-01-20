import React from 'react';
import NowPlayingFilter from "./NowPlayingFilter";
import AllFilter from "./AllFilter";
import TopRatedFilter from "./PopularFilter";
import PopularFilter from "./PopularFilter";
import ListFilter from "./TopRatedFilter";

class Filters extends React.Component {
    constructor(props) {
        super(props);
        var selectionState = {notifySelected: this.toggleFilters, selected: "All"};
        this.state = {props, selectionState};
        console.log(props);
    }

    toggleFilters(e) {
        this.setState({...this.props, notifySelected: this.toggleFilters, selected: "All"});
    }

    render() {
        return <td>
            <div>
                <ListFilter {...this.props} displayName={"All"} url={"https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085"} />

                <ListFilter  {...this.props} displayName={"Top Rated"} url="https://api.themoviedb.org/3/movie/top_rated?api_key=1b5adf76a72a13bad99b8fc0c68cb085&language=en-US&page=1" />

                <ListFilter  {...this.props}  displayName={"Now Playing"} url={"https://api.themoviedb.org/3/movie/now_playing?api_key=1b5adf76a72a13bad99b8fc0c68cb085&language=en-US&page=1"}/>

                <ListFilter  {...this.props} displayName={"Popular"} url={"http://api.themoviedb.org/3/movie/popular?api_key=1b5adf76a72a13bad99b8fc0c68cb085"} />
            </div>
        </td>
    }
}

export default Filters;