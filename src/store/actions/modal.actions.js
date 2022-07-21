import { HIDE, SHOW } from "../const/modal.const";

export const showModal = (payload) => ({
  type: SHOW,
  payload,
});

export const hideModal = (payload) => ({
  type: HIDE,
  payload,
});
