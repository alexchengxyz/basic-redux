// 預設值
const initialState = {
  loading: false,
  text: '取得state',
};

// 更改state
export default (state = initialState, action) => {
  switch (action.type) {
    case 'BASIC_LOADING':
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};
