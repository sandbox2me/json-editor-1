import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import _ from 'lodash';

export default class  extends PureComponent {
  static propTypes = {
  };

  static defaultProps = {
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillReceiveProps(nextProps) {
    let state = {};
    if ('' in nextProps) {
      state. = nextProps.
    }
    if (!_.isEmpty(state)) {
      this.setState(state);
    }
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}
