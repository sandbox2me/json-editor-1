import PropTypes from 'prop-types';
import React from 'react';
import { Icon } from 'antd';

function PreviewTrigger({ visible }) {
  return (
    <div className='json-editor-trigger'>
      <Icon type="edit" />
      JSON
    </div>
  );
}

export default PreviewTrigger;

PreviewTrigger.propTypes = {
  visible: PropTypes.bool,
};
