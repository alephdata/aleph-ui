import React, { Component } from 'react';

import DualPane from 'src/components/common/DualPane';
import TextViewer from './viewers/TextViewer';

class DocumentContent extends Component {
  render() {
    const { document } = this.props;
    return (
      <DualPane.ContentPane>
        <h1>{document.file_name}</h1>
        {document.text && (
          <TextViewer text={document.text} />
        )}
      </DualPane.ContentPane>
    );
  }
}

export default DocumentContent;