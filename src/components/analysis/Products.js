import React, { Component } from "react";
import Plot from 'react-plotly.js';
import Container from "react-bootstrap/Container";
import axios from "axios";
import WeatherApp from "../PostPage";
import ReactHtmlParser from "react-html-parser";

export class Products extends Component {
        constructor(props) {
        super(props);
        this.state = {
            Lower: undefined,
            UpperMirroredProps: undefined,
            LowerMirroredProps: undefined,
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
            // debugger;
        e.preventDefault();
        const section1 = e.target.elements.section1.value ? e.target.elements.section1.value : '[[0.0,  0.0], 0.0, 0.0]'
        const section2 = e.target.elements.section2.value ? e.target.elements.section2.value : '[[0.0,  0.0], 0.0, 0.0]'
        const section3 = e.target.elements.section3.value ? e.target.elements.section3.value : '[[0.0,  0.0], 0.0, 0.0]'
        const section4 = e.target.elements.section4.value ? e.target.elements.section4.value : '[[0.0,  0.0], 0.0, 0.0]'
        const section5 = e.target.elements.section5.value ? e.target.elements.section5.value : '[[0.0,  0.0], 0.0, 0.0]'
        const section6 = e.target.elements.section6.value ? e.target.elements.section6.value : '[[0.0,  0.0], 0.0, 0.0]'
        const section7 = e.target.elements.section7.value ? e.target.elements.section7.value : '[[0.0,  0.0], 0.0, 0.0]'
        const section8 = e.target.elements.section8.value ? e.target.elements.section8.value : '[[0.0,  0.0], 0.0, 0.0]'

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
            // debugger;
            console.log(response);
            self.setState({
                    Lower: response.data.analysis.Lower,
                    UpperMirroredProps: response.data.analysis.UpperMirroredProps,
                    LowerMirroredProps: response.data.analysis.LowerMirroredProps,
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

        // debugger;
    };
    render() {
        var OriginalShapecnt = -1
        var OriginalShapearray = [];
        function testFunc1(shape1) {
            if (shape1) {
                OriginalShapecnt++;
                OriginalShapearray.push(
                    {
                        type: 'rect',
                        x0: OriginalShape.geom[OriginalShapecnt][0][0],
                        y0: OriginalShape.geom[OriginalShapecnt][0][1],
                        x1: OriginalShape.geom[OriginalShapecnt][1] + OriginalShape.geom[OriginalShapecnt][0][0],
                        y1: OriginalShape.geom[OriginalShapecnt][2] + OriginalShape.geom[OriginalShapecnt][0][1],
                        line: {color: 'rgba(128, 0, 128, 1)', width: 2},
                        fillcolor: 'rgba(128, 0, 128, 0.7)'
                    })
                return OriginalShapearray
            }
        }

        var Uppercnt = -1
        var Upperarray = [];
        function testFunc2(shape1) {
            if (shape1) {
                Uppercnt++;
                Upperarray.push(
                    {
                        type: 'rect',
                        x0: Upper.geom[Uppercnt][0][0],
                        y0: Upper.geom[Uppercnt][0][1],
                        x1: Upper.geom[Uppercnt][1] + Upper.geom[Uppercnt][0][0],
                        y1: Upper.geom[Uppercnt][2] + Upper.geom[Uppercnt][0][1],
                        line: {color: 'rgba(128, 0, 128, 1)', width: 2},
                        fillcolor: 'rgba(128, 0, 128, 0.7)'
                    })
                return Upperarray
            }
        }

        var Lowercnt = -1
        var Lowerarray = [];
        function testFunc3(shape1) {
            if (shape1) {
                Lowercnt++;
                Lowerarray.push(
                    {
                        type: 'rect',
                        x0: Lower.geom[Lowercnt][0][0],
                        y0: Lower.geom[Lowercnt][0][1],
                        x1: Lower.geom[Lowercnt][1] + Lower.geom[Lowercnt][0][0],
                        y1: Lower.geom[Lowercnt][2] + Lower.geom[Lowercnt][0][1],
                        line: {color: 'rgba(128, 0, 128, 1)', width: 2},
                        fillcolor: 'rgba(128, 0, 128, 0.7)'
                    })
                return Lowerarray
            }
        }

        var UpperMirroredPropscnt = -1
        var UpperMirroredPropsarray = [];
        function testFunc4(shape1) {
            if (shape1) {
                UpperMirroredPropscnt++;
                UpperMirroredPropsarray.push(
                    {
                        type: 'rect',
                        x0: UpperMirroredProps.geom[UpperMirroredPropscnt][0][0],
                        y0: UpperMirroredProps.geom[UpperMirroredPropscnt][0][1],
                        x1: UpperMirroredProps.geom[UpperMirroredPropscnt][1] + UpperMirroredProps.geom[UpperMirroredPropscnt][0][0],
                        y1: UpperMirroredProps.geom[UpperMirroredPropscnt][2] + UpperMirroredProps.geom[UpperMirroredPropscnt][0][1],
                        line: {color: 'rgba(128, 0, 128, 1)', width: 2},
                        fillcolor: 'rgba(128, 0, 128, 0.7)'
                    })
                return UpperMirroredPropsarray
            }
        }

        var LowerMirroredPropscnt = -1
        var LowerMirroredPropsarray = [];
        function testFunc5(shape1) {
            if (shape1) {
                LowerMirroredPropscnt++;
                LowerMirroredPropsarray.push(
                    {
                        type: 'rect',
                        x0: LowerMirroredProps.geom[LowerMirroredPropscnt][0][0],
                        y0: LowerMirroredProps.geom[LowerMirroredPropscnt][0][1],
                        x1: LowerMirroredProps.geom[LowerMirroredPropscnt][1] + LowerMirroredProps.geom[LowerMirroredPropscnt][0][0],
                        y1: LowerMirroredProps.geom[LowerMirroredPropscnt][2] + LowerMirroredProps.geom[LowerMirroredPropscnt][0][1],
                        line: {color: 'rgba(128, 0, 128, 1)', width: 2},
                        fillcolor: 'rgba(128, 0, 128, 0.7)'
                    })
                return LowerMirroredPropsarray
            }
        }

        const {OriginalShape,Upper, Lower, UpperMirroredProps, LowerMirroredProps, isLoaded} = this.state
        // const x1 = OriginalShape.geom[""0""][""0""][""0""];
        // x OriginalShape.geom[0][0][0];
        // y OriginalShape.geom[0][0][1]
        // base OriginalShape.geom[0][1]
        // height OriginalShape.geom[0][2]
        // debugger;
        if (isLoaded) {
            OriginalShape.geom.map(shape1 => (  testFunc1(shape1) ))
            Upper.geom.map(shape1 => (  testFunc2(shape1) ))
            Lower.geom.map(shape1 => (  testFunc3(shape1) ))
            UpperMirroredProps.geom.map(shape1 => (  testFunc4(shape1) ))
            LowerMirroredProps.geom.map(shape1 => (  testFunc5(shape1) ))
            debugger;
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
                                shapes: OriginalShapearray


                                    // // section 1
                                    // {
                                    //     type: 'rect',
                                    //     x0: OriginalShape.geom[0][0][0],
                                    //     y0: OriginalShape.geom[0][0][1],
                                    //     x1: OriginalShape.geom[0][1] + OriginalShape.geom[0][0][0],
                                    //     y1: OriginalShape.geom[0][2] + OriginalShape.geom[0][0][1],
                                    //     line: {color: 'rgba(128, 0, 128, 1)', width: 2},
                                    //     fillcolor: 'rgba(128, 0, 128, 0.7)'
                                    // },
                                    // // section2
                                    // {
                                    //     type: 'rect',
                                    //     x0: OriginalShape.geom[1][0][0],
                                    //     y0: OriginalShape.geom[1][0][1],
                                    //     x1: OriginalShape.geom[1][1],
                                    //     y1: OriginalShape.geom[1][2],
                                    //     line: {color: 'rgba(128, 0, 128, 1)', width: 2},
                                    //     fillcolor: 'rgba(128, 0, 128, 0.7)'
                                    // },
                                    // // section3
                                    // {
                                    //     type: 'rect',
                                    //     x0: OriginalShape.geom[2][0][0],
                                    //     y0: OriginalShape.geom[2][0][1],
                                    //     x1: OriginalShape.geom[2][1] + OriginalShape.geom[2][0][0],
                                    //     y1: OriginalShape.geom[2][2] + OriginalShape.geom[2][0][1],
                                    //     line: {color: 'rgba(128, 0, 128, 1)', width: 2},
                                    //     fillcolor: 'rgba(128, 0, 128, 0.7)'
                                    // },
                                    // // section4
                                    // {
                                    //     type: 'rect',
                                    //     x0: OriginalShape.geom[3][0][0],
                                    //     y0: OriginalShape.geom[3][0][1],
                                    //     x1: OriginalShape.geom[3][1] + OriginalShape.geom[3][0][0],
                                    //     y1: OriginalShape.geom[3][2] + OriginalShape.geom[3][0][1],
                                    //     line: {color: 'rgba(128, 0, 128, 1)', width: 2},
                                    //     fillcolor: 'rgba(128, 0, 128, 0.7)'
                                    // },
                                    // // section5
                                    // {
                                    //     type: 'rect',
                                    //     x0: OriginalShape.geom[4][0][0],
                                    //     y0: OriginalShape.geom[4][0][1],
                                    //     x1: OriginalShape.geom[4][1] + OriginalShape.geom[4][0][0],
                                    //     y1: OriginalShape.geom[4][2] + OriginalShape.geom[4][0][1],
                                    //     line: {color: 'rgba(128, 0, 128, 1)', width: 2},
                                    //     fillcolor: 'rgba(128, 0, 128, 0.7)'
                                    // },
                                    // // section6
                                    // {
                                    //     type: 'rect',
                                    //     x0: OriginalShape.geom[5][0][0],
                                    //     y0: OriginalShape.geom[5][0][1],
                                    //     x1: OriginalShape.geom[5][1] + OriginalShape.geom[5][0][0],
                                    //     y1: OriginalShape.geom[5][2] + OriginalShape.geom[5][0][1],
                                    //     line: {color: 'rgba(128, 0, 128, 1)', width: 2},
                                    //     fillcolor: 'rgba(128, 0, 128, 0.7)'
                                    // },
                                    // // section7
                                    // {
                                    //     type: 'rect',
                                    //     x0: OriginalShape.geom[6][0][0],
                                    //     y0: OriginalShape.geom[6][0][1],
                                    //     x1: OriginalShape.geom[6][1] + OriginalShape.geom[6][0][0],
                                    //     y1: OriginalShape.geom[6][2] + OriginalShape.geom[6][0][1],
                                    //     line: {color: 'rgba(128, 0, 128, 1)', width: 2},
                                    //     fillcolor: 'rgba(128, 0, 128, 0.7)'
                                    // },
                                    // // section8
                                    // {
                                    //     type: 'rect',
                                    //     x0: OriginalShape.geom[7][0][0],
                                    //     y0: OriginalShape.geom[7][0][1],
                                    //     x1: OriginalShape.geom[7][1] + OriginalShape.geom[7][0][0],
                                    //     y1: OriginalShape.geom[7][2] + OriginalShape.geom[7][0][1],
                                    //     line: {color: 'rgba(128, 0, 128, 1)', width: 2},
                                    //     fillcolor: 'rgba(128, 0, 128, 0.7)'
                                    // }
                            }}
                    />

                    <Plot
                        layout=
                            {{
                                title: 'Upper Section',
                                xaxis: {range: [0, 10], showgrid: false},
                                yaxis: {range: [0, 10]},
                                width: 500,
                                height: 500,
                                shapes: Upperarray
                            }}
                    />

                    <Plot
                        layout=
                            {{
                                title: 'Upper Section',
                                xaxis: {range: [0, 10], showgrid: false},
                                yaxis: {range: [0, 10]},
                                width: 500,
                                height: 500,
                                shapes: Lowerarray
                            }}
                    />

                    <Plot
                        layout=
                            {{
                                title: 'Upper Mirrored Section',
                                xaxis: {range: [0, 10], showgrid: false},
                                yaxis: {range: [0, 10]},
                                width: 500,
                                height: 500,
                                shapes: UpperMirroredPropsarray
                            }}
                    />

                    <Plot
                        layout=
                            {{
                                title: 'Lower Mirrored Section',
                                xaxis: {range: [0, 10], showgrid: false},
                                yaxis: {range: [0, 10]},
                                width: 500,
                                height: 500,
                                shapes: LowerMirroredPropsarray
                            }}
                    />

                </Container>
            );
        }
        return (

                <Container>
                    <h1>Section Properties</h1>
                    <p>[[x coord, y-coord] base, height]</p>
                    <form onSubmit={this.getSectAnalysis}>
                        <div>
                            <input type="text" name="section1" placeholder="[[0.0,  0.0], 0.3, 5.]"/>
                        </div>
                        <div>
                            <input type="text" name="section2" placeholder="[[0.3,  0.0], 4.0, 0.3]"/>
                        </div>
                        <div>
                            <input type="text" name="section3" placeholder="[[0.3,  2.0], 4.0, 0.3]"/>
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





