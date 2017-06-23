import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../assets/stylesheets/Item.scss';

const Item = ({item, type}) => {
  let name = (type === 'comics' || type === 'series' || type === 'events') ? item.title : (type === 'creators') ? item.fullName : item.name;
  return (
      <Link to={'/' + type + '/' + item.id} className="item pull-left" title={item.name}>
        <h4>{ name }</h4>
        <img className='image_available' src={item.thumbnail.path + '/portrait_incredible.jpg'} alt={name}/>
        <img className='image_not_available' src="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/portrait_incredible.jpg" alt={name}/>
      </Link>
  )
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired
};

export default Item
