
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './App/redux/store';
import { AppNavigator } from './App/Navigation/AppNavigator'
import  { StatusBar } from 'react-native'




export default class App extends Component {
    render() {
        console.disableYellowBox = true;
        return (
            <Provider store={store}>
                <AppNavigator>
                    <StatusBar 
                    barStyle="light-content"/>

                </AppNavigator>
            </Provider>
        );
    }
}

