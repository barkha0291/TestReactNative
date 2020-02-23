import React from 'react';
import {
    Dimensions,
    View,
    StyleSheet, TouchableOpacity, NativeModules, Image
} from 'react-native';
import {NavigationActions} from "react-navigation";

const WMSSO = NativeModules.WMSSO;
import { connect } from "react-redux";
import { setUserData } from "../../redux/actions/user";
import store from '../../redux/store';

class WMRightButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            screenWidth: Dimensions.get('window').width
        }
    }

    render() {
        return (

            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => this.Logout()}>
                    <Image style={styles.rectangle} source={require('../../Resources/Images/account.png')}/>
                </TouchableOpacity>
            </View>
        );
    }

    Logout() {
        const navigateToScreen = NavigationActions.navigate({
            routeName: 'SideMenu',

        });
        this.props.navigation.dispatch(navigateToScreen);
    }

    SSOSigOut() {
        WMSSO.signOutUser().then((user) => {
            store.dispatch(setUserData({}));
        }).catch((err) => {
            console.error('Error during sign out', err);
        })
    }

}

const mapStateToProps = state => ({});
const mapDispatchToProps = {
    setUserData
};
export default connect(mapStateToProps, mapDispatchToProps)(WMRightButton);


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    nameLayout: {
        color: 'rgba(27,77,140,1)',
        height: 30,
        marginRight: 5
    },
    signOutLayout: {
        color: 'red',
        height: 20,
    },
    rectangle: {
        width: 25,
        height: 25,
        borderColor: 'white',
        marginRight: 5
    }
});