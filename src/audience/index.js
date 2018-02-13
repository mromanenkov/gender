import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import manIcon from './icons/man_icon.svg';
// import './styles.css';

const firstLayer = {
    margin: '50px',
    background: '#673455',
    width: '268px',
    height: '300px',
    position: 'relative',
    overflow: 'hidden'
};
    
const secondLayer = {
    background: '#B5BDCA',
    position: 'absolute',
    width: '100%',
    height: '100%',
}

const thirdLayer = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0
}

//const percent = 30;

class Gender extends Component {
    constructor(props) {
        super(props);
        this.state = {secondLayer: secondLayer};
    }

    componentWillMount() {
        // Get data from server
        const precentFromServer = 70;

        Object.assign(secondLayer, {bottom: `${precentFromServer}%`});
        this.setState({secondLayer: secondLayer});
    }

    render() {
        //Object.assign(secondLayer, {bottom: `${percent}%`});
        console.log(secondLayer)
        return (
            <div style={firstLayer}>
            <div style={secondLayer}></div>
            <img style={thirdLayer} src={manIcon} alt="manIcon"/>
            </div>
        );
    }
}

export default Gender;