import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import {MODE, I18N} from '../../../../src/constants';
import Theme from './Theme';
/*   Collapsed,
  CollapseStringsAfter,
  EnableClipboard,
  IconStyle,
  FILEINPUT,
  FILEOUTPUT, */
console.log('111111');
console.log(Theme);
import './index.less';

const MODE_TOOLTYPE_COMMON = ['theme']; // , 'collapsed', 'collapseStringsAfter', 'enableClipboard', 'iconStyle'
const MODE_TOOLTYPE = {
  COMPONENT: MODE_TOOLTYPE_COMMON,
  PAGE: [] /* MODE_TOOLTYPE_COMMON.concat([FILEINPUT, FILEOUTPUT]) */,
};
const STR_COMPONENT = {
  theme: Theme,
/*   collapsed: Collapsed,
  collapseStringsAfter: CollapseStringsAfter,
  enableClipboard: EnableClipboard,
  iconStyle: IconStyle, */
};
export default class ToolbarController extends PureComponent {
  static propTypes = {
    mode: PropTypes.string,
    data: PropTypes.object,
    onChange: PropTypes.func,
  };

  change = type => value => {
    const {data, onChange} = this.props;
    const newData = {...data, [type]: value};
    onChange(newData);
  };

  render() {
    const {mode, data} = this.props;
    const tooltypes = MODE_TOOLTYPE[mode];
console.log('------tooltypes tooltypes---------');
console.log(data);
    const clx = classNames('json-editor-toolbar');
    return (
      <div className={clx}>
        <span className="json-toolbox-title">{I18N.toolbox.title}</span>
        <ul>
          {Object.keys(data).map(type => {
            const value = data[type];

            if (!tooltypes.includes(type)) return null;

            const Comp = STR_COMPONENT[type];

            return (
              <li><Comp value={value} onChange={this.change(type)} /></li>
            );
          })}
        </ul>
      </div>
    );
  }
}
