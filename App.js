import React from 'react';
import {View, Text, DrawerLayoutAndroid, Button} from 'react-native';
import {Calendar, CalendarList} from 'react-native-calendars';
import {Header} from 'react-native-elements';
import {MainScreen} from './src/MainScreen';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.MainScreen = React.createRef()
    }

    render() {
        const navigationView = (
            <View style={{
                flex: 1,
                paddingTop: 35,
                padding: 8,
                justifyContent: "space-between"
            }}>

                    <Button
                        title={"Налаштування"}

                    />


            </View>
        )
        return (
            <DrawerLayoutAndroid
                ref={'Drawer'}
                drawerWidth={300}
                drawerPosition={'left'}
                renderNavigationView={() => navigationView}
            >
                <MainScreen ref={this.MainScreen} openDrawer={() => this.refs['Drawer'].openDrawer()} />
            </DrawerLayoutAndroid>
        );
    }
};

export default App;
