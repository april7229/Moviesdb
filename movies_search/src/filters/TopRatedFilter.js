import React from 'react';
import ListFilter from './ListFilter.js';

class TopRatedFilter extends ListFilter {
    constructor(props) {
        super(props);
        this.state = {};
        console.log(props);
    }

    fixState(res) {
        this.state.highlight = false;
        if (res === "Top Rated") {
            this.state.highlight = true;
        }

        this.render();
    }

    render() {
        return <ListFilter url={this.props.url} highlight={this.state.highlight} {...this.props}/>
    }
}

export default TopRatedFilter;