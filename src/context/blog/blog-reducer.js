import {GET_BLOG_POSTS, GET_BLOG_POST, SET_LOADING} from '../types'

export default (state, action) => {
    switch (action.type) {
        case GET_BLOG_POST:
            return {
                ...state,
                post: action.payload,
                loading: false
            }
        case GET_BLOG_POSTS:
            return {
                ...state,
                posts: action.payload,
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}