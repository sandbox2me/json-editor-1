import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import {Icon} from 'antd';
import PreviewTrigger from './PreviewTrigger';
import Preview from '../Preview';
import EditPanel from './EditPanel';

export default class PreviewContent extends PureComponent {
  static propTypes = {
    status: PropTypes.string,
    // Preview触发组件
    trigger: PropTypes.node,
    jsonData: PropTypes.objectOf(PropTypes.any),
    onToggle: PropTypes.func,
    onChange: PropTypes.func,
    header: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.func
    ]),
  };

  render() {
    const {status, jsonData, header, onToggle, onChange} = this.props;

    const props = {
      status,
      header,
      trigger: <PreviewTrigger />,
      onClose: onToggle,
      onOpen: onToggle,
    };

    return (
      <Preview {...props}>
        <EditPanel data={jsonData} onChange={onChange} />
      </Preview>
    );
  }
}
