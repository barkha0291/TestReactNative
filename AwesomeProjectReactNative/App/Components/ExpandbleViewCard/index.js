import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Dimensions,
    Image,
    StyleSheet
} from 'react-native'; 
import PropTypes from 'prop-types';
import ExpandbleView from './ExpandbleView';
class ExpendableViewCard extends Component{
    constructor(props){
        super(props);
        this.state={
            imageLoaded:false
        }
    }

    render(){
        const { onPressTitle, onPressContent, onPress, data } = this.props;
        const { imageLoaded } = this.state; 
        return(
            <View
                
                key={`cardView${data.title}`}
                style={inner_styles.container}
            >
                <View
                    key={`DetailsView${data.title}`}
                    style={[
                        inner_styles.recipeDetailsView,
                        {
                            marginTop: 0,

                        }]}
                >
                    <TouchableOpacity
                        activeOpacity={true === 'BrightCove' ? 0.2 : 0.9}
                        onPress={()=>onPressContent(data.title)}
                        
                    >
                    <Image
                            key={`Image${data.title}`}
                            style={[inner_styles.image]}
                            resizeMode={'cover'}
                        
                            >
                    </Image>
                    {
                        !imageLoaded?
                        <View style={inner_styles.imageIconView}>
                        </View>
                        : null
                    }   
                    </TouchableOpacity>
                    
                </View>

                <ExpandbleView 
                    onPressTitle={onPressTitle}
                    onPressContent={onPressContent}
                    data={data}
                />
            </View>
           
        )
    }
}

ExpendableViewCard.propTypes = {
    onPressTitle: PropTypes.func,
    onPressContent: PropTypes.func,
    data:PropTypes.object
}

ExpendableViewCard.defaultProps={
    onPressTitle: ()=>{},
    onPressContent: ()=>{},
    data:{}
}
export default ExpendableViewCard;

const inner_styles = StyleSheet.create({
    container: {
        backgroundColor:'#f4f4f9',
        width: Dimensions.get('window').width - 30,
        justifyContent:'center',
        alignSelf:'center',
        marginTop:10,
    
    },
    image:{
        width: Dimensions.get('window').width - 30, 
        height: 250, 
        paddingTop: 5,
        shadowOpacity: 0.75,
         shadowRadius: 5,
           shadowOffset: { height: 5, width: 5 },
    },
    iconStyle:{
        fontSize:100,
        color:'#ccc',
        alignSelf:'center'
    },
    imageIconView:{
        width: Dimensions.get('window').width - 30, 
        height: 250, 
        justifyContent:'center',
        backgroundColor:'#fff',
        position:'absolute'
       
    },
    recipeDetailsView: {
        elevation: 20,
        marginTop: 30,
        backgroundColor: '#f4f4f9',
        alignSelf: 'center',
        shadowColor: '#bbbbbb',
        shadowRadius: 5,
        borderRadius: 5,
        borderColor: '#ddd',
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 0.8,
        padding: 1
    },
    recipeUnusedView: {
      
    },
});