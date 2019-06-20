import React, {Component, Fragment} from "react";
import axios from 'axios'
import  {Link} from "react-router-dom";
import ReactHtmlParser from 'react-html-parser';
import WeatherApp from "./WeatherApp";
import Weather from "./Weather";
import EmbeddedGist from "./EmbeddedGist";
import Container from "react-bootstrap/Container";

export class PostPage extends Component{

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            title: "",
            content: "",
            id_act: "",
            isLoaded: false
        };
    }

    // state = {
    //     posts: [],
    //     isLoaded: false
    // }

    // Life cycle method where you make initial request
    componentDidMount() {
        axios.get('https://blog.somelitecoding.com/wp-json/wp/v2/posts/' + this.state.id)
            .then(res => this.setState({
                title: res.data.title,
                content: res.data.content,
                id_act: res.data.id,
                isLoaded: true
            }))
            .catch(err => console.log(err));
    }

    render() {
        // var postIndex =  0;
        // const {posts, isLoaded} = this.state;
        // for (var i = 0; i < posts.length; i++) {
        //     if (posts[i].id == this.props.match.params.id){
        //         postIndex = i;
        //     }
        // }

        function testFunc(arStr1) {
            if (arStr1.includes('WeatherApp')) {
                return <WeatherApp/>
            } else if (arStr1.search("github.com/")>=0) {
                var startFileName = arStr1.search("startfile")+9;
                var endFileName = arStr1.search("end");

                var fileNam   = arStr1.substring(startFileName, endFileName);
                var arStr1    = arStr1.slice(arStr1.search("github.com/")+11);
                // var nameEnd   = arStr1.substr(1, arStr1.search("/"))
                // var arStr1    = arStr1.slice(arStr1.search("/") + 1)
                var findJS    = arStr1.search(".js");
                var gistName  = arStr1.slice(0, findJS);

                return <EmbeddedGist gist={gistName} file={fileNam}/>

            } else {
                return ReactHtmlParser(arStr1);

            }
        }

        const {isLoaded, title, content, id, id_act} = this.state;

        if (isLoaded) {
            debugger;
            // const {title, content, id} = posts[postIndex];

            var strCurr  = content.rendered;
            // --------------------------------------------------------------
            var arStr = strCurr.split('\n\n\n\n');
            // --------------------------------------------------------------
            return (
                <Container className= "text-body align-self-center col-lg-7">
                    <Fragment>
                        <Link to={`/`}>Go Back</Link>
                        <hr/>
                        <h2>{title.rendered}</h2>
                        {arStr.map(arStr1 => (  testFunc(arStr1)  ))}
                        {/*{arStr.map(arStr1 => (  <div dangerouslySetInnerHTML={{__html: arStr1}}/>  ))}*/}
                    </Fragment>
                </Container>
            );
        }
        return <p>Loading...</p>
    }
}

export default PostPage
