import React from 'react';
import axios from 'axios'

export class IrisApp extends React.Component {

    state = {
        sepal_length: undefined,
        sepal_width: undefined,
        petal_length: undefined,
        petal_width: undefined,
        prediction: undefined,
        isLoaded: false,
        error: undefined
    }

    getIris = async (e) => {
        e.preventDefault();
        const sepal_length = e.target.elements.sepal_length.value;
        const sepal_width = e.target.elements.sepal_width.value;
        const petal_length = e.target.elements.petal_length.value;
        const petal_width = e.target.elements.petal_width.value;


        // const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}&units=metrics`);
        debugger;
        var config = {headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}}
        const api_call = await axios.post("https://timezone-printer2.herokuapp.com/",
            {
                sepal_length: sepal_length,
                sepal_width: sepal_width,
                petal_length: petal_length,
                petal_width: petal_width
            }, config)
            .then(res => this.setState({
                prediction: res,
                isLoaded: true
            }))
            .catch(err => console.log(err));
        debugger;
        const res = await api_call.json()
        debugger;
    }


    render() {
        return(
            <div>
                <form onSubmit={this.getIris}>
                    <input type="text" name="sepal_length" placeholder="sepal_length..." />
                    <input type="text" name="sepal_width" placeholder="sepal_width..." />
                    <input type="text" name="petal_length" placeholder="petal_length..." />
                    <input type="text" name="petal_width" placeholder="petal_width..." />
                    <button>Get Flower</button>
                </form>

                <div>
                    {this.state.prediction && <p>Flower: {this.state.prediction}</p>}
                </div>

            </div>
        );
    }
}

export default IrisApp;