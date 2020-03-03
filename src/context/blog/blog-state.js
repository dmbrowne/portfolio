import React, {useReducer} from 'react'
import BlogContext from './blog-context'
import Reducer from './blog-reducer'
import {GET_BLOG_POSTS, GET_BLOG_POST, SET_LOADING} from '../types'

const BlogState = (props) => {
    const initialState = {
        post: {},
        posts: [],
        loading: false
    }
    const [state, dispatch] = useReducer(Reducer, initialState)

    const getBlogPost = async (id) => {
        dispatch({type: SET_LOADING})
        const resp = await fetch('/assets/data/blogs.json')
        if(resp.ok) {
            const posts = resp.json()
            dispatch({
                type: GET_BLOG_POSTS,
                payload: posts.find(post => post.id === id)
            })
        }
    }

    const getBlogPosts = async () => {
        dispatch({type: SET_LOADING})
        const resp = await fetch('/assets/data/blogs.json')
        if(resp.ok) {
            const posts = await resp.json()
            dispatch({
                type: GET_BLOG_POSTS,
                payload: posts
            })
        }
    }
    return (
        <BlogContext.Provider
        value={{
            post: state.post,
            posts: state.posts,
            loading: state.loading,
            getBlogPosts
        }}>
            {props.children}
        </BlogContext.Provider>
    )
}

export default BlogState