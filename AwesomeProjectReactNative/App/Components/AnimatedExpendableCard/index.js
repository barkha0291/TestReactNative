
import React, { Component } from 'react';
import {
    Dimensions,
    ScrollView,
    Text,
    StyleSheet,
    View,
    TouchableOpacity, 
    Animated
} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

export default class ExpendableCard extends Component{
    constructor(props){
        super(props)
        this.state = {
            expanded    : true,
            animation   : new Animated.Value(),
            opacityAnimation:new Animated.Value(0),
            maxHeight:0,
            minHeight:0,
            initial:true
        }
    }

    componentDidMount(){
        Animated.timing(
            this.state.opacityAnimation,
            {
                toValue: 1,
                duration:1000
            }
        ).start()
    }
    
    _setMaxHeight(event){
        if(this.state.initial){
            this.setState({
                maxHeight   : event.nativeEvent.layout.height
            });
        }   
        
    }
    
    _setMinHeight(event){
        if(this.state.initial){
            this.setState({
                minHeight   : event.nativeEvent.layout.height
            });
        }  
    }

    toggle(){
        //Step 1
        let initialValue    = this.state.expanded? this.state.maxHeight + this.state.minHeight : this.state.minHeight,
            finalValue      = this.state.expanded? this.state.minHeight : this.state.maxHeight + this.state.minHeight;
        if(this.state.initial){
            this.setState({
                expanded : !this.state.expanded,
                initial:false
            });
        }else{
            this.setState({
                expanded : !this.state.expanded
            });
        }
        

        this.state.animation.setValue(initialValue);
        Animated.spring(
            this.state.animation,
            {
                toValue: finalValue
            }
        ).start();

        Animated.timing(
            this.state.opacityAnimation,
            {
                toValue: this.state.expanded?0:1,
                duration:500
            }
        ).start()
    }
    render(){
        const { titleText, children} = this.props;
        const { expanded } = this.state;
        return(
            <Animated.View 
                style={[{height: this.state.animation}]}>
                <View style={styles.showHideHeaderView} onLayout={this._setMinHeight.bind(this)}>
                    <TouchableOpacity 
                        style={styles.arrowButton} 
                        onPress={this.toggle.bind(this)}
                    >
                        <Icon 
                            name={!expanded?"angle-up":"angle-down" } 
                            color="#000" 
                            style={styles.arrowIcon}
                        />   
                    </TouchableOpacity>
                    <Text style={styles.showHideHeaderText}>{titleText}</Text>
                </View>
                <Animated.View 
                  style={[{opacity:this.state.opacityAnimation}]}  
                >
                <View onLayout={this._setMaxHeight.bind(this)}>
                    {children}
                </View>
                
                </Animated.View>
                
            </Animated.View>
            
        )
    }
}

const styles = StyleSheet.create({
    cardView:{
        backgroundColor: 'transparent',
        flex:1
    },
    showHideHeaderView:{
        backgroundColor:'#fff',
        height:60,
        alignItems:'center',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.3,
        flexDirection:'row',
        marginTop:10
    },
    arrowButton:{
        padding:5,
        flex:0.2,
        left:20
    },
    arrowIcon:{
        color:'#6a7187',
        fontSize:25,
    },
    showHideHeaderText:{
        color:'#6a7187',
        fontSize:16,
        flex:0.7,
        fontWeight:'700'
    }
})