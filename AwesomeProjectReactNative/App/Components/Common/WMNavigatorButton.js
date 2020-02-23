import React, { Component } from "react";
import {
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    Dimensions
} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

export default class WMNavigator extends Component {
    render() {
        const { onPress, data, onLogoutPress, subMenus } = this.props;
        return (
            data.title !== 'Logout' ?
                <TouchableOpacity style={styles.expendableButton}
                    onPress={data['signOut'] ? onLogoutPress : onPress}>
                    {<Image source={require('../../Resources/Images/icon_cat.png')} style={[styles.arrowLayout, {}]} />}
                    <Text style={[styles.textLayout]} color="#fff">{data.title}</Text>
                    {!subMenus && data.title !== 'Logout' ? <Icon name="angle-right" style={styles.titleRightIcon} size={20} /> : null}
                </TouchableOpacity> :null
                
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    expendableButton: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 300,
        marginTop: 2,
        backgroundColor: '#fff'
    },
    signOutLayout: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent:'flex-start',
        alignSelf:'flex-end',
        left: 0, 
    },
    arrowLayout: {
        paddingTop: 10,
        height: 30,
        width: 30
    },
    textLayout: {
        color: 'rgba(100,100,100,1)',
        fontSize: 16,
        fontWeight: '500',
        marginLeft: 8,
        lineHeight:24,
        alignSelf: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 5,
        flex: 0.9
    },
    titleRightIcon: {
        color: '#858585',
        marginTop: 10,
        flex: 0.1
    }
});