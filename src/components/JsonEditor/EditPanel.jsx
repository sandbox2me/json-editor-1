import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import JsonView from 'react-json-view';

const EDITOR_STYLE = {
  padding: '10px',
  borderRadius: '3px',
  margin: '10px 0px',
};

const OPER_TYPE = {
  ADD: 'add',
  DELETE: 'delete',
  EDIT: 'edit',
};

export default class EditPanel extends PureComponent {
  static propTypes = {
    onChage: PropTypes.func,
    data: PropTypes.any,
  };

  static defaultJsonData = {
    theme: 'isotope', // monokai
    src: null,
    collapsed: false,
    collapseStringsAfter: 15,
    onAdd: true,
    onEdit: true,
    onDelete: true,
    displayObjectSize: true,
    enableClipboard: true,
    indentWidth: 4,
    displayDataTypes: true,
    iconStyle: 'triangle',
    style: EDITOR_STYLE,
  };

  constructor(props) {
    super(props);

    this.state = {};
    for (var key in EditPanel.defaultJsonData) {
      this.state[key] = EditPanel.defaultJsonData[key];
    }
    this.state.src = props.data;
  }

  changeJsonData = operType => event => {
    if (operType in OPER_TYPE) {
      const {updated_src: jsonData} = event;
      this.props.onChage(jsonData);
    }
  };

  render() {
    const {onAdd, onEdit, onDelete, ...others} = this.state;
    const props = {
      ...others,
      name: null,
      onAdd: onAdd ? () => this.changeJsonData(OPER_TYPE.ADD) : false,
      onEdit: onEdit ? () => this.changeJsonData(OPER_TYPE.EDIT) : false,
      onDelete: onDelete ? () => this.changeJsonData(OPER_TYPE.DELETE) : false,
    };

    const clx = classNames('json-editor-panel');
    return (
      <div className={clx}>
        <JsonView {...props} />
      </div>
    );
  }
}
