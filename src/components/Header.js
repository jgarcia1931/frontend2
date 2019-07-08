import React, { Component } from "react";
import {Link} from "react-router-dom";

export class Header extends Component{


    render() {

        return (
            <div>
                <section id="header">

                    <div id="logo">
                        <h1>sumLiteCoding</h1>
                        <p>Coding From An Aerospace Engineers Prespective</p>
                    </div>

                    <nav id="nav">
                        <ul>
                            <li>
                                <Link to={`/`}>Home</Link>
                            </li>
                            <li>
                                <Link to={'/analysis'}>Analysis</Link>
                            </li>
                            <li>
                                <Link to={'/canvas'}>Canvas</Link>
                            </li>
                        </ul>
                    </nav>

                </section>


            </div>
        );
    }

}

export default Header