import { DATA_REDUX} from "../types";

export const SetPeopleData = (data) => (dispatch) => {
    dispatch({ type: DATA_REDUX, payload: data });
  };
  