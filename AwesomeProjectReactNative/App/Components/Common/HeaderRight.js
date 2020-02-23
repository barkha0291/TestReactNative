
import React from 'react';
import {
     TouchableOpacity,Text
} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

class HeaderRight extends React.Component {

    render(){
        return(
            <TouchableOpacity style={inner_styles.container} onPress={() => {
        // navigation.openDrawer();
         }}>
        <Text
            style={{color: "white"}}> {navigation.state.params !== undefined && navigation.state.params.userId !== undefined ? navigation.state.params.userId : ""}</Text>
        <Icon name="user-circle" style={inner_styles.arrowLayout} color="#fff"/>

    </TouchableOpacity>
        );
    }

}