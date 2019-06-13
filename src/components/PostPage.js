import React, {Component, Fragment} from "react";
import axios from 'axios'
import  {Link} from "react-router-dom";
import ReactHtmlParser from 'react-html-parser';
import WeatherApp from "./WeatherApp";
import Weather from "./Weather";
import EmbeddedGist from "./EmbeddedGist";
import Container from "react-bootstrap/Container";

export class PostPage extends Component{

    state = {
        posts: [],
        isLoaded: false
    }

    // Life cycle method where you make initial request
    componentDidMount() {
        axios.get('http://3.208.128.112/wp-json/wp/v2/posts')
            .then(res => this.setState({
                posts: res.data,
                isLoaded: true
            }))
            .catch(err => console.log(err));
    }

    render() {
        var postIndex =  0;
        const {posts, isLoaded} = this.state;
        for (var i = 0; i < posts.length; i++) {
            if (posts[i].id == this.props.match.params.id){
                postIndex = i;
            }
        }


        function testFunc(arStr1) {
            if (arStr1.includes('WeatherApp')) {
                return <WeatherApp/>
            } else if (arStr1.search("github.com/")>=0) {
                    debugger;
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

        if (isLoaded) {
            const {title, content, id} = posts[postIndex];

            var strCurr  = content.rendered;

            // var arStr = [];
            // var i;
            // for (i = 0; i < 50; i++) {
            //     var paragraphSpace = strCurr.search("<p>")
            //     var header2Space   = strCurr.search("<h2>")
            //     var imageSpace     = strCurr.search("<figure")
            //     var appPosition    = strCurr.search("<code>")
            //     var findScript     = strCurr.search("<script")
            //
            //     if (paragraphSpace == -1) {
            //         // eslint-disable-next-line no-unused-expressions
            //         paragraphSpace = 999999;
            //     }
            //     if (header2Space == -1) {
            //         // eslint-disable-next-line no-unused-expressions
            //         header2Space = 999999;
            //     }
            //     if (imageSpace == -1) {
            //         // eslint-disable-next-line no-unused-expressions
            //         imageSpace = 999999;
            //     }
            //     if (appPosition == -1) {
            //         // eslint-disable-next-line no-unused-expressions
            //         appPosition = 999999
            //     }
            //     if (findScript == -1) {
            //         findScript = 999999
            //     }
            //     // debugger;
            //
            //
            //
            //     var minIdxVal = Math.min(paragraphSpace, header2Space, imageSpace, appPosition, findScript);
            //
            //     if (minIdxVal==999999){
            //         break;
            //     }
            //
            //     if (minIdxVal!=999999) {
            //         if (paragraphSpace == minIdxVal) {
            //             var n = strCurr.search("<p>");
            //             var n2 = strCurr.search("</p>");
            //             var str2 = strCurr.slice(n, n2 + 4);
            //             arStr.push(str2);
            //             strCurr = strCurr.slice(n2 + 4);
            //         } else if (header2Space == minIdxVal) {
            //             var n = strCurr.search("<h2>");
            //             var n2 = strCurr.search("</h2>");
            //             var str2 = strCurr.slice(n, n2 + 5);
            //             arStr.push(str2);
            //             strCurr = strCurr.slice(n2 + 4);
            //         } else if (imageSpace == minIdxVal) {
            //             var n = strCurr.search("<figure");
            //             var n2 = strCurr.search("</figure>");
            //             var str2 = strCurr.slice(n , n2+9);
            //             // str2 = str2;
            //             arStr.push(str2);
            //             strCurr = strCurr.slice(n2 + 6);
            //         } else if (appPosition == minIdxVal) {
            //             var n = strCurr.search("<code>");
            //             var n2 = strCurr.search("</code>");
            //             var str2 = strCurr.slice(n + 6, n2);
            //             // str2 = str2;
            //             arStr.push(str2);
            //             strCurr = strCurr.slice(n2 + 6);
            //         } else if (findScript == minIdxVal) {
            //             var n = strCurr.search("<script")
            //             var n2 = strCurr.search("</script>");
            //             var str2 = strCurr.slice(n + 6, n2);
            //             // str2 = str2;
            //             arStr.push(str2);
            //             strCurr = strCurr.slice(n2 + 9);
            //
            //         }
            //     }
            // }

            // --------------------------------------------------------------
            var arStr = strCurr.split('\n\n\n\n');
            debugger;
            // --------------------------------------------------------------
            return (
                <Container className="mt-4 d-none d-sm-block text-left mb-5 align-self-center col-lg-7">
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
