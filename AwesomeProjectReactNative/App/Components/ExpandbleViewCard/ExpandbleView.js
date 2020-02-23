import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    FlatList,
    StyleSheet
} from 'react-native'; 
import WMButton from "../../Components/WMButton/WMButton";
import PropTypes from 'prop-types';

class ExpendableView extends Component{
    constructor(props){
        super(props);
        this.state = {
            show:false
        }
    }

    render(){
        const { onPressTitle, onPressContent, data } = this.props;
        return(
            <View style={inner_styles.container}
            >
                <View  style={inner_styles.titleView}>
                <TouchableOpacity onPress={() => this.setState({show:!this.state.show})} style={{alignSelf:'center'}}>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => onPressTitle(data['name'])} 
                        accessible={true}
                        accessibilityLabel={data['title']}
                        testID={data['title']}
                        >
                    <Text style={inner_styles.expandTitleText}> {data.name}</Text>
                    </TouchableOpacity>
                   
                </View>

                {
                    this.state.show?
                        <FlatList
                        data={data['options']}
                        renderItem={({item, index}) => {
                            return(
                                <WMButton
                                    key={`${item}_${index}`}
                                    isTransparent={true}
                                    onPress={()=>onPressContent(item)}
                                    buttonStyle={inner_styles.recipeButtonLayout}
                                    textStyle={inner_styles.recipeButtonTextLayout}
                                    text={item}
                                />
                            )
                        }}
                        />
                    :null
                }
            </View>
           
        )
    }
}
ExpendableView.propTypes = {
    onPressTitle: PropTypes.func,
    onPressContent: PropTypes.func,
    data:PropTypes.object
}

ExpendableView.defaultProps={
    onPressTitle: ()=>{},
    onPressContent: ()=>{},
    data:{}
}

export default ExpendableView;

const inner_styles = StyleSheet.create({
    container: {
        backgroundColor:'#fff',
        marginTop:0,
        padding:7,
        marginBottom:15,
        shadowOpacity: 1,
         shadowRadius: 5,
          shadowColor: '#f4f4f9',
           shadowOffset: { height: 0, width: 0 },
           elevation:10

    },
    titleView:{
        flexDirection: 'row', 
        height: 40,
        alignItems:'center',
    },
    expandTitleText: {
        color: '#6a7187',
        fontWeight: '800',
        fontSize: 16,
        textAlign:'center',
        paddingLeft:10
    },
    textLayout: {
        color: 'rgba(27,77,140,1)',
        height: 30,
        fontSize: 18,
        marginTop: 15,
        alignSelf: 'center',

    },
    recipeButtonLayout: {
        height: 30,
        flexWrap: 'wrap',
        justifyContent:'center',
        marginTop:10
    },
    recipeButtonTextLayout: {
        textAlign: 'left',
        marginLeft: 10,
        color: '#636568',
        fontWeight: '500',
        fontSize: 16,
        lineHeight:24,
        letterSpacing:0,

    },
    expandLayout: {
        color: '#636568',
        marginLeft: 5,
        fontSize: 25,
        textAlign:'center',
        justifyContent:'center'
    }
});