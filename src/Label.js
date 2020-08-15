import {SafeAreaView, Text, TouchableHighlight, View} from 'react-native';
import {Icon} from 'react-native-elements';
import React from 'react';

export class Label extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SafeAreaView>
            <View style={{flexDirection: 'row', width: 300}}>
                <View style={{marginHorizontal: 5}}/>
                <View style={{flexDirection: 'row'}}>
                    <TouchableHighlight>
                        <View style={{width: 240, height: 34, borderWidth: 1, alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{fontSize: 16}}>{this.props.name}</Text>
                        </View>
                    </TouchableHighlight>
                    <View style={{marginHorizontal: 5}}/>
                    <Icon
                        size={30}
                        name='trash-2'
                        type='feather'
                        color='red'
                        onPress={() => console.log("press")} />
                </View>
                <View style={{marginHorizontal: 5}}/>
            </View>
        <View style={{marginVertical: 5}}/>
            </SafeAreaView>
        )
    }
}
