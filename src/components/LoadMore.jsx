import React from 'react';
import PropTypes from 'prop-types';
import '../assets/stylesheets/LoadMore.scss'

const LoadMore = ({states, searchOnMarvel}) => {

  const loadMoreItems = e => {
      e.preventDefault()
      searchOnMarvel(states.q, states.searchType, states.offset + 20)
  }

  return (
    <div className="load-more text-center">
      {
        (states.offset + states.count < states.total)
        ? <button className="btn btn-primary" onClick={loadMoreItems}>Load More</button>
        : <span></span>
      }

    </div>
  )
}

LoadMore.propTypes = {
  states: PropTypes.object.isRequired,
  searchOnMarvel: PropTypes.func.isRequired
};

export default LoadMore
