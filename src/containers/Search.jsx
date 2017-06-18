import React, { Component } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';

import SearchForm from '../components/SearchForm';
import SearchResult from '../components/SearchResult';
import constants from '../constants';
import api from '../utils/api';
import '../assets/stylesheets/Search.scss'

export default class Search extends Component {

  constructor(props) {
      super(props)
      this.state = {
          q: '',
          searchType: 'characters',
          searchResult: [],
          offset: 0,
          total: 0,
          count: 0,
          sortBy: '',
          loading: true,
          queryUrl: queryString.parse(location.search)
      }
      this.marvelSearch = this.marvelSearch.bind(this);
  }

  componentDidMount() {
    this.initSearchPage()
  }

  initSearchPage() {
    this.marvelSearch('', 'characters', 0)
  }

  marvelSearch(q, type = 'characters', offset = 0) {
    this.setState({
      loading: true
    })
    type = type ? type : 'characters';
    api.search(q, type, offset).then((response) => {
      let items = response.data.results
      let searchResult = (offset !== 0) ? [...this.state.searchResult, ...items] : items
      this.setState({
          q: q,
          searchType: type,
          searchResult: searchResult,
          offset: response.data.offset,
          total: response.data.total,
          count: response.data.count,
          loading: false,
      })
    })
  }

  render() {
        const { marvelSearch } = this
        return (
            <div className="search">
                <SearchForm searchOnMarvel={marvelSearch} queryUrl={this.state.queryUrl}/>
                <SearchResult states={this.state} searchOnMarvel={marvelSearch}/>
            </div>
        )
    }

}
