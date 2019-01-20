import React from 'react';

class ListFilter extends React.Component {
    constructor(props) {
        super(props);
        this.handleFilterClick = this.handleFilterClick.bind(this);
        this.state = {highlight: false};
        console.log(props.url);
    }

    handleFilterClick(e) {
        this.props.changeHandler(this.props.url);
    }

    render() {
        return <div className={this.state.highlight === true ? "btn checked" : "btn unchecked"} onClick={this.handleFilterClick}>
            <a className="btnLink">{this.props.displayName}</a>
        </div>
    }
}

export default ListFilter;