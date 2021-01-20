import React from 'react';
import { connect } from 'react-redux';
import { handleChangeState } from '../redux/basic/actions';

const UsersContainer = (props) => {
  const { storeSate, dispatch } = props;
  console.log('props-', props);
  console.log(storeSate);
  console.log(dispatch);

  return (
    <>
      <div>內容</div>

      <button
        type="button"
        onClick={() => {
          dispatch(handleChangeState());
        }}
      >
        按鈕
      </button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    storeSate: state.basic,
  };
};

export default connect(mapStateToProps)(UsersContainer);
