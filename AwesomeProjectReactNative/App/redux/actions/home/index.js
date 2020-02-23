import {
    GET_HOME_DETAIL,
    GET_HOME_DETAIL_FINISH,
    API_START,
    API_FINISH,
} from "../../../Config/WMActionTypes";
import { 
    urlPersarApi,
} from '../../apis';

import { put, takeLatest } from 'redux-saga/effects';

function getHomeSucess(data){
    return {
        type:GET_HOME_DETAIL_FINISH,
        payload:data
    }
}

function* getHomelist(action){
    console.log("here is action",action)
    try {
        yield put({type:API_START});
        const list = yield urlPersarApi(action.url);
        yield put({
            type:GET_HOME_DETAIL_FINISH,
            payload: list.data
           })
        yield put({type:API_FINISH});
        
    } catch (error) {
        console.warn(error);
        yield put({type:API_FINISH});
    }
}

// function* getHomeListCard(action){
//     try {
//         yield put({type:API_START});
//         const list = yield urlPersarApi(action['url']);
//         yield put({
//             type:GET_HOME_DETAIL_CARD_FINISH,
//             payload: list.data.payload[0].sections
//         })
//         yield put({type:API_FINISH});
//     } catch (error) {
//         console.warn(error);
//         yield put({type:API_FINISH});
//     }
// }

// function* getResource(action){
//     try {
//         yield put({type:API_START});
//         const response = yield urlPersarApi(action['url']);
//         console.log(response);
//         yield put({
//             type:GET_RESOURCE_DETAIL_FINISH,
//             payload: response.data.payload[0].sections,
//         })
//         yield put({type:API_FINISH});
//     } catch (error) {
//         console.warn(error)
//         yield put({type:API_FINISH});
//     }
// }

// function* getResources(action){
//     try {
//         yield put({type:API_START});
//         const response = yield urlPersarApi(action['url']);
//         console.log(response);
//         yield put({
//             type:GET_RESOURCES_DETAIL_FINISH,
//             payload: response.data.payload[0].sections,
//         })
//         yield put({type:API_FINISH});
//     } catch (error) {
//         console.warn(error)
//         yield put({type:API_FINISH});
//     }
// }

// function* getClubLayout(action){

//     try{

//         yield put({type:API_START});
//         const response = yield urlPersarApi(action['url']);
//         console.log(response)
//         yield put({
//             type: GET_CLUB_LAYOUTS_FINISH,
//             payload: response.data.payload[0].sections
//         })
//         yield put({type:API_FINISH});
//     }catch(error){
//         console.warn(error)
//         yield put({type:API_FINISH});
//     }
// }

// function* getVideoPdfInfo(action){

//     try{
//         let params = action['videoParams'];
//         yield put({type:API_START});
//         const apiResponse = yield urlPersarApi(action['url']);
//         params['videoId'] = apiResponse.data.payload[0].sections[0].tiles[0].videoId;
//         const response = yield getVideoDataApi(params);
//         yield put({
//             type: GET_PDF_VIDEO_DATA_FINISH,
//             payload: apiResponse.data.payload[0].sections
//         })

//         yield put({
//             type: GET_VIDEO_DATA_FINISH,
//             payload: response.data
//         })
//         yield put({type:API_FINISH});
//     }catch(error){
//         console.warn(error)
//         yield put({type:API_FINISH});
//     }
// }

// function* getVideoData(action){

//     try{
//         yield put({type:API_START});
//         const response = yield getVideoDataApi(action['params']);
//         yield put({
//             type: GET_VIDEO_DATA_FINISH,
//             payload: response.data
//         })
//         yield put({type:API_FINISH});
//     }catch(error){
//         console.warn(error)
//         yield put({type:API_FINISH});
//     }
// }

function* homeWatcher(){
    // yield takeLatest(GET_VIDEO, getAll)
    yield takeLatest(GET_HOME_DETAIL,getHomelist)
    // yield takeLatest(GET_HOME_DETAIL_CARD, getHomeListCard)
    // yield takeLatest(GET_RESOURCE_DETAIL, getResource)
    // yield takeLatest(GET_CLUB_LAYOUTS, getClubLayout)
    // yield takeLatest(GET_RESOURCES_DETAIL, getResources)
    // yield takeLatest(GET_PDF_VIDEO_DATA, getVideoPdfInfo);
    // yield takeLatest(GET_VIDEO_DATA, getVideoData);
}

export default homeWatcher;