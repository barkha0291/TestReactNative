import { 
    GET_HOME_DETAIL_FINISH,
    GET_HOME_DETAIL_CARD_FINISH,
} from "../../../Config/WMActionTypes";

const initialState = {video: []};

const apiReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_HOME_DETAIL_FINISH:
            return {
                ...state,
                homeData: action.payload
            }

        case GET_HOME_DETAIL_CARD_FINISH:
            return{
                ...state,
                homeDataCard: action.payload
            }

        default:
            return state;
    }
};

export default apiReducer;
