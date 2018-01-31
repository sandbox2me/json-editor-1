import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import Trigger from './Trigger';
import Wrapper from './Wrapper';

// 收起状态 or 打开状态
const MODE= {
  CLOSE: 'close',
  OPEN: 'open',
};
export default class PreviewController extends PureComponent {
  static propTypes = {
    mode: PropTypes.string,
    // trigger中的内容
    trigger: PropTypes.node.required,
    // conent中的内容
    children: PropTypes.node.required,
    // 收起模式下，点击trigger
    onOpen: PropTypes.func,
    // 打开模式下，点击关闭or收起
    onClose: PropTypes.func,
    // 是否能预览
    previewable: PropTypes.bool,
  };

  static defaultProps = {
    mode: MODE.CLOSE,
    previewable: true,
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { mode, trigger, children, previewable, onOpen } = this.props;
    const clx = classNames('preview-controller', { mode });
    const propsTrigger = {
        previewable,
        visible: mode === MODE.CLOSE,
        onOpen,
    };
    const propsWrapper = {
        visible: mode === MODE.OPEN,
        onClose
    };

    return (
      <div className={clx}>
        <Trigger {...propsTrigger}>{trigger}</Trigger>
        <Wrapper {...propsWrapper}>{children}</Wrapper>
      </div>
    );
  }
}
