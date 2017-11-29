import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { groupBy, map } from 'lodash';
import { Icon } from '@blueprintjs/core';

import Breadcrumbs from 'components/common/Breadcrumbs';
import DualPane from 'components/common/DualPane';

import './HomeScreen.css';

function getPath(url) {
  return new URL(url).pathname;
}

class HomeScreen extends Component {
  render() {
    const { collections, categories } = this.props;
    const collectionsByCategory = groupBy(collections.results, 'category');
    return (
      <DualPane>
        <DualPane.InfoPane>
          <Breadcrumbs root>
            <Link to={'/'}><Icon iconName="folder-open" /></Link>
          </Breadcrumbs>
          <h1>
            <Link to={'/'}>
              Aleph
            </Link>
          </h1>
          <p className="tagline"><em>93,801,670</em><br />leads for your investigations</p>
          <p>Search millions of documents and datasets, from public sources, leaks and investigations.</p>
        </DualPane.InfoPane>
        <DualPane.ContentPane>
          <p>Aleph's database contains:</p>
          <ul>
            {map(collectionsByCategory, (group, categoryId) => (
              <li key={categoryId}>
                {categories[categoryId]}
                <ul>
                  {group.map(collection => (
                    <li key={collection.id}>
                      <Link to={getPath(collection.ui)}>
                        {collection.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </DualPane.ContentPane>
      </DualPane>
    );
  }
}

const mapStateToProps = state => {
  return {
    collections: state.collections,
    categories: state.metadata.categories,
  };
};

export default connect(mapStateToProps)(HomeScreen);