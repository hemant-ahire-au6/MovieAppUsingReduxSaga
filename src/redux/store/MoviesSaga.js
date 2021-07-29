import {GET_MOVIES_SUCCESS,GET_MOVIES,GET_MOVIES_FAILURE, SEARCH_MOVIES} from "../action/constant"
import {getMovies,getMoviesSuccess,getMoviesFailure, searchMovieSucess} from "../action/action"
import {getMoviesApi,searchMovieApi} from "../../API/api"

import { call, put, takeEvery ,all} from "redux-saga/effects"



//Movie search watcher saga

function* movieSearchWatcherSaga(){
    yield takeEvery(SEARCH_MOVIES,movieSearchSaga)
}

function* movieSearchSaga(action){
    const data = yield call(searchMovieApi,action.payload)
    console.log(data)

    yield put(searchMovieSucess(data.results))
}


//watcher saga
function* moviesWatcherSaga(){
    yield takeEvery(GET_MOVIES,moviesSaga)

}

function* moviesSaga(){  
    try{
        const data = yield call(getMoviesApi)
        yield put(getMoviesSuccess(data))
    }
    catch(error){
        yield put(getMoviesFailure(error.message))
    }
}



export default function* postSaga(){
    yield all([moviesWatcherSaga(),movieSearchWatcherSaga()])
}