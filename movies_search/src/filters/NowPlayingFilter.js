import React from 'react';
import ListFilter from './ListFilter.js';

class NowPlayingFilter extends ListFilter {
    constructor(props) {
        super(props);
        this.state = {};
        console.log(props);
    }

    fixState(res) {
        this.setState({highlight: false});

        if (res === "Now Playing") {
            this.setState({highlight: true});
        }

        this.render();
    }

    render() {
        return <ListFilter url={this.state.url} {...this.props}  highlight={this.state.highlight}/>
    }
}

export default NowPlayingFilter;