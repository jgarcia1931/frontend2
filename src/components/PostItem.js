import React, { Component } from "react";
import ReactHtmlParser from 'react-html-parser';
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

export class PostItem extends Component{

    render() {
        const {title, content, id, excerpt} = this.props.post;

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
