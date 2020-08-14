import React from 'react'
import {View, Text, DrawerLayoutAndroid, TextInput, Button, TouchableHighlight} from 'react-native';
import MainScreen from './src/MainScreen';
import {Icon} from 'react-native-elements';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.DrawerLayoutAndroid = React.createRef()
    }

    render() {
        const navigationView = (
            <View style={{paddingVertical: 40}}>

                <View style={{flexDirection: 'row', width: 300}}>
                    <View style={{marginHorizontal: 5}}/>
                    <TouchableHighlight>
                    <View style={{width: 250, borderWidth: 1, alignItems: 'center'}}>
                        <Text>Работа</Text>
                    </View>
                    </TouchableHighlight>
                    <View style={{marginHorizontal: 5}}/>
                    <Icon
                        name='trash-2'
                        type='feather'
                        color='red'
                        onPress={() => console.log("press")} />
                    <View style={{marginHorizontal: 5}}/>
                </View>
                <View style={{marginVertical: 5}}/>
                <View style={{flexDirection: 'row', width: 300}}>
                    <View style={{marginHorizontal: 5}}/>
                <TouchableHighlight>
                    <View style={{width: 250, borderWidth: 1, alignItems: 'center'}}>
                        <Text>Спорт</Text>
                    </View>
                </TouchableHighlight>
                    <View style={{marginHorizontal: 5}}/>
                    <Icon
                        name='trash-2'
                        type='feather'
                        color='red'
                        onPress={() => console.log("press")} />
                    <View style={{marginHorizontal: 5}}/>
                </View>
                <View style={{marginVertical: 5}}/>
                <View style={{flexDirection: 'row', width: 300, justifyContent: 'center'}}>
                    <Icon
                        name='plus-square'
                        type='feather'
                        color='green'
                        onPress={() => console.log("press")} />
                </View>
            </View>
        );
        return (
            <DrawerLayoutAndroid drawerWidth={300} ref={this.DrawerLayoutAndroid} renderNavigationView={() => navigationView}>
                <MainScreen openDrawer={() => this.DrawerLayoutAndroid.current.openDrawer()} />
            </DrawerLayoutAndroid>
        );
    }
}

export default App;
