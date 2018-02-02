import PropTypes from 'prop-types';
import React from 'react';
import _ from 'lodash';
import {Select} from 'antd';
const Option = Select.Option;
import {I18N} from '../../../../src/constants';
import ToolbarItem from './ToolbarItem';

const THEMES = [
  {value: 'apathy', label: 'apathy'},
  {value: 'ashes', label: 'ashes'},
  {value: 'bespin', label: 'bespin'},
  {value: 'brewer', label: 'brewer'},
  {value: 'bright', label: 'bright'},
  {value: 'chalk', label: 'chalk'},
  {value: 'colors', label: 'colors'},
  {value: 'eighties', label: 'eighties'},
  {value: 'embers', label: 'embers'},
  {value: 'flat', label: 'flat'},
  {value: 'google', label: 'google'},
  {value: 'grayscale', label: 'grayscale'},
  {value: 'harmonic', label: 'harmonic'},
  {value: 'hopscotch', label: 'hopscotch'},
  {value: 'isotope', label: 'isotope'},
  {value: 'marrakesh', label: 'marrakesh'},
  {value: 'mocha', label: 'mocha'},
  {value: 'monokai', label: 'monokai'},
  {value: 'ocean', label: 'ocean'},
  {value: 'paraiso', label: 'paraiso'},
  {value: 'pop', label: 'pop'},
  {value: 'railscasts', label: 'railscasts'},
  {value: 'rjv-default', label: 'rjv-default'},
  {value: 'shapeshifter', label: 'shapeshifter'},
  {value: 'solarized', label: 'solarized'},
  {value: 'summerfruit', label: 'summerfruit'},
  {value: 'tomorrow', label: 'tomorrow'},
  {value: 'tube', label: 'tube'},
  {value: 'twilight', label: 'twilight'},
];

function Theme({value, onChange}) {
  return (
    <ToolbarItem label={I18N.label.theme}>
      <Select value={value} onChange={onChange}>
        {THEMES.map(({value, label}) => <Option value={value}>{label}</Option>)}
      </Select>
    </ToolbarItem>
  );
}

export default Theme;

Theme.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
