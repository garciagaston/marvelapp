import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';

import api from '../utils/api';
import '../assets/stylesheets/Character.scss'

class Comic extends Component {

  constructor(props) {
      super(props)
      this.state = {
        comic: {},
        loading: true
      }
      api.itemById(this.props.match.params.id, 'comics').then(
        result => {
          this.setState({
            comic: result.data.results[0],
            loading: false
          })
          console.log(this.state.comic)
        }
      )
  }

  getId(url) {
    return url.substr(url.lastIndexOf('/')+1)
  }

  render() {
    let { comic, loading } = this.state;
    return (
      <div className='item-page'>
      { (!loading) ?
        <div>
          { comic.title ?
              <div id="item-{comic.id}" className="row">
                <div className="col-md-4">
                  <img className='item-image' src={comic.thumbnail.path + '/portrait_uncanny.jpg'} alt={comic.title}/>
                </div>
                <div className="col-md-8">
                  <div className="page-header">
                    <h1 id="{comic.id}">{comic.title}</h1>
                  </div>
                  <dl className="dl-horizontal">
                    <dt>Description:</dt>
                    <dd>{comic.description}</dd>

                    <dt>Modified:</dt>
                    <dd>{comic.modified}</dd>

                    <dt>Characters:</dt>
                    <dd>{ comic.characters.items.map( character =>
                        <Link key={this.getId(character.resourceURI)} to={ '/characters/' + this.getId(character.resourceURI) } title={character.name}>{character.name}</Link>
                      )}
                    </dd>

                    <dt>Creators:</dt>
                    <dd>{ comic.creators.items.map( creator =>
                        <Link key={this.getId(creator.resourceURI)} to={ '/creators/' + this.getId(creator.resourceURI) } title={creator.name}>{creator.name} ({creator.role})</Link>
                      )}
                    </dd>

                    <dt>Diamond Code:</dt>
                    <dd>{comic.diamondCode}</dd>

                    <dt>EAN:</dt>
                    <dd>{comic.ean}</dd>

                    <dt>Format:</dt>
                    <dd>{comic.format}</dd>

                    <dt>Issue Number:</dt>
                    <dd>{comic.issueNumber}</dd>

                    <dt>Page Count:</dt>
                    <dd>{comic.pageCount}</dd>

                    <dt>Series:</dt>
                    <dd>
                        <Link key={this.getId(comic.series.resourceURI)} to={ '/series/' + this.getId(comic.series.resourceURI) } title={comic.series.name}>{comic.series.name}</Link>
                    </dd>

                    <dt>Stories:</dt>
                    <dd>{ comic.stories.items.map( story =>
                        <Link key={this.getId(story.resourceURI)} to={ '/stories/' + this.getId(story.resourceURI) } title={story.name}>{story.name}</Link>
                      )}
                    </dd>

                    <dt>Price:</dt>
                    <dd>
                      <ul className="list-unstyled">
                        { comic.prices.map( price =>
                          <li key={price.type}>${price.price} ({price.type})</li>
                        )}
                      </ul>
                    </dd>

                    <dt>External urls:</dt><dd>{ comic.urls.map( url =>
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
export default Comic
