import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Platform
} from 'react-native';
class WMHeader extends React.Component {    
        render() {
            let options = this.props.title
            return (
              <View style={Platform.OS==='android'?styles.androidContainer:styles.container}>
                <Text style={styles.headerTitleStyle}>{options}</Text>
              </View>
            );
          }


};
export default (WMHeader);
const styles = StyleSheet.create({
    headerTitleStyle: {
        flexWrap:'wrap',
        color:'white',
        fontSize:16,
        lineHeight:20,
        letterSpacing:0.4,
        fontWeight:'600',
        
    },
    container:{
        flex:1,
        alignSelf:'center',
        alignItems:'center' 
        
    },
    androidContainer:{
        flex:1,
    }
})