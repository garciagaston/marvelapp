import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Constants from '../constants';

class SortList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sortBy: this.props.queryUrl.sort ? this.props.queryUrl.sort : ''
    }
    this.sortItems = this.sortItems.bind(this)
  }

  sortItems(e) {
      this.setState({
        sortBy: e.target.id
      })
      this.props.onSortItems(e.target.id)
  }

  render() {
    let {sortBy} = this.state
    return (
      <div className="sort-list">
        <span className="pull-left sort-by">Sort by:</span>
        <ul className="nav nav-pills nav-left">
        {
          Constants.sort.map( (type, i) =>
            <li key={type.action} className={(sortBy === type.action || (sortBy==='' && i==0))? 'active' : ''} >
              <Link id={type.action} to={'/?sort=' + type.action } onClick={this.sortItems}>{type.title}</Link>
            </li>
          )
        }
        </ul>
      </div>
    )
  }
}

SortList.propTypes = {
  onSortItems: PropTypes.func,
  queryUrl: PropTypes.object,
};

export default SortList
