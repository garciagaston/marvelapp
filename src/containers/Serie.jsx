import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';

import api from '../utils/api';

class Serie extends Component {

  constructor(props) {
      super(props)
      this.state = {
        serie: {},
        loading: true
      }
      api.itemById(this.props.match.params.id, 'series').then(
        result => {
          this.setState({
            serie: result.data.results[0],
            loading: false
          })
          console.log(this.state.serie)
        }
      )
  }

  getId(url) {
    return url.substr(url.lastIndexOf('/')+1)
  }

  render() {
    let { serie, loading } = this.state;
    return (
      <div className='item-page'>
      { (!loading) ?
        <div>
          { serie.title ?
              <div id="item-{serie.id}" className="row">
                <div className="col-md-4">
                  <img className='item-image' src={serie.thumbnail.path + '/portrait_uncanny.jpg'} alt={serie.title}/>
                </div>
                <div className="col-md-8">
                  <div className="page-header">
                    <h1 id="{serie.id}">{serie.title}</h1>
                    <dl className="dl-horizontal">
                      <dt>Description:</dt>
                      <dd>{serie.description}</dd>

                      <dt>Modified:</dt>
                      <dd>{serie.modified}</dd>

                      <dt>End year:</dt>
                      <dd>{serie.endYear}</dd>

                      <dt>Rating:</dt>
                      <dd>{serie.rating}</dd>

                      <dt>Characters:</dt>
                      <dd>{ serie.characters.items.map( character =>
                          <Link key={this.getId(character.resourceURI)} to={ '/characters/' + this.getId(character.resourceURI) } title={character.name}>{character.name}</Link>
                        )}
                      </dd>

                      <dt>Creators:</dt>
                      <dd>{ serie.creators.items.map( creator =>
                          <Link key={this.getId(creator.resourceURI)} to={ '/creators/' + this.getId(creator.resourceURI) } title={creator.name}>{creator.name} ({creator.role})</Link>
                        )}
                      </dd>

                      <dt>Stories:</dt>
                      <dd>{ serie.stories.items.map( story =>
                          <Link key={this.getId(story.resourceURI)} to={ '/stories/' + this.getId(story.resourceURI) } title={story.name}>{story.name}</Link>
                        )}
                      </dd>

                      <dt>Events:</dt>
                      <dd>{ serie.events.items.map( event =>
                          <Link key={this.getId(event.resourceURI)} to={ '/series/' + this.getId(event.resourceURI) } title={event.name}>{event.name}</Link>
                        )}
                      </dd>

                      <dt>External urls:</dt><dd>{ serie.urls.map( url =>
                          <a key={url.url} href={ url.url } title={url.url}>{url.url}</a>
                        )}
                      </dd>
                    </dl>
                  </div>
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
export default Serie
