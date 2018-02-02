import PropTypes from 'prop-types';
import React from 'react';
import { Icon } from 'antd';

function EditTigger({ visible }) {
  return (
    <div className='json-editor-trigger'>
      <Icon type="edit" />
      JSON
    </div>
  );
}

export default EditTigger;

EditTigger.propTypes = {
  visible: PropTypes.bool,
};
