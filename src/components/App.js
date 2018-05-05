import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import Main from './Main/Main';

StatusBar.setHidden(true);

export default class App extends Component {
    render() {
        return (
            <Main />
        );
    }
}

