import 'whatwg-fetch';
import constants from '../constants';

const search = (q, type = 'characters', offset = 0) => {
  let apiUrl = constants.apiUrl + '/' + type + '?apikey=' + constants.publicKey + '&limit=' + constants.limit
  if (offset > 0) {
   apiUrl+= '&offset=' + offset
  }
  if (q !== '') {
    apiUrl += '&' + constants.searchField[type] + '=' + q;
  }
  return fetch( apiUrl ).then(
    (response) => response.json()
  ).catch(function(ex) {
    console.log('parsing failed', ex)
  })
}

const itemById = (id, type) => {
  let apiUrl = constants.apiUrl + '/' + type + '/' + id + '?apikey=' + constants.publicKey;
  return fetch( apiUrl ).then(
    (response) => response.json()
  )
}

const api = {
  search,
  itemById
}

export default api
