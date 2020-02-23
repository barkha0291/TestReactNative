import React from 'react';
import {connect} from 'react-redux';
import RootNavigator from './RootNavigator';

const mapStateToProps = state => ({
    state: state.navigation,
});
const AppNavigator = connect(mapStateToProps)(RootNavigator);

export {RootNavigator, AppNavigator};