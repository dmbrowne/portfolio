import React from 'react'
import Navbar from '../../common/navbar/navbar'
import Footer from '../../common/footer/footer'
import BlogList from '../../common/blog-list/blog-list'
import BlogState from '../../../context/blog/blog-state'
import './blog.scss'

const Blog = () => {
    return (
        <BlogState>
            <Navbar light={true} />
            <div className="container">
                <h1 className="mt-8 mb-7 text-center">We share our knowledge</h1>
                <BlogList />
            </div>
            <Footer light />
        </BlogState>
    )
}

export default Blog;