import React from 'react';
import ListFilter from './ListFilter.js';

class TopRatedFilter extends ListFilter {
    constructor(props) {
        super(props);
     //   this.state = };
        console.log(props);
    }

    fixState(res) {
        this.state.highlight = false;
        if (res === "Popular") {
            this.state.highlight = true;
        }

        this.render();
    }

    render() {
        return <ListFilter {...this.props} url={this.state.url}  highlight={this.state.highlight}/>
    }
}

export default TopRatedFilter;