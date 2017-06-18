import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';

import api from '../utils/api';

class Creator extends Component {

  constructor(props) {
      super(props)
      this.state = {
        creator: {},
        loading: true
      }
      api.itemById(this.props.match.params.id, 'creators').then(
        result => {
          this.setState({
            creator: result.data.results[0],
            loading: false
          })
          console.log(this.state.creator)
        }
      )
  }

  getId(url) {
    return url.substr(url.lastIndexOf('/')+1)
  }

  render() {
    let { creator, loading } = this.state;
    return (
      <div className='item-page'>
      { (!loading) ?
        <div>
          { creator.fullName ?
              <div id="item-{creator.id}" className="row">
                <div className="col-md-4">
                  <img className='item-image' src={creator.thumbnail.path + '/portrait_uncanny.jpg'} alt={creator.title}/>
                </div>
                <div className="col-md-8">
                  <div className="page-header">
                    <h1 id="{creator.id}">{creator.fullName}</h1>
                  </div>
                  <dl className="dl-horizontal">

                    <dt>Modified:</dt>
                    <dd>{creator.modified}</dd>

                    <dt>Series:</dt>
                    <dd>{ creator.series.items.map( serie =>
                        <Link key={this.getId(serie.resourceURI)} to={ '/series/' + this.getId(serie.resourceURI) } title={serie.name}>{serie.name}</Link>
                      )}
                    </dd>

                    <dt>Stories:</dt>
                    <dd>{ creator.stories.items.map( story =>
                        <Link key={this.getId(story.resourceURI)} to={ '/stories/' + this.getId(story.resourceURI) } title={story.name}>{story.name}</Link>
                      )}
                    </dd>

                  </dl>
                </div>
              </div>
            : <div>not found</div>
          }
        </div>
        : <div className ="bubblingG loading">
            <span id="bubblingG_1">
            </span>
            <span id="bubblingG_2">
            </span>
            <span id="bubblingG_3">
            </span>
          </div>
      }
      </div>
    )
  }
}

export default Creator
