import React from 'react';
import PropTypes from 'prop-types';
import SortList from './SortList';
import '../assets/stylesheets/SearchForm.scss'

const SearchForm = ({searchOnMarvel=f=>f, queryUrl}) => {
    let _query, _type, _sort

    const submit = e => {
        e.preventDefault()
        searchOnMarvel(_query.value, _type.value, _sort)
    }

    const sortItems = (sortType) => {
      //console.log('Sort by:', sortType)
    }

    return (
        <div className="jumbotron">
          <form className="search-form" id="search-form" onSubmit={submit}>
            <div className="row search-row">
              <div className="col-md-6">
                <div className="input-group">
                  <input type="text" id="query" className="form-control input-lg" placeholder="Name starts with. (e.g. Sp, Peter)" ref={input => _query = input} />
                  <span className="input-group-btn">
                    <input type="submit" className="btn btn-primary input-lg" value="Search" />
                  </span>
                </div>
              </div>
              <div className="col-md-3">
                <select className="form-control input-lg" ref={select => _type = select}>
                  <option value="">-Type-</option>
                  <option value="characters">Character</option>
                  <option value="comics">Comic</option>
                  <option value="creators">Creator</option>
                  <option value="events">Event</option>
                  <option value="series">Serie</option>
                </select>
              </div>
            </div>
            <SortList onSortItems={sortItems} queryUrl={queryUrl}/>
          </form>
        </div>
    )
}

SearchForm.propTypes = {
  searchOnMarvel: PropTypes.func,
  queryUrl: PropTypes.object,
};

export default SearchForm
