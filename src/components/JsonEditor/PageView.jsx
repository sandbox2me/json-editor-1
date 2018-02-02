import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import {Icon} from 'antd';
import PreviewTrigger from './PreviewTrigger';
import Preview from '../Preview';
import EditPanel from './EditPanel';
import Toolbar from './Toolbar';

import './pageView.less';

export default class PageView extends PureComponent {
  static propTypes = {
    mode: PropTypes.string,
    jsonData: PropTypes.objectOf(PropTypes.any),
    // 对json-editor的配置，如可视化展示方式等
    jsonEditorConfig: PropTypes.objectOf(PropTypes.any),
    onChange: PropTypes.func,
    onChangeConfig: PropTypes.func,
    header: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  };

  render() {
    const {
      mode,
      jsonData,
      jsonEditorConfig,
      header,
      onChange,
      onChangeConfig,
    } = this.props;

    return (
      <div className="json-page-wrapper">
        <div className="json-page-head">
          <div className="json-page-header">{header}</div>
          <Toolbar
            key="jsonEditorToolbar"
            mode={mode}
            data={jsonEditorConfig}
            onChange={onChangeConfig}
          />
        </div>
        <div className="json-page-body">
          <EditPanel
            jsonEditorConfig={jsonEditorConfig}
            data={jsonData}
            onChange={onChange}
          />
        </div>
      </div>
    );
  }
}
