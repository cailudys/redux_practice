import { HIDE, SHOW } from "../const/modal.const";

const initialState = {
  show: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW:
      return {
        ...state,
        show: true,
      };
    case HIDE:
      return {
        ...state,
        show: false,
      };
    default:
      return state;
  }
};
