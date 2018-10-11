import {View} from 'react-native'
import React, {PureComponent} from 'react'

export default class SplashScreen extends PureComponent {
    render(){
        console.log('Splash screen')
        return(
            <View style={{backgroundColor:'red',flex:1}}>
                </View>
        )
    }
}