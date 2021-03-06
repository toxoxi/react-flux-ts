import AppDispatcher from "../dispatcher/AppDispatcher";
import { ActionTypes } from "../constants/AppConstants";

const getTopAction001 = () => ({
  type: ActionTypes.TOP_TYPE_001 as ActionTypes.TOP_TYPE_001,
  data: {
    title: "New Title",
    subtitle: "Created by ActionCreator",
    text: "This text will be overwritten"
  }
});

const getTopAction002 = () => ({
  type: ActionTypes.TOP_TYPE_002 as ActionTypes.TOP_TYPE_002,
  data: "RESULT OF YOUT ACTION"
});

export type TopActions = ReturnType<
  typeof getTopAction001 | typeof getTopAction002
>;

export const TopActionCreators = {
  actionCreator001() {
    AppDispatcher.dispatch(getTopAction001());
  },
  actionCreator002() {
    AppDispatcher.dispatch(getTopAction002());
  }
};
