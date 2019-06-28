import React, { Component } from "react";
import Plot from 'react-plotly.js';
import Container from "react-bootstrap/Container";
import axios from "axios";

export class Products extends Component {
        constructor(props) {
        super(props);
        this.state = {
            'Lower': undefined,
            'MirroredProps': undefined,
            'OriginalShape': undefined,
            'Upper': undefined,
            section1: [[0   ,  0], 0, 0],
            section2: [[0   ,  0], 0, 0],
            section3: [[0   ,  0], 0, 0],
            section4: [[0   ,  0], 0, 0],
            section5: [[0   ,  0], 0, 0],
            section6: [[0   ,  0], 0, 0],
            section7: [[0   ,  0], 0, 0],
            section8: [[0   ,  0], 0, 0]
        };
    }

    // Life cycle method where you make initial request
    getSectAnalysis = async (e) => {
            debugger;
        e.preventDefault();
        const section1 = e.target.elements.section1.value;
        const section2 = e.target.elements.section2.value;
        const section3 = e.target.elements.section3.value;
        const section4 = e.target.elements.section4.value;
        const section5 = e.target.elements.section5.value;
        const section6 = e.target.elements.section6.value;
        const section7 = e.target.elements.section7.value;
        const section8 = e.target.elements.section8.value;

        var bodyFormData = new FormData();
        bodyFormData.set('section1', section1)
        bodyFormData.set('section2', section2)
        bodyFormData.set('section3', section3)
        bodyFormData.set('section4', section4)
        bodyFormData.set('section5', section5)
        bodyFormData.set('section6', section6)
        bodyFormData.set('section7', section7)
        bodyFormData.set('section8', section8)

        // const bodyFormData = {
        //     'section1': section1,
        //     'section2': section2,
        //     'section3': section3,
        //     'section4': section4,
        //     'section5': section5,
        //     'section6': section6,
        //     'section7': section7,
        //     'section8': section8
        // }
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }

        // axios.post('http://127.0.0.1:5000/',data);
        // const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const response = await axios({
        method: 'post',
        url: 'https://sectionanalysistest.herokuapp.com/',
        data: bodyFormData,
        headers: {
        'content-type': `multipart/form-data; boundary=${bodyFormData._boundary}`,
        },
    });
        console.log(response)

        // axios.post('https://sectionanalysistest.herokuapp.com',
        //     {bodyFormData },
        //     {headers: {'Content-Type': 'multipart/form-data'}}
        // ).then(function (response) {
        //         debugger;
        //         //handle success
        //         console.log(response);
        //     }).catch(function (response) {
        //         //handle error
        //         debugger;
        //         console.log(response);
        //     });
        debugger;
    }

    render() {
        return (
            <Container>
                <h1>Testing Plots</h1>
                <form onSubmit={this.getSectAnalysis}>
                    <div>
                        <input type="text" name="section1" placeholder="section1..." />
                    </div>
                    <div>
                        <input type="text" name="section2" placeholder="section2..." />
                    </div>
                    <div>
                        <input type="text" name="section3" placeholder="section3..." />
                    </div>
                    <div>
                        <input type="text" name="section4" placeholder="section4..." />
                    </div>
                    <div>
                        <input type="text" name="section5" placeholder="section5..." />
                    </div>
                    <div>
                        <input type="text" name="section6" placeholder="section6..." />
                    </div>
                    <div>
                        <input type="text" name="section7" placeholder="section7..." />
                    </div>
                    <div>
                        <input type="text" name="section8" placeholder="section8..." />
                    </div>
                    <button>Get Weather</button>
                </form>
                <Plot
                    // data={[{
                    //     x: [1.5, 4.5],
                    //     y: [0.75, 0.75],
                    //     text: ['Unfilled Rectangle', 'Filled Rectangle'],
                    //     mode: 'text'}]}
                    layout=
                        {{
                            title: 'Original Section',
                            xaxis: {range: [0, 7], showgrid: false},
                            yaxis: {range: [0, 3.5]},
                            width: 500,
                            height: 500,
                            shapes: [
                                {
                                    type: 'rect',
                                    x0: 1,
                                    y0: 1,
                                    x1: 2,
                                    y1: 3,
                                    line: {color: 'rgba(128, 0, 128, 1)'}},
                                {
                                    type: 'rect',
                                    x0: 3,
                                    y0: 1,
                                    x1: 6,
                                    y1: 2,
                                    line: {color: 'rgba(128, 0, 128, 1)', width: 2},
                                    fillcolor: 'rgba(128, 0, 128, 0.7)'}
                                ]
                        }}
                />
            </Container>
        );
    }
}

export default Products





