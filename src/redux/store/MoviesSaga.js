import {GET_MOVIES, SEARCH_MOVIES,GET_MOVIE_DETAILS} from "../action/constant"
import {getMoviesSuccess,getMoviesFailure, searchMovieSucess,getMovieDetailsSuccess,getCastAndCrew,getMovieReview, getMovieVideos} from "../action/action"
import {getMoviesApi,searchMovieApi,getMovieDetailsApi,getMovieCreditsApi,getMovieReviewApi, getMovieVideoApi} from "../../API/api"

import { call, put, takeEvery ,all} from "redux-saga/effects"



//Movie search watcher saga

function* movieSearchWatcherSaga(){
    yield takeEvery(SEARCH_MOVIES,movieSearchSaga)
}

function* movieSearchSaga(action){
    
    const data = yield call(searchMovieApi,action.payload)

    yield put(searchMovieSucess(data.results))
}

//getMovie details

function* getMovieDetailsWatcherSaga(){
    yield takeEvery(GET_MOVIE_DETAILS,getMovieDetails)
}

function* getMovieDetails(action){
  
    const movieDetails = yield call(getMovieDetailsApi,action.payload)
    
    const castAndCrue = yield call(getMovieCreditsApi,action.payload)

    const movieReview = yield call (getMovieReviewApi,action.payload)

    const movieVideos = yield call (getMovieVideoApi,action.payload)

    yield put(getMovieDetailsSuccess(movieDetails))
    yield put(getCastAndCrew(castAndCrue))
    yield put(getMovieReview(movieReview))
    yield put(getMovieVideos(movieVideos))
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
    yield all([moviesWatcherSaga(),movieSearchWatcherSaga(),getMovieDetailsWatcherSaga()])
}