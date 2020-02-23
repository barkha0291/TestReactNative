// @flow
import {
    StyleSheet, Dimensions
} from 'react-native'

export default StyleSheet.create({
    recipeDetailsView: {
        elevation: 20,
        marginTop: 30,
        backgroundColor: '#fff',
        alignSelf: 'center',
        shadowColor: '#bbbbbb',
        shadowRadius: 5,
        borderRadius: 5,
        borderColor: '#ddd',
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 0.8,
        marginLeft: 25,
        marginRight: 25,
        padding: 1
    },
    recipeHeaderView: {
        flexDirection: 'row',
        backgroundColor: 'rgba(51,125,189,1)',
        height: 30,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    recipeHeaderText: {
        color: 'white',
        marginLeft: 10,
        alignSelf: 'center'
    },
    recipeButtonLayout: {
        height: 40,
        flexWrap: 'wrap'
    },
    recipeButtonTextLayout: {
        textAlign: 'left',
        marginLeft: 10,
        color: 'rgba(255,255,255,1)',
        fontWeight: '500',
        fontSize: 14
    },
    cardHeaderLayout: {
        marginTop: 30,
        marginLeft: 35,
        fontWeight: '700',
        marginBottom: 10,
        fontSize: 20,
        backgroundColor: 'transparent'
    }
})