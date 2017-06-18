import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';

import api from '../utils/api';
import '../assets/stylesheets/Character.scss'

class Character extends Component {

  constructor(props) {
      super(props)
      this.state = {
        character: {},
        loading: true
      }
      api.itemById(this.props.match.params.id, 'characters').then(
        result => {
          this.setState({
            character: result.data.results[0],
            loading: false
          })
          console.log(this.state.character)
        }
      )
  }

  getId(url) {
    return url.substr(url.lastIndexOf('/')+1)
  }

  render() {
    let { character, loading } = this.state;
    return (
      <div className='item-page'>
      { (!loading) ?
        <div>
          { (character.name) ?
              <div id="item-{character.id}" className="row">
                <div className="col-md-4">
                  <img className='item-image' src={character.thumbnail.path + '/portrait_uncanny.jpg'} alt={character.name}/>
                </div>
                <div className="col-md-8">
                  <div className="page-header">
                    <h1 id="{character.id}">{character.name}</h1>
                  </div>
                  <dl className="dl-horizontal">
                    <dt className={character.description?'':'hidden'}>Description:</dt>
                    <dd className={character.description?'':'hidden'}>{character.description}</dd>

                    <dt>Modified:</dt>
                    <dd>{character.modified}</dd>

                    <dt>Comics:</dt>
                    <dd>{ character.comics.items.map( comic =>
                        <Link key={this.getId(comic.resourceURI)} to={ '/comics/' + this.getId(comic.resourceURI) } title={comic.name}>{comic.name}</Link>
                      )}
                    </dd>

                    <dt>Series:</dt>
                    <dd>{ character.series.items.map( serie =>
                        <Link key={this.getId(serie.resourceURI)} to={ '/series/' + this.getId(serie.resourceURI) } title={serie.name}>{serie.name}</Link>
                      )}
                    </dd>

                    <dt>Stories:</dt>
                    <dd>{ character.stories.items.map( story =>
                        <Link key={this.getId(story.resourceURI)} to={ '/stories/' + this.getId(story.resourceURI) } title={story.name}>{story.name}</Link>
                      )}
                    </dd>

                    <dt>Events:</dt>
                    <dd>{ character.events.items.map( story =>
                        <Link key={this.getId(story.resourceURI)} to={ '/stories/' + this.getId(story.resourceURI) } title={story.name}>{story.name}</Link>
                      )}
                    </dd>

                    <dt>External urls:</dt>
                    <dd>{ character.urls.map( url =>
                        <a key={url.url} href={ url.url } title={url.url}>{url.url}</a>
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
export default Character
