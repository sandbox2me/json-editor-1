import { EventEmitter } from 'fbemitter';

import Toolbar from './Toolbar';
import EditPanel from './EditPanel';
import ComponentView from './ComponentView';
import PageView from './PageView';
import Controller from './Controller';

const emitter = new EventEmitter(); 

Controller.EditTigger = ComponentView.EditTigger;
export default Controller;

export { emitter, PageView, ComponentView, EditPanel, Toolbar };