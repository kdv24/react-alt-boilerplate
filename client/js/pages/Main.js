// Helpers
import React, {Component} from 'react';
// Stores
import SampleStore from '../stores/SampleStore';
// Actions
import SampleActions from '../actions/SampleActions';
//Components

export default class Main extends Component {
  constructor() {
    super();

    this.state = {
      data: ''
    }

    // Bind functions...
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    SampleStore.listen(this.onChange);
    SampleActions.load({params: this.props.params});
  }

  onChange() {
    this.setState(SampleStore.getState());
  }

  render() {
    return (
      <div>
        {this.state.data}
      </div>
    );
  }

  componentWillUnmount() {
    SampleStore.unlisten(this.onChange);
  }
}
