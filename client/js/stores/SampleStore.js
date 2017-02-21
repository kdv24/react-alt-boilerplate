import alt from '../alt';
import SampleActions from '../actions/SampleActions';

class SampleStore {

  constructor() {
    this.bindActions(SampleActions);

    this.state = {
      data: ''
    }
  }

  onLoad() {
    this.setState({
      data: 'Keep calm, and React on...'
    });
  }
}

export default alt.createStore(SampleStore);
