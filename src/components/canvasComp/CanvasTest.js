import React from "react";
import { fabric } from "fabric";
import {Container, Row, Col} from "react-bootstrap";
import pug from '../../images/pug.png'
// import fabric from 'react-fabricjs';
// const fabric = window.fabric;

export class CanvasTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            left: 0,
            top: 0,
            width: 100,
            height: 100,
            angle: 0,
            scaleX: 1,
            scaleY: 1,
            skewX: 0,
            skewY: 0,
            opacity: 1,
            canvas: "",
            rect: "",
            imgInstance:"",
            urlvall: "",
            canvasChange: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.testFunc = this.testFunc.bind(this);
    }

    // componentDidMount() {
    //     var canvas1 = new fabric.Canvas('c');
    //     var rect = new fabric.Rect({
    //         left: this.state.left,
    //         top: this.state.top,
    //         fill: 'red',
    //         width: this.state.width,
    //         height: this.state.height,
    //         angle: this.state.angle,
    //         scaleX: this.state.scaleX,
    //         skewX: this.state.skewX,
    //         skewY: this.state.skewY
    //     });
    //
    //     this.setState({
    //         rect: rect
    //     })
    //     debugger;
    //     canvas1.add(rect);
    // }


    handleChange = async (e) => {
        e.preventDefault();
        debugger;

        var leftval = e.target.name == "leftval"          ? parseInt(e.target.value) : this.state.left
        var topval  = e.target.name == "topval"           ? parseInt(e.target.value) : this.state.top
        var widthval = e.target.name == "widthval"        ? parseInt(e.target.value) : this.state.width
        var heightval  = e.target.name == "heightval"     ? parseInt(e.target.value) : this.state.height
        var angleval = e.target.name == "angleval"        ? parseInt(e.target.value) : this.state.angle
        var scaleXval  = e.target.name == "scaleXval"     ? parseFloat(e.target.value) : this.state.scaleX
        var scaleYval  = e.target.name == "scaleYval"     ? parseFloat(e.target.value) : this.state.scaleY
        var skewXval = e.target.name == "skewXval"        ? parseInt(e.target.value) : this.state.skewX
        var skewYval  = e.target.name == "skewYval"       ? parseInt(e.target.value) : this.state.skewY
        var opacityval  = e.target.name == "opacityval"   ? parseInt(e.target.value) : this.state.opacity
        var urlval    = e.target.innerText == "Add"  ? e.target.elements.imageadd.value : ""

        this.setState( {
            left: leftval,
            top: topval,
            width: widthval,
            height: heightval,
            angle: angleval,
            scaleX: scaleXval,
            scaleY: scaleYval,
            skewX: skewXval,
            skewY: skewYval,
            opacity: opacityval,
            urlval: urlval,
            canvasChange: true
        });

    }

    testFunc(){
            var canvas1 = new fabric.Canvas('c');

            var rect = new fabric.Rect({
                left: this.state.left,
                top: this.state.top,
                fill: 'red',
                width: this.state.width,
                height: this.state.height,
                angle: this.state.angle,
                scaleX: this.state.scaleX,
                skewX: this.state.skewX,
                skewY: this.state.skewY
            });
            this.setState({
                rect: rect,
                canvas: canvas1
            });
            canvas1.add( rect);

    }

    render() {
        const { left, canvasChange, width, height} = this.state
        if(canvasChange){
            debugger;
            console.log(this.state.left)

            // const canvas1 = new fabric.Canvas('c');
            var canvas1 = this.state.canvas
            canvas1.add(this.state.rect);
            var rectcurr = this.state.rect;
            rectcurr.set({
                left: this.state.left,
                top: this.state.top,
                width: this.state.width,
                height: this.state.height,
                angle: this.state.angle,
                scaleX: this.state.scaleX,
                scaleY: this.state.scaleY,
                skewX: this.state.skewX,
                skewY: this.state.skewY,
                opacity: this.state.opacity
            });
            canvas1.renderAll();

            if (this.state.urlval != "") {
                fabric.Image.fromURL(this.state.urlval, function (img) {
                    var img1 = img.scale(0.1).set({left: 100, top: 100});
                    canvas1.add(new fabric.Group([img1], {left: 200, top: 200}))
                });
            }

        }
        return (
            <Container>
                <hr/>
                <Row>
                    <Col md={5}>
                        <canvas id="c" ref={this.testFunc} width={400} height={400}></canvas>
                    </Col>
                    <Col className="align-self-center" md={2.5}>
                        <span>Left Alight </span>
                        <hr/>
                        <span>Top Alight </span>
                        <hr/>
                        <span>Width Adj </span>
                        <hr/>
                        <span>Height Adj</span>
                        <hr/>
                        <span>Angle</span>
                        <hr/>
                        <span>Scale X </span>
                        <hr/>
                        <span>Scale Y</span>
                        <hr/>
                        <span>Skew X</span>
                        <hr/>
                        <span>Skew Y </span>
                        <hr/>
                        <span>Opacity</span>
                        <hr/>
                        <span>URL Input</span>
                    </Col>
                    <Col className="align-self-center" md={2.5}>
                        <input name="leftval" type="range" min="0" max={400 - width} step="1" defaultValue={this.state.left} onChange={this.handleChange}/>
                        <hr/>
                        <input name="topval" type="range" min="0" max={400 - height} step="1" defaultValue={this.state.top} onChange={this.handleChange}/>
                        <hr/>
                        <input name="widthval" type="range" min="0" max="100" step="1" defaultValue={this.state.width} onChange={this.handleChange}/>
                        <hr/>
                        <input name="heightval" type="range" min="0" max="100" step="1" defaultValue={this.state.height} onChange={this.handleChange}/>
                        <hr/>
                        <input name="angleval" type="range" min="0" max="360" step="1" defaultValue={this.state.angle} onChange={this.handleChange}/>
                        <hr/>
                        <input name="scaleXval" type="range" min="1" max="2" step="0.1" defaultValue={this.state.scaleX} onChange={this.handleChange}/>
                        <hr/>
                        <input name="scaleYval" type="range" min="1" max="2" step="0.1" defaultValue={this.state.scaleX} onChange={this.handleChange}/>
                        <hr/>
                        <input name="skewXval" type="range" min="0" max="100" step="1" defaultValue={this.state.skewX} onChange={this.handleChange}/>
                        <hr/>
                        <input name="skewYval" type="range" min="0" max="100" step="1" defaultValue={this.state.skewY} onChange={this.handleChange}/>
                        <hr/>
                        <input name="opacityval" type="range" min="0" max="100" step="1" defaultValue={this.state.opacity} onChange={this.handleChange}/>
                        <hr/>

                        <form onSubmit={this.handleChange}>
                            <input type="text" name="imageadd" placeholder="addimage.."/>
                            <button>Add</button>
                        </form>
                    </Col>
                </Row>
                <hr/>
            </Container>
        )
    }
}
export default CanvasTest