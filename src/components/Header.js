import React, { Component } from "react";
import '../main.css';
import {Link} from "react-router-dom";

export class Header extends Component{


    render() {

        return (
            <div>
                <section id="header" className="wrapper">

                    <div id="logo">
                        <h1>sumLiteCoding</h1>
                        <p>Coding From An Aerospace Engineers Prespective</p>
                    </div>

                    <nav id="nav">
                        <ul>
                            <li>
                                <Link to={`/`}>Home</Link>
                            </li>
                            <li><a href="left-sidebar.html">Left Sidebar</a></li>
                        </ul>
                    </nav>

                </section>
            </div>
        );
    }

}

export default Header