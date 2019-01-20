import React from 'react';

class ListFilter extends React.Component {
  applyFilter(){
    console.log(this.props.filterUrl);
  }

    render(){
      return <button key={this.props.filterType} onClick={this.applyFilter.bind(this)}>{this.props.displayName}</button>
    }
}

export default ListFilter;