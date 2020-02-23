import React from 'react';
import {
    Dimensions,
    View,
    StyleSheet, TouchableHighlight, Text
} from 'react-native';


export default class WMBanner extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            screenWidth: Dimensions.get('window').width
        }
    }

    render() {
        return (
            <View
                style={{paddingTop: 0, paddingBottom: 2, marginLeft: -3, marginRight: -3, backgroundColor: '#0071e9'}}>
                {
                    <Text style={{fontSize:24,letterSpacing:-0.3,lineHeight:28,marginLeft:20,color:'#fff',padding:5}}>{'Welcome Ripan'}{}{}</Text>
                }
            </View>
        );
    }

    showText(text) {
        let views = []
        let initialText = ''
        while (text.indexOf(':') !== -1) {
            if (initialText !== '') {
                views.push(
                    <View
                        key={`view${initialText}`}
                        style={styles.arrowLayout}/>)
            }
            initialText = text.substring(0, text.indexOf(':'))
            views.push(
                <TouchableHighlight
                    underlayColor={'transparent'}
                    key={initialText}
                    style={[styles.recipeTextLayout]}>
                    <Text style={{color: 'white'}}>
                        {initialText}
                    </Text>
                </TouchableHighlight>)
            text = text.substring(text.indexOf(':') + 1, text.length)
        }
        views.push(
            <View
                key={`arrow${text}`}
                style={styles.arrowLayout}/>)
        views.push(
            <TouchableHighlight
                key={text}
                style={[styles.recipeTextLayout]}>
                <Text style={{color: 'white'}}>
                    {text}
                </Text>
            </TouchableHighlight>)
        return (views)
    }

    onOrientationDidChange() {
        this.setState({screenWidth: Dimensions.get('window').width});
    };

}

const styles = StyleSheet.create({
    bannerLayout: {
        backgroundColor: '#0071e9',
        resizeMode: 'stretch',
        height: 30
    },
    blueBarLayout: {
        backgroundColor: '#0071e9',
        height: 30,
        flexDirection: 'row'
    },
    arrowLayout: {
        width: 0,
        height: 0,
        alignSelf: 'center',
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 8,
        borderTopWidth: 4,
        borderBottomWidth: 4,
        borderTopColor: 'transparent',
        borderBottomColor: 'transparent',
        borderLeftColor: 'yellow'
    },
    recipeTextLayout: {
        marginLeft: 5,
        alignSelf: 'center',
        marginRight: 5,
    }
});
{/*<ScrollView*/
}
{/*showsHorizontalScrollIndicator = {false}*/
}
{/*horizontal={true}*/
}
{/*style={[styles.blueBarLayout,*/
}
{/*{*/
}
{/*width:this.state.screenWidth*/
}
{/*}]}>*/
}
{/*{this.showText(this.props.text)}*/
}
{/*</ScrollView>*/
}