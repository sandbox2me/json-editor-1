import PropTypes, { object } from 'prop-types';
import React, { PureComponent } from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import { MODE } from '../../../src/constants';
import PreviewContent from './PreviewContent';
import './index.less';
import Toolbar from './Toolbar';
import { JSON_EDITOR_CONFIG } from '../../../src/constants';

import jsonData from '../../mock/json';

export default class JsonEditorController extends PureComponent {
  static propTypes = {
    status: PropTypes.string,
    // 应用场景
    mode: PropTypes.string,
    // open or close
    status: PropTypes.string,
    toggle: PropTypes.func,
    keyInStore: PropTypes.string,
    currentKey: PropTypes.string,
    header: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.func,
    ]),
  };

  static defaultProps = {
    mode: MODE.COMPONENT,
    status: 'close',
    // loacalstorage 中的名称空间
    keyInStore: 'jsonEditor',
    // loacalstorage 中的名称空间中存储的键
    defaultCurrentKey: 'jsonKey',
    header: null,
};

  constructor(props) {
    super(props);
    this.state = {
        jsonData: jsonData,
        currentKey: props.currentKey || props.defaultCurrentKey,
        jsonEditorConfig: { ...JSON_EDITOR_CONFIG },
    };
  }

  componentDidMount() {
    if (!this.state.jsonData) {
      this.updateJsonData(null, true);
    }
  }

  changeJsonData = jsonData => {
    const { keyInStore } = this.props;
    const { currentKey } = this.state;
    sync2Storage(jsonData, keyInStore, currentKey);

    this.updateJsonData(jsonData);
  };

  updateJsonData = (jsonData, fromStorage) => {
    const { keyInStore } = this.props;
    const { currentKey } = this.state;
    if (fromStorage) {
      jsonData = getJsonDataFromStorage(keyInStore, currentKey);
    }
    if (_.isString(jsonData)) jsonData = JSON.parse(jsonData);
    this.setState({ jsonData });
  };

  togglePreview = () => {
    this.props.onToggle();
  }

  changeJsonEditorConfig = jsonEditorConfig => {
    this.setState({ jsonEditorConfig });
  }

  renderPreview() {
    const { status, header, mode } = this.props;
    const { jsonData, jsonEditorConfig } = this.state;

    return (
      <PreviewContent
        mode={mode}
        jsonEditorConfig={jsonEditorConfig}
        status={status}
        jsonData={jsonData}
        onToggle={this.togglePreview}
        onChange={this.changeJsonData}
        onChangeConfig={this.changeJsonEditorConfig}
        header={header ? header : null}
      />
    );
  }

  renderPage() {
    return <span>xixi</span>;
  }

  render() {
    const { mode, status } = this.props;

    const clx = classNames('json-editor-controller');
    return (
      <div>{
        mode === MODE.COMPONENT ?
        this.renderPreview() : 
        this.renderPage()
      }</div>
    );
  }
}

/**
 * 从localStorage中取出指定名称空间中指定key中的数据，并以json格式返回
 * @param {*} namespace 
 * @param {*} key 
 */
function getJsonDataFromStorage(namespace, key) {
  const dataStorage = localStorage.getItem(namespace);

  if (_.isEmpty(dataStorage)) return '';

  const data = _.get(dataStorage, key);

  if (_.isEmpty(data)) return '';

  return JSON.parse(data);
}

/**
 * 将json数据同步存储到localStorage中
 * @param {*} jsonData 
 * @param {*} namespace 
 * @param {*} key 
 */
function sync2Storage(jsonData, namespace, key) {
  const dataStorage = localStorage.getItem(namespace);

  let result;
  if (!dataStorage) {
    result = { [namespace]: { [key]: jsonData } };
  } else {
    const jsonNamespace = JSON.parse(dataStorage);
    jsonNamespace[key] = jsonData;
    result = jsonNamespace;
  }

  result = JSON.stringify(result);
  localStorage.setItem(namespace, result);

  return result;
}
