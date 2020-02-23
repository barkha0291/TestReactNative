import React from 'react';
import {
    Dimensions,
    View,
    StyleSheet, 
    TouchableOpacity,
    Text
} from 'react-native';
import {NavigationActions, StackActions} from "react-navigation";
import { connect } from "react-redux";

class WMLeftButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            screenWidth: Dimensions.get('window').width
        }
    }
    handleBackButton = ()=> {
        const { onPress, clearPageInfo } = this.props;
        clearPageInfo();
        onPress();
    }
    render() {
        
        const { isPageNoFoundClear } = this.props;
        return (
            <TouchableOpacity style={styles.container} onPress={() => { this.handleBackButton()}}>
            <View style={{flexDirection:'row'}}>
              <Text style={{color:'#fff',alignSelf:'center',fontSize:18,fontWeight:'500'}}>Back</Text> 
            </View>
                
        </TouchableOpacity>
        );
    }

    back() {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({routeName: 'Home'})],
        });
        this.props.navigation.dispatch(resetAction);
    }
}

const mapStateToProps = (state, ownProps) => {
    return{
        
    }
};

const mapDispatchToProps = (dispatch, ownProps)=>{
    return{
        clearPageInfo:()=>{
            dispatch({
                type:CLEAR_PAGE_INFO
            })
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(WMLeftButton);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center'
    },
    arrowLayout: {
        color: '#fff',
        marginLeft: 3,
        fontSize: 40,
        paddingLeft:10,
        paddingRight:10,
        alignSelf: 'center',
    },
    textLayout: {
        color: 'rgba(27,77,140,1)',
        height: 40,
        fontSize: 18,
        marginTop: 15,
        alignSelf: 'center',
    },
});