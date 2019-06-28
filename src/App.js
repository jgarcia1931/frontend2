import React, { Component, Fragment} from 'react';
import './App.css';
import Posts from './components/Posts'
import PostPage from './components/PostPage'
import { BrowserRouter, Route} from "react-router-dom";
import {Header} from "./components/Header";
import {Products} from "./components/analysis/Products";
import {IrisApp} from "./components/irisflower/IrisApp.js";



class App extends Component {


    render() {
        return (

            <BrowserRouter>
                <Fragment>
                    <Header/>
                    <Route exact path={"/"} component={Posts}/>
                    <Route exact path={"/analysis"} component={Products}/>
                    <Route exact path={"/iris"} component={IrisApp}/>
                    <Route exact path={"/post/:id"} component={PostPage}/>
                </Fragment>
            </BrowserRouter>

        );
    };
}

export default App;
