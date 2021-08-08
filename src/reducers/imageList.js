import {
    GET_NEXT_IMAGE,
    GET_PREV_IMAGE,
    SET_CURRENT_IMAGE,
    GET_NEXT_CURRENT_IMAGE,
    GET_PREV_CURRENT_IMAGE,
    FETCH_IMAGES_REQUEST,
    FETCH_IMAGES_SUCCESS,
    FETCH_IMAGES_FAILURE,
    FETCH_NEXT_IMAGE_SUCCESS,
    FETCH_NEXT_CURRENT_IMAGE_SUCCESS
} from '../actions/actionTypes'


const initialState = {
    items: [],
    error: false,
    loading: false,
    disable: false,
    count: 7,
    start: 0,
    end: 0,
    currentImage: {},
}

export default function imageListReducer(state = initialState, action) {
    switch (action.type) {
        case GET_NEXT_IMAGE: {
            const { start } = action.payload
            return { ...state, start: start + 1, end: state.end + 1 }
        }
        case GET_PREV_IMAGE: {
            const { start } = action.payload
            return { ...state, start: start - 1, end: state.end - 1 }
        }
        case SET_CURRENT_IMAGE: {
            const { urls, id } = action.payload
            return { ...state, currentImage: { urls, id } }
        }
        case GET_NEXT_CURRENT_IMAGE: {
            const current = action.payload
            const index = 1 + state.items.findIndex(el => el.id === current.id)
            const item = state.items[index]
            const currentImage = Object.assign({}, { urls: item.urls }, { id: item.id })
            if (index >= state.end) {
                return {
                    ...state,
                    currentImage,
                    end: index + 1,
                    start: (index + 1) - state.count
                }
            } else if (index < state.start) {
                return {
                    ...state,
                    currentImage,
                    start: index,
                    end: index + state.count
                }
            }
            return {
                ...state,
                currentImage
            }
        }
        case GET_PREV_CURRENT_IMAGE: {
            const current = action.payload
            const index = state.items.findIndex(el => el.id === current.id) - 1
            const item = state.items[index]
            const currentImage = Object.assign({}, { urls: item.urls }, { id: item.id })
            if (index >= state.end) {
                return {
                    ...state,
                    currentImage,
                    end: index + 1,
                    start: (index + 1) - state.count
                }
            } else if (index < state.start) {
                return {
                    ...state,
                    currentImage,
                    start: index,
                    end: index + state.count
                }
            }
            return {
                ...state,
                currentImage
            }
        }
        case FETCH_IMAGES_REQUEST: {
            return {
                ...state,
                loading: true,
                disable: true
            }
        }
        case FETCH_IMAGES_FAILURE: {
            const message = action.payload
            return {
                ...state,
                loading: false,
                error: message
            }
        }
        case FETCH_IMAGES_SUCCESS: {
            const items = action.payload
            return {
                ...state,
                loading: false,
                error: false,
                disable: false,
                items,
                end: state.count
            }
        }
        case FETCH_NEXT_IMAGE_SUCCESS: {
            const [item] = action.payload
            return {
                ...state,
                loading: false,
                error: false,
                disable: false,
                items: [...state.items, item],
                start: state.start + 1,
                end: state.end + 1,
            }
        }
        case FETCH_NEXT_CURRENT_IMAGE_SUCCESS: {
            const [item] = action.payload
            return {
                ...state,
                loading: false,
                error: false,
                disable: false,
                items: [...state.items, item],
                start: state.start + 1,
                end: state.end + 1,
                currentImage: { id: item.id, urls: item.urls }
            }
        }
        default:
            return state;
    }
}


