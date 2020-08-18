import {TextInput, View} from 'react-native';
import {Icon} from 'react-native-elements';
import React from 'react';

export class InputText extends React.Component{

    render() {
        return (
            <View style={{flexDirection: 'row', width: 300}}>
                <View style={{marginHorizontal: 5}}/>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>

                    <TextInput style={{borderColor: '#2289dc', width: 240, borderWidth: 1}}/>
                    <View style={{marginHorizontal: 5}}/>
                    <Icon
                        size={30}
                        name='plus-square'
                        type='feather'
                        color='#22dc58'
                        onPress={() => console.log("press")} />
                </View>
                <View style={{marginHorizontal: 5}}/>
            </View>
        )
    }
}
