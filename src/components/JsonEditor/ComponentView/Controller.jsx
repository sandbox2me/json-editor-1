import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import {Icon} from 'antd';
import PreviewTrigger from './Trigger';
import Preview from '../../Preview';
import EditPanel from '../EditPanel';
import Toolbar from '../Toolbar';

import './index.less';

/**
 * @component 此编辑器功能以组件的方式在页面中调用(对应Json编辑管理页面的独立页面中的调用)
 */
export default class ComponentView extends PureComponent {
  static propTypes = {
    mode: PropTypes.string,
    status: PropTypes.string,
    // Preview触发组件
    trigger: PropTypes.node,
    jsonData: PropTypes.objectOf(PropTypes.any),
    // 对json-editor的配置，如可视化展示方式等
    jsonEditorConfig: PropTypes.objectOf(PropTypes.any),
    onToggle: PropTypes.func,
    onChange: PropTypes.func,
    onChangeConfig: PropTypes.func,
    header: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.func
    ]),
  };

  render() {
    const {mode, status, jsonData, jsonEditorConfig, header, onToggle, onChange, onChangeConfig} = this.props;
    const headers = [
      header,
      <Toolbar key="jsonEditorToolbar" mode={mode} data={jsonEditorConfig} onChange={onChangeConfig}/>
    ];
    const props = {
      status,
      header: headers,
      trigger: <PreviewTrigger />,
      onClose: onToggle,
      onOpen: onToggle,
    };

    return (
      <Preview {...props}>
        <EditPanel jsonEditorConfig={jsonEditorConfig} data={jsonData} onChange={onChange} />
      </Preview>
    );
  }
}
