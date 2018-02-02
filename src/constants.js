export const MODE = {
  PAGE: 'PAGE',
  COMPONENT: 'COMPONENT',
};

export const OPER_TYPE = {
  ADD: 'ADD',
  DELETE: 'DELETE',
  EDIT: 'EDIT',
};

export const EDITOR_STYLE = {
  padding: '10px',
  borderRadius: '3px',
  margin: '10px 0px',
};

export const JSON_EDITOR_CONFIG = {
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

export const I18N = {
  label: {
    theme: '主题',
    collapsed: '展开收起',
    collapseStringsAfter: '收起最长字符数',
    displayObjectSize: '主题',
    enableClipboard: '是否编辑',
    indentWidth: '前缀空格数',
    displayDataTypes: '显示数据类型',
    iconStyle: '图标',
  },
  toolbox: {
    title: '编辑器设置',
  }
};
