import {
    API_START,
    API_FINISH,
} from "../../../Config/WMActionTypes";

const initialState = { user: {}, loading: false,access_token:{},policy_token:{} };
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case API_START:
            return { ...state, loading: true };
        case API_FINISH:
            return { ...state, loading: false };
        default:
            return state;
    }
};

export default userReducer;