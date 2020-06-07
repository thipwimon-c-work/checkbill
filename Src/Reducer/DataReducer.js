import { DATA_REDUX } from "../types";

const INITIAL_STATE = {
    people: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DATA_REDUX:
            return {
                ...state,
                people: action.payload,
            };


        default:
            return state;
    }
};
