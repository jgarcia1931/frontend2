import React, { Component } from "react";
import ReactHtmlParser from 'react-html-parser';
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

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

        return (
            <div>
                <Link to={`/post/${id}`}>
                    <h3>{title.rendered}</h3>
                </Link>
                <p dangerouslySetInnerHTML={{__html: excerpt.rendered}}/>
                <hr/>
            </div>

        );
    }
}

export default PostItem
