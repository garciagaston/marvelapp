import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';

import api from '../utils/api';

class Story extends Component {

  constructor(props) {
      super(props)
      this.state = {
        story: {},
        loading: true
      }
      api.itemById(this.props.match.params.id, 'stories').then(
        result => {
          this.setState({
            story: result.data.results[0],
            loading: false
          })
          console.log(this.state.story)
        }
      )
  }

  getId(url) {
    return url.substr(url.lastIndexOf('/')+1)
  }

  render() {
    let { story, loading } = this.state;
    return (
      <div className='item-page'>
      { (!loading) ?
        <div>
          { story.title ?
              <div id="item-{story.id}" className="row">
                <div className="col-md-4">
                  { story.thumbnail ?
                      <img className='item-image' src={story.thumbnail.path + '/portrait_uncanny.jpg'} alt={story.title}/>
                    : <img className='item-image' src={'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/portrait_uncanny.jpg'} alt={story.title}/>
                  }
                </div>
                <div className="col-md-8">
                  <div className="page-header">
                    <h1 id="{story.id}">{story.title}</h1>
                    <dl className="dl-horizontal">
                      <dt>Description:</dt>
                      <dd>{story.description}</dd>

                      <dt>Modified:</dt>
                      <dd>{story.modified}</dd>

                      <dt>Creators:</dt>
                      <dd>{ story.creators.items.map( creator =>
                          <Link key={this.getId(creator.resourceURI)} to={ '/creators/' + this.getId(creator.resourceURI) } title={creator.name}>{creator.name} ({creator.role})</Link>
                        )}
                      </dd>

                      <dt>Characters:</dt>
                      <dd>{ story.characters.items.map( character =>
                          <Link key={this.getId(character.resourceURI)} to={ '/characters/' + this.getId(character.resourceURI) } title={character.name}>{character.name}</Link>
                        )}
                      </dd>

                      <dt>Series:</dt>
                      <dd>{ story.series.items.map( serie =>
                          <Link key={this.getId(serie.resourceURI)} to={ '/series/' + this.getId(serie.resourceURI) } title={serie.name}>{serie.name}</Link>
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
export default Story
