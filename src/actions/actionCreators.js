import {
    GET_NEXT_IMAGE,
    GET_PREV_IMAGE,
    SET_CURRENT_IMAGE,
    SET_ACTIVE_MODAL,
    GET_NEXT_CURRENT_IMAGE,
    GET_PREV_CURRENT_IMAGE,
    FETCH_IMAGES_REQUEST,
    FETCH_IMAGES_SUCCESS,
    FETCH_IMAGES_FAILURE,
    FETCH_NEXT_IMAGE_SUCCESS,
    FETCH_NEXT_CURRENT_IMAGE_SUCCESS
} from './actionTypes'


export const getNextImage = (start, count) => (
    {
        type: GET_NEXT_IMAGE, payload: {
            start, count
        }
    }
)

export const getPrevImage = (start, count) => (
    {
        type: GET_PREV_IMAGE, payload: {
            start, count
        }
    }
)

export const setCurrentImage = (urls, id) => (
    {
        type: SET_CURRENT_IMAGE, payload: { urls, id }
    }
)

export const setActiveModal = (active, url) => (
    {
        type: SET_ACTIVE_MODAL, payload: { active, url }
    }
)

export const getNextCurrentImage = (current) => (
    {
        type: GET_NEXT_CURRENT_IMAGE, payload: current
    }
)

export const getPrevCurrentImage = (current) => (
    {
        type: GET_PREV_CURRENT_IMAGE, payload: current
    }
)

export const fetchImagesRequest = () => (
    {
        type: FETCH_IMAGES_REQUEST
    }
)

export const fetchImagesSuccess = (images) => (
    {
        type: FETCH_IMAGES_SUCCESS, payload: images
    }
)

export const fetchImagesFailure = (message) => (
    {
        type: FETCH_IMAGES_FAILURE, payload: message
    }
)

const createURL = (query,orientation, perPage, page) => {
    return `https://api.unsplash.com/search/photos?query=${query}&client_id=XhXEMT_JL2CmCr3-OxgK0BD_Jq63FSDGCh3jZ7RIKdM&orientation=${orientation}&per_page=${perPage}&page=${page}`
}

export const fetchImages = (count) => async dispatch => {
    dispatch(fetchImagesRequest());
    const URL = createURL('random', 'portrait', count, 1)
    try {
        const response = await fetch(URL)
        if (!response.ok) {
            throw new Error(response.statusText);
        } 
        const data = await response.json();
        dispatch(fetchImagesSuccess(data.results));
    } catch (e) {
        dispatch(fetchImagesFailure('Произошла ошибка!'));
    }
}

export const fetchNextImageSuccess = (image) => (
    {
        type: FETCH_NEXT_IMAGE_SUCCESS, payload: image
    }
)

export const fetchNextImage = (end) => async dispatch => {
    dispatch(fetchImagesRequest());
    const URL = createURL('random', 'portrait', 1, end + 1)
    try {
        const response = await fetch(URL)
        if (!response.ok) {
            throw new Error(response.statusText);
        } 
        const data = await response.json();
        dispatch(fetchNextImageSuccess(data.results));
    } catch (e) {
        dispatch(fetchImagesFailure('Произошла ошибка!'));
    }
}


export const fetchNextCurrentImageSuccess = (image) => (
    {
        type: FETCH_NEXT_CURRENT_IMAGE_SUCCESS, payload: image
    }
)

export const fetchNextCurrentImage = (end) => async dispatch => {
    dispatch(fetchImagesRequest());
    const URL = createURL('random', 'portrait', 1, end + 1)
    try {
        const response = await fetch(URL)
        if (!response.ok) {
            throw new Error(response.statusText);
        } 
        const data = await response.json();
        dispatch(fetchNextCurrentImageSuccess(data.results));
    } catch (e) {
        dispatch(fetchImagesFailure('Произошла ошибка!'));
    }
}