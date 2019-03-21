import React, { Component } from 'react';
import './App.css';
import Sample from './components/Sample/Sample';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>React/Express Boilerplate</h1>
                <Sample />
            </div>
        );
    }
}

export default App;
