import React, { Component } from "react";
import Plot from 'react-plotly.js';
import Container from "react-bootstrap/Container";
import axios from "axios";

export class Products extends Component {
        constructor(props) {
        super(props);
        this.state = {
            Lower: undefined,
            MirroredProps: undefined,
            OriginalShape: undefined,
            Upper: undefined,
            section1: [[0   ,  0], 0, 0],
            section2: [[0   ,  0], 0, 0],
            section3: [[0   ,  0], 0, 0],
            section4: [[0   ,  0], 0, 0],
            section5: [[0   ,  0], 0, 0],
            section6: [[0   ,  0], 0, 0],
            section7: [[0   ,  0], 0, 0],
            section8: [[0   ,  0], 0, 0],
            isLoaded: false
        };
    }

    // Life cycle method where you make initial request
    getSectAnalysis = async (e) => {
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

        // const response = await
        var self = this;
        axios({
        method: 'post',
        url: 'https://sectionanalysistest.herokuapp.com/',
        data: bodyFormData,
        headers: {
        'content-type': `multipart/form-data; boundary=${bodyFormData._boundary}`,
        },}).then(function (response) {
            debugger;
            console.log(response);
            self.setState({
                    Lower: response.data.analysis.Lower,
                    MirroredProps: response.data.analysis.MirroredProps,
                    OriginalShape: response.data.analysis.OriginalShape,
                    Upper: response.data.analysis.Upper,
                    isLoaded: true
                })
        })
            .catch(function (error) {
                console.log(error);
            });


        // console.log(response)
        // this.setState({
        //             Lower: response.data.analysis.Lower,
        //             MirroredProps: response.data.analysis.MirroredProps,
        //             OriginalShape: response.data.analysis.OriginalShape,
        //             Upper: response.data.analysis.Upper,
        //             isLoaded: true
        //         });

        debugger;
    };
    render() {
        const {OriginalShape, isLoaded} = this.state
        // const x1 = OriginalShape.geom[""0""][""0""][""0""];
        // x OriginalShape.geom[0][0][0];
        // y OriginalShape.geom[0][0][1]
        // base OriginalShape.geom[0][1]
        // height OriginalShape.geom[0][2]
        debugger;
        if (isLoaded) {
            return (

                <Container>
                    <h1>test</h1>
                    <form onSubmit={this.getSectAnalysis}>
                        <div>
                            <input type="text" name="section1" placeholder="[[0.0,  0.0], 0.0, 0.0]"/>
                        </div>
                        <div>
                            <input type="text" name="section2" placeholder="[[0.0,  0.0], 0.0, 0.0]"/>
                        </div>
                        <div>
                            <input type="text" name="section3" placeholder="[[0.0,  0.0], 0.0, 0.0]"/>
                        </div>
                        <div>
                            <input type="text" name="section4" placeholder="[[0.0,  0.0], 0.0, 0.0]"/>
                        </div>
                        <div>
                            <input type="text" name="section5" placeholder="[[0.0,  0.0], 0.0, 0.0]"/>
                        </div>
                        <div>
                            <input type="text" name="section6" placeholder="[[0.0,  0.0], 0.0, 0.0]"/>
                        </div>
                        <div>
                            <input type="text" name="section7" placeholder="[[0.0,  0.0], 0.0, 0.0]"/>
                        </div>
                        <div>
                            <input type="text" name="section8" placeholder="[[0.0,  0.0], 0.0, 0.0]"/>
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
                                xaxis: {range: [0, 10], showgrid: false},
                                yaxis: {range: [0, 10]},
                                width: 500,
                                height: 500,
                                shapes: [
                                    // section 1
                                    {
                                        type: 'rect',
                                        x0: OriginalShape.geom[0][0][0],
                                        y0: OriginalShape.geom[0][0][1],
                                        x1: OriginalShape.geom[0][1] + OriginalShape.geom[0][0][0],
                                        y1: OriginalShape.geom[0][2] + OriginalShape.geom[0][0][1],
                                        line: {color: 'rgba(128, 0, 128, 1)', width: 2},
                                        fillcolor: 'rgba(128, 0, 128, 0.7)'
                                    },
                                    // section2
                                    {
                                        type: 'rect',
                                        x0: OriginalShape.geom[1][0][0],
                                        y0: OriginalShape.geom[1][0][1],
                                        x1: OriginalShape.geom[1][1],
                                        y1: OriginalShape.geom[1][2],
                                        line: {color: 'rgba(128, 0, 128, 1)', width: 2},
                                        fillcolor: 'rgba(128, 0, 128, 0.7)'
                                    },
                                    // section3
                                    {
                                        type: 'rect',
                                        x0: OriginalShape.geom[2][0][0],
                                        y0: OriginalShape.geom[2][0][1],
                                        x1: OriginalShape.geom[2][1] + OriginalShape.geom[2][0][0],
                                        y1: OriginalShape.geom[2][2] + OriginalShape.geom[2][0][1],
                                        line: {color: 'rgba(128, 0, 128, 1)', width: 2},
                                        fillcolor: 'rgba(128, 0, 128, 0.7)'
                                    },
                                    // section4
                                    {
                                        type: 'rect',
                                        x0: OriginalShape.geom[3][0][0],
                                        y0: OriginalShape.geom[3][0][1],
                                        x1: OriginalShape.geom[3][1] + OriginalShape.geom[3][0][0],
                                        y1: OriginalShape.geom[3][2] + OriginalShape.geom[3][0][1],
                                        line: {color: 'rgba(128, 0, 128, 1)', width: 2},
                                        fillcolor: 'rgba(128, 0, 128, 0.7)'
                                    },
                                    // section5
                                    {
                                        type: 'rect',
                                        x0: OriginalShape.geom[4][0][0],
                                        y0: OriginalShape.geom[4][0][1],
                                        x1: OriginalShape.geom[4][1] + OriginalShape.geom[4][0][0],
                                        y1: OriginalShape.geom[4][2] + OriginalShape.geom[4][0][1],
                                        line: {color: 'rgba(128, 0, 128, 1)', width: 2},
                                        fillcolor: 'rgba(128, 0, 128, 0.7)'
                                    },
                                    // section6
                                    {
                                        type: 'rect',
                                        x0: OriginalShape.geom[5][0][0],
                                        y0: OriginalShape.geom[5][0][1],
                                        x1: OriginalShape.geom[5][1] + OriginalShape.geom[5][0][0],
                                        y1: OriginalShape.geom[5][2] + OriginalShape.geom[5][0][1],
                                        line: {color: 'rgba(128, 0, 128, 1)', width: 2},
                                        fillcolor: 'rgba(128, 0, 128, 0.7)'
                                    },
                                    // section7
                                    {
                                        type: 'rect',
                                        x0: OriginalShape.geom[6][0][0],
                                        y0: OriginalShape.geom[6][0][1],
                                        x1: OriginalShape.geom[6][1] + OriginalShape.geom[6][0][0],
                                        y1: OriginalShape.geom[6][2] + OriginalShape.geom[6][0][1],
                                        line: {color: 'rgba(128, 0, 128, 1)', width: 2},
                                        fillcolor: 'rgba(128, 0, 128, 0.7)'
                                    },
                                    // section8
                                    {
                                        type: 'rect',
                                        x0: OriginalShape.geom[7][0][0],
                                        y0: OriginalShape.geom[7][0][1],
                                        x1: OriginalShape.geom[7][1] + OriginalShape.geom[7][0][0],
                                        y1: OriginalShape.geom[7][2] + OriginalShape.geom[7][0][1],
                                        line: {color: 'rgba(128, 0, 128, 1)', width: 2},
                                        fillcolor: 'rgba(128, 0, 128, 0.7)'
                                    }
                                ]
                            }}
                    />
                </Container>
            );
        }
        return (

                <Container>
                    <h1>test</h1>
                    <form onSubmit={this.getSectAnalysis}>
                        <div>
                            <input type="text" name="section1" value='[[0.0,  0.0], 0.3, 5.]'/>
                        </div>
                        <div>
                            <input type="text" name="section2" value='[[0.3,  0.0], 4.0, 0.3]'/>
                        </div>
                        <div>
                            <input type="text" name="section3" value='[[0.3,  2.0], 4.0, 0.3]'/>
                        </div>
                        <div>
                            <input type="text" name="section4" placeholder="[[0.0,  0.0], 0.0, 0.0]"/>
                        </div>
                        <div>
                            <input type="text" name="section5" placeholder="[[0.0,  0.0], 0.0, 0.0]"/>
                        </div>
                        <div>
                            <input type="text" name="section6" placeholder="[[0.0,  0.0], 0.0, 0.0]"/>
                        </div>
                        <div>
                            <input type="text" name="section7" placeholder="[[0.0,  0.0], 0.0, 0.0]"/>
                        </div>
                        <div>
                            <input type="text" name="section8" placeholder="[[0.0,  0.0], 0.0, 0.0]"/>
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
                                    // section 1
                                    {
                                        type: 'rect',
                                        x0: 0,
                                        y0: 0,
                                        x1: .1,
                                        y1: 5,
                                        line: {color: 'rgba(128, 0, 128, 1)'}
                                    },
                                    // section2
                                    {
                                        type: 'rect',
                                        x0: .1,
                                        y0: 0,
                                        x1: 3,
                                        y1: .1,
                                        line: {color: 'rgba(128, 0, 128, 1)', width: 2},
                                        // fillcolor: 'rgba(128, 0, 128, 0.7)'
                                    },
                                    // section3
                                ]
                            }}
                    />
                </Container>
            );

    }
}

export default Products





