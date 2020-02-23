import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';
import WMLeftButton from '../../Components/Common/WMLeftButton';
import WMHeader from './WMHeader'

export default NavigatorOpt = (navigation, option = {}) => {
    if (!!option['isPageNoFoundClear']) {
        return {
            headerTitle: <WMHeader title={option.headerTitle ? option.headerTitle : ''} />,
            headerLeft: (props) => <WMLeftButton navigation={navigation} {...option} {...props} />,
            headerStyle: option.isBackButton ? styles.headerStyleBack : styles.headerStyle,
            headerTintColor: '#fff',
            headerTitleStyle: styles.headerTitleStyle,
        }
    } else {
        return {
            headerTitle: <WMHeader title={option.headerTitle ? option.headerTitle : ''} />,
            headerLeft:
                option.isBackButton ? undefined : navigation.state.params !== undefined && navigation.state.params.back !== undefined && navigation.state.params.back ?
                    <WMLeftButton navigation={navigation} {...option} /> :
                    <TouchableOpacity onPress={() => {
                        navigation.openDrawer();
                    }}>
                        <Image style={{ height: 25, width: 25, marginLeft: 5 }}
                            source={require('../../Resources/Images/bullpen.png')} />
                    </TouchableOpacity>,
            headerStyle: option.isBackButton ? styles.headerStyleBack : styles.headerStyle,
            headerTintColor: '#fff',
            headerTitleStyle: styles.headerTitleStyle,
        }
    }

};

const styles = StyleSheet.create({
    arrowLayout: {
        color: '#fff',
        height: 40,
        width: 40,
        paddingTop: 10,
        paddingRight: 2,
        marginLeft: 10,
        fontSize: 20,
        alignSelf: 'flex-end'
    },
    headerStyle: {
        backgroundColor: '#0071e9',
        shadowColor: '#000',
        elevation: 0,
        borderBottomWidth: 0,
    },
    headerStyleBack: {
        backgroundColor: '#0071e9',
        borderBottomWidth: 0,
    },
    headerTitleStyle: {
        fontWeight: 'normal',
        width: 200,
    },
})