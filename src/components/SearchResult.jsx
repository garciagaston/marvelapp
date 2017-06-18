import React from 'react';
import PropTypes from 'prop-types';

import ItemList from './ItemList';
import LoadMore from './LoadMore';
import '../assets/stylesheets/SearchResult.scss'

const SearchResult = ({states, searchOnMarvel}) => {
    return (
      <div className="SearchResult">
        { (states.searchResult.length) ?
          <div className="content">
            { (states.q) ?
              <div className="page-header">
                <h3>Showing {states.type} for "{states.q}"</h3>
              </div>
              : <div></div>
            }

            <ItemList items={states.searchResult} q={states.q} type={states.searchType} />
            <LoadMore states={states} searchOnMarvel={searchOnMarvel}/>
          </div>
          :
          <div>Empty list</div>
        }
        {
          (states.loading)
          ? <div className ="bubblingG loading">
            	<span id="bubblingG_1">
            	</span>
            	<span id="bubblingG_2">
            	</span>
            	<span id="bubblingG_3">
            	</span>
            </div>
          : <span></span>
        }
      </div>
    )
}

SearchResult.propTypes = {
  states: PropTypes.object.isRequired,
  searchOnMarvel: PropTypes.func.isRequired
};

export default SearchResult
