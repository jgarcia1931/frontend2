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
        // const config = {
        //     headers: {
        //         'Content-Type': 'application/x-www-form-urlencoded'
        //     }
        // }
        //
        // const response = await

        var self = this;
        axios({
        method: 'post',
        url: 'https://sectionanalysistest.herokuapp.com/',
        data: bodyFormData,
        headers: {
        'content-type': 'multipart/form-data'
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
            }

            //line vertical
            OriginalShapearray.push({
                    type: 'line',
                    x0: OriginalShape.props.xbar_cg,
                    y0: 0,
                    x1: OriginalShape.props.xbar_cg,
                    y1: OriginalShape.props.max_y * 1.3,
                    line: {
                        color: 'red',
                        width: 3,
                        dash: 'dashdot'
                    }
                })

            //Line Horizontal
            OriginalShapearray.push({
                type: 'line',
                x0: 0,
                y0: OriginalShape.props.ybar_cg,
                x1: OriginalShape.props.max_x * 1.3,
                y1: OriginalShape.props.ybar_cg,
                line: {
                    color: 'red',
                    width: 4,
                    dash: 'dashdot'
                }
            })

            return OriginalShapearray
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
            }

            //line vertical
            Upperarray.push({
                    type: 'line',
                    x0: Upper.props.xbar_cg,
                    y0: 0,
                    x1: Upper.props.xbar_cg,
                    y1: Upper.props.max_y * 1.3,
                    line: {
                        color: 'red',
                        width: 3,
                        dash: 'dashdot'
                    }
                })

            //Line Horizontal
            Upperarray.push({
                type: 'line',
                x0: 0,
                y0: Upper.props.ybar_cg,
                x1: Upper.props.max_x * 1.3,
                y1: Upper.props.ybar_cg,
                line: {
                    color: 'red',
                    width: 4,
                    dash: 'dashdot'
                }
            })

            return Upperarray
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
            }

            //line vertical
            Lowerarray.push({
                    type: 'line',
                    x0: Lower.props.xbar_cg,
                    y0: 0,
                    x1: Lower.props.xbar_cg,
                    y1: Lower.props.max_y * 1.3,
                    line: {
                        color: 'red',
                        width: 3,
                        dash: 'dashdot'
                    }
                })

            //Line Horizontal
            Lowerarray.push({
                type: 'line',
                x0: 0,
                y0: Lower.props.ybar_cg,
                x1: Lower.props.max_x * 1.3,
                y1: Lower.props.ybar_cg,
                line: {
                    color: 'red',
                    width: 4,
                    dash: 'dashdot'
                }
            })
            return Lowerarray
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
            }

            //line vertical
            UpperMirroredPropsarray.push({
                    type: 'line',
                    x0: UpperMirroredProps.props.xbar_cg,
                    y0: 0,
                    x1: UpperMirroredProps.props.xbar_cg,
                    y1: UpperMirroredProps.props.max_y * 1.3,
                    line: {
                        color: 'red',
                        width: 3,
                        dash: 'dashdot'
                    }
                })

            //Line Horizontal
            UpperMirroredPropsarray.push({
                type: 'line',
                x0: 0,
                y0: UpperMirroredProps.props.ybar_cg,
                x1: UpperMirroredProps.props.max_x * 1.3,
                y1: UpperMirroredProps.props.ybar_cg,
                line: {
                    color: 'red',
                    width: 4,
                    dash: 'dashdot'
                }
            })

            return UpperMirroredPropsarray
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
            }

            //line vertical
            LowerMirroredPropsarray.push({
                    type: 'line',
                    x0: LowerMirroredProps.props.xbar_cg,
                    y0: 0,
                    x1: LowerMirroredProps.props.xbar_cg,
                    y1: LowerMirroredProps.props.max_y * 1.3,
                    line: {
                        color: 'red',
                        width: 3,
                        dash: 'dashdot'
                    }
                })

            //Line Horizontal
            LowerMirroredPropsarray.push({
                type: 'line',
                x0: 0,
                y0: LowerMirroredProps.props.ybar_cg,
                x1: LowerMirroredProps.props.max_x * 1.3,
                y1: LowerMirroredProps.props.ybar_cg,
                line: {
                    color: 'red',
                    width: 4,
                    dash: 'dashdot'
                }
            })

            return LowerMirroredPropsarray
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
            // debugger;
            return (

                <Container>
                    <h1>Section Properties</h1>
                    <p>[[x coord, y-coord] base, height]</p>
                    <form onSubmit={this.getSectAnalysis}>
                        <div>
                            <input type="text" name="section1"  placeholder="[[0.0,  0.0], 0.0, 0.0]"/>
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
                        <button>Get Section Props</button>
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
                                xaxis: {range: [0, OriginalShape.props.max_x * 1.3], showgrid: false},
                                yaxis: {range: [0, OriginalShape.props.max_y * 1.3]},
                                width: 500,
                                height: 500,
                                shapes: OriginalShapearray

                            }}
                    />

                    <ul>
                        <li>Ax {OriginalShape.props.Ax.toFixed(2)}</li>
                        <li>Ay {OriginalShape.props.Ay.toFixed(2)}</li>
                        <li>Ix {OriginalShape.props.Iox_all.toFixed(2)}</li>
                        <li>Iy {OriginalShape.props.Ioy_all.toFixed(2)}</li>
                        <li>xbar {OriginalShape.props.xbar_cg.toFixed(2)}</li>
                        <li>ybar {OriginalShape.props.ybar_cg.toFixed(2)}</li>
                    </ul>

                    <Plot
                        layout=
                            {{
                                title: 'Upper Section',
                                xaxis: {range: [0, Upper.props.max_x * 1.3], showgrid: false},
                                yaxis: {range: [0, Upper.props.max_y * 1.3]},
                                width: 500,
                                height: 500,
                                shapes: Upperarray
                            }}
                    />
                    <ul>
                        <li>Ax {Upper.props.Ax.toFixed(2)}</li>
                        <li>Ay {Upper.props.Ay.toFixed(2)}</li>
                        <li>Ix {Upper.props.Iox_all.toFixed(2)}</li>
                        <li>Iy {Upper.props.Ioy_all.toFixed(2)}</li>
                        <li>xbar {Upper.props.xbar_cg.toFixed(2)}</li>
                        <li>ybar {Upper.props.ybar_cg.toFixed(2)}</li>
                    </ul>

                    <Plot
                        layout=
                            {{
                                title: 'Lower Section',
                                xaxis: {range: [0, Lower.props.max_x * 1.3], showgrid: false},
                                yaxis: {range: [0, Lower.props.max_y * 1.3]},
                                width: 500,
                                height: 500,
                                shapes: Lowerarray
                            }}
                    />
                    <ul>
                        <li>Ax {Lower.props.Ax.toFixed(2)}</li>
                        <li>Ay {Lower.props.Ay.toFixed(2)}</li>
                        <li>Ix {Lower.props.Iox_all.toFixed(2)}</li>
                        <li>Iy {Lower.props.Ioy_all.toFixed(2)}</li>
                        <li>xbar {Lower.props.xbar_cg.toFixed(2)}</li>
                        <li>ybar {Lower.props.ybar_cg.toFixed(2)}</li>
                    </ul>

                    <Plot
                        layout=
                            {{
                                title: 'Upper Mirrored Section',
                                xaxis: {range: [0, UpperMirroredProps.props.max_x * 1.3], showgrid: false},
                                yaxis: {range: [0, UpperMirroredProps.props.max_y * 1.3]},
                                width: 500,
                                height: 500,
                                shapes: UpperMirroredPropsarray
                            }}
                    />
                    <ul>
                        <li>Ax {UpperMirroredProps.props.Ax.toFixed(2)}</li>
                        <li>Ay {UpperMirroredProps.props.Ay.toFixed(2)}</li>
                        <li>Ix {UpperMirroredProps.props.Iox_all.toFixed(2)}</li>
                        <li>Iy {UpperMirroredProps.props.Ioy_all.toFixed(2)}</li>
                        <li>xbar {UpperMirroredProps.props.xbar_cg.toFixed(2)}</li>
                        <li>ybar {UpperMirroredProps.props.ybar_cg.toFixed(2)}</li>
                    </ul>

                    <Plot
                        layout=
                            {{
                                title: 'Lower Mirrored Section',
                                xaxis: {range: [0, LowerMirroredProps.props.max_x * 1.3], showgrid: false},
                                yaxis: {range: [0, LowerMirroredProps.props.max_y * 1.3]},
                                width: 500,
                                height: 500,
                                shapes: LowerMirroredPropsarray
                            }}
                    />
                    <ul>
                        <li>Ax {LowerMirroredProps.props.Ax.toFixed(2)}</li>
                        <li>Ay {LowerMirroredProps.props.Ay.toFixed(2)}</li>
                        <li>Ix {LowerMirroredProps.props.Iox_all.toFixed(2)}</li>
                        <li>Iy {LowerMirroredProps.props.Ioy_all.toFixed(2)}</li>
                        <li>xbar {LowerMirroredProps.props.xbar_cg.toFixed(2)}</li>
                        <li>ybar {LowerMirroredProps.props.ybar_cg.toFixed(2)}</li>
                    </ul>

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
                        <button>Get Section Props</button>
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





