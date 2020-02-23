import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { NavigationActions, StackActions } from "react-navigation";
import { connect } from "react-redux";

class SideMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            screenWidth: Dimensions.get('window').width,
            production: false,
            logoutModel:false
        }
    }

    navigate = (screenName, buttonText, nextPage) => {
        this.setState({production: false})
        const navigateToScreen = NavigationActions.navigate({
            routeName: screenName,
            params: {
                pageTitle: buttonText,
                nextPage
            },

        });
        this.props.navigation.dispatch(navigateToScreen);
    };

    render() {
        return (
            <View style={{flex:1}}>
            </View>
            
        );
       
    }

}

const mapStateToProps = state => ({
    homeData:state.apiReducer.homeData
});
export default connect(mapStateToProps)(SideMenu);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    arrowLayout: {
        marginLeft: 10,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 5,
        height:40,
        width:40
    },
    signOutLayout: {
        flexDirection: 'row',
        shadowOffset: {width: 1, height: 1},
        shadowColor: 'grey',
        elevation: 10,
        borderColor:'grey',
        shadowRadius: 5,
        borderRadius: 5,
        shadowOpacity: 0.8,
        backgroundColor:'white',
        height:50,
      
    },
    sectionHeader:{
        backgroundColor:'#dbdbdb',
    },
    textLayout: {
        color: 'rgba(100,100,100,1)',
        fontSize: 18,
        fontWeight: '500',
        alignSelf: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 5
    },
    signOutText: {
        flexDirection: 'row',
        left: 0, 
        fontWeight: '600',
        alignSelf: 'center',
        paddingTop: 8,
        paddingBottom: 10,
        paddingLeft: 5,
        lineHeight:24,
        fontSize:16,
        color:'#6a6b6e'
    },
    sectionHeaderText:{
        color:'#6a6b6e',
        fontSize:12,
        letterSpacing:0.41,
        height:35,
        marginLeft:7,
        paddingLeft:10,
        paddingTop:10,
        fontWeight:'900'
    },
    iconSign:{
        color:'#616161',
        fontSize:35,
        marginLeft:12,
        paddingTop:5
       },
    expendableButton: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 295,
        marginTop: 2,
        marginLeft:5,
        backgroundColor: '#fff'
    },
    arrowLayout: {
        color: '#000',
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
        flex: 0.91
    },
    titleRightIcon: {
        color: '#858585',
        marginTop: 10,
        flex: 0.08
    }
});
