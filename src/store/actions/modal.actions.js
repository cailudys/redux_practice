import { HIDE, SHOW } from "../const/modal.const";

export const showModal = (payload) => ({
  type: SHOW,
  payload,
});

export const hideModal = (payload) => ({
  type: HIDE,
  payload,
});

export const showModal_async = () => (dispatch) => {
  setTimeout(() => {
    dispatch(showModal());
  }, 3000);
};
