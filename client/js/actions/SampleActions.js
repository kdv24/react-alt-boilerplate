import alt from '../alt';

class SampleActions {

  load(data) {
    return (dispatch) => {
      dispatch(data);
    }
  }
}

export default alt.createActions(SampleActions);
