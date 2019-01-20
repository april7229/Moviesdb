import React from 'react';
import ListFilter from './ListFilter.js';

class NowPlayingFilter extends ListFilter {
    viewMovie() {
        // console.log("Trying to view movie");
        // console.log(this.props.movie.title);
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id;
        window.location.href = url
    }

    render() {
        return <ListFilter displayName={"Now Playing"} />
    }
}

export default NowPlayingFilter;