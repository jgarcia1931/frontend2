import React, { Component } from "react";
import axios from 'axios'
import PostItem from './PostItem'
import '../main.css';
import Container from "react-bootstrap/Container";


export class Posts extends Component{
    state = {
        posts: [],
        isLoaded: false
    }

    // Life cycle method where you make initial request
    componentDidMount() {
        axios.get('https://blog.somelitecoding.com/wp-json/wp/v2/posts')
            .then(res => this.setState({
                posts: res.data,
                isLoaded: true
            }))
            .catch(err => console.log(err));
    }


    render() {
        // Logs on console good for testing...

        const {posts, isLoaded} = this.state
        if (isLoaded) {
            return (
                <Container className="d-none d-sm-block text-body mb-5 align-self-center col-lg-7">
                    {posts.map(post => (
                        <PostItem key = {post.id} post = {post}>  </PostItem>
                    ))}
                </Container>
        );
        }
        return <h3>Loading...</h3>

    }
}

export default Posts