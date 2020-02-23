//
//  WMButton.js
//  Quicken
// @flow
//  Copyright © 2018 Walmart Labs All rights reserved.
//

import React from 'react'
import {
    Image,
    Text,
    TouchableHighlight,
    View
} from 'react-native'
import styles from './styles'

export const BUTTON_TYPE = {
    ONLY_TEXT: 0,
    ONLY_IMAGE: 1,
    TEXT_AND_IMAGE: 2,
}
export default class WMButton extends React.Component {
    updated = false
    constructor (props) {
        super(props)
        this.state = {text:this.props.text}
    }

    render() {
        const buttonStyle = this.props.buttonStyle || {}
        const onPress = this.props.onPress || (() => {
        })
        var buttonType = undefined
        if(this.props.imageSource !== undefined && this.state.text !== undefined) {
            buttonType = BUTTON_TYPE.TEXT_AND_IMAGE
        }
        else if(this.props.imageSource !== undefined) {
            buttonType = BUTTON_TYPE.ONLY_IMAGE
        }
        else if(this.state.text !== undefined) {
            buttonType = BUTTON_TYPE.ONLY_TEXT
        }
        const activeOpacity = this.props.activeOpacity || 0.2
        const backgroundColor = this.props.isTransparent === true ? 'transparent' : this.props.backgroundColor || '#1793d2'
        return (
            <TouchableHighlight
                style={ buttonStyle }
                onPress={onPress}
                underlayColor={'transparent'}
                activeOpacity={activeOpacity}
                accessible={this.props.accessible ? this.props.accessible : true}
                disabled={this.props.disabled ? this.props.disabled : false}
                accessibilityLabel={this.props.accessibilityLabel ? this.props.accessibilityLabel : this.state.text}
                accessibilityTrait={'button'}
                onLayout={(event) => {
                    this.props.onLayout && this.props.onLayout(event)
                }}
                testId={this.props.testID}>
                <View
                    style={[
                        buttonType !== undefined ? styles.viewStyle : null,
                        { backgroundColor: backgroundColor }
                        ]}>
                    {(buttonType === BUTTON_TYPE.ONLY_TEXT || buttonType === BUTTON_TYPE.TEXT_AND_IMAGE) && this.renderText()}
                    {(buttonType === BUTTON_TYPE.ONLY_IMAGE || buttonType === BUTTON_TYPE.TEXT_AND_IMAGE) && this.renderImage()}
                    {this.props.children && this.props.children}
                </View>
            </TouchableHighlight>
        )
    }

    renderText() {
        const text = this.updated ? this.state.text : this.props.text
        const numberOfLines = this.props.numberOfLines || 1
        return (<Text
            style={[{textAlign:'center',left:10},
                this.props.textStyle]}
            numberOfLines={numberOfLines}
        >
            {'\u2022'+" "+text}
        </Text>)
    }

    renderImage = () => {
        return (
            <Image
                style={this.props.imageStyle}
                source={this.props.imageSource}/>
        )
    }

    updateText(text) {
        this.updated = true
        this.setState({text:text})
    }
}
