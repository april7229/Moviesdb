import React from 'react';
import ListFilter from './ListFilter.js';

class AllFilter extends ListFilter {
    constructor(props) {
        super(props);
        //this.state = {url: };
        console.log(props);
    }

    fixState(res) {
        this.state.highlight = false;
        if (res == "All") {
            this.state.highlight = true;
        }

        this.render();
    }

    render() {
        return <ListFilter  {...this.props} highlight={this.state.highlight} />
    }
}

export default AllFilter;