import React, { Component } from "react";
import ReactHtmlParser from 'react-html-parser';
import {Link, Route} from "react-router-dom";
import Container from "react-bootstrap/Container";
import PostPage from "./PostPage";

export class PostItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.post.title,
            content: this.props.post.content,
            id: this.props.post.id,
            excerpt: this.props.post.excerpt };
    }


    render() {
        const {title, content, id, excerpt} = this.state;
        debugger;

        return (
            <div>
                <Link to={{
                    pathname: `/post/${id}`,
                    state: {
                        title: title,
                        content: content,
                        id: id,
                        excerpt: excerpt
                    }
                }}>
                    <h3>{title.rendered}</h3>
                </Link>
                <p dangerouslySetInnerHTML={{__html: excerpt.rendered}}/>
                <hr/>

            </div>

        );
    }
}

export default PostItem
