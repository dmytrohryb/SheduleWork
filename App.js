import React from 'react'
import {View, Text, DrawerLayoutAndroid, TextInput, Button, TouchableHighlight, SafeAreaView} from 'react-native';
import MainScreen from './src/MainScreen';
import {Icon} from 'react-native-elements';
import {Label} from './src/Label';
import {Switch} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

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

                <Label name={"Работа"} />
                <Label name={"Спорт"} />

                <View style={{flexDirection: 'row', width: 300}}>
                    <View style={{marginHorizontal: 5}}/>
                    <View style={{flexDirection: 'row'}}>

                        <TextInput style={{width: 240, height: 34, borderWidth: 1}} placeholder={"напишите что нибудь ... "}/>

                        <View style={{marginHorizontal: 5}}/>
                        <Icon
                            size={30}
                            name='plus-square'
                            type='feather'
                            color='green'
                            onPress={() => console.log("press")} />
                    </View>
                    <View style={{marginHorizontal: 5}}/>
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
