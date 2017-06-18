import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const ItemList = ({items, q, type}) =>
  <div className="item-list row">
    <div className="col-md-12">
      { items.map( item =>
          <Item key={item.id} item={item} type={type}/>
      )}
    </div>
  </div>

  ItemList.propTypes = {
    items: PropTypes.array.isRequired,
    q: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  };

export default ItemList
