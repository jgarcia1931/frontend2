import React, { Component, Fragment} from 'react';
import './App.css';
import Posts from './components/Posts'
import PostPage from './components/PostPage'
import EmbeddedGist from "./components/EmbeddedGist";
import WeatherApp from "./components/WeatherApp"
import { BrowserRouter, Route} from "react-router-dom";
import {Header} from "./components/Header";
import Container from "react-bootstrap/Container";
import {Products} from "./components/analysis/Products";

class App extends Component {


    render() {
        return (

            <BrowserRouter>
                <Fragment>
                    <Header/>
                    <Route exact path={"/"} component={Posts}/>
                    <Route exact path={"/analysis"} component={Products}/>
                    <Route exact path={"/post/:id"} component={PostPage}/>
                </Fragment>
            </BrowserRouter>

        );
    };
}

export default App;
