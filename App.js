import React from 'react'
import {View, Text, DrawerLayoutAndroid, TextInput, Button, TouchableHighlight, SafeAreaView} from 'react-native';
import MainScreen from './src/MainScreen';
import {Header, Icon, Input} from 'react-native-elements';
import {Label} from './src/Label';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Calendar, CalendarList} from 'react-native-calendars';
import {InputText} from './src/InputText'
import RNDateTimePicker from '@react-native-community/datetimepicker';
import {CalendarInfoBlock} from './src/CalendarInfoBlock';

const Stack = createStackNavigator();

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            calendar: true,
            editMode: false,
            visibleResetButton: false,
            visibleCheckButton: false,
            addAlarm: false,
            selectedDate: ""
        }
        this.DrawerLayoutAndroid = React.createRef()
    }

    render() {
        let selected = {}
        selected[this.state.selectedDate] = {selected: true, color: "blue"}
        const CalendarView = (
            <View>
                <CalendarList
                    horizontal={true}
                    onDayPress={(day) => {this.setState({selectedDate: day.dateString})}}
                    onDayLongPress={(day) => {console.log('selected day', day)}}
                    futureScrollRange={50}
                    scrollEnabled={true}
                    pastScrollRange={0}
                    markedDates={selected}
                />
                <View>
                    {(this.state.selectedDate !== "") ? <CalendarInfoBlock selectedDate={this.state.selectedDate}/> : <View style={{width: '100%', alignItems: 'center', justifyContent: 'center', height: 300}}>
                        <Text style={{fontSize: 26}}>Выберите дату</Text>
                    </View>}
                </View>
            </View>
        )
        const navigationView = (
            <View style={{paddingVertical: 40}}>

                <View style={{marginHorizontal: 10, marginBottom: 20}}>
                    <Button title={"Календарь событий"} onPress={() => this.setState({calendar: true})} />
                </View>

                <Label name={"Работа"} />
                <Label name={"Спорт"} />

                <InputText />

            </View>
        );
        return (
            <DrawerLayoutAndroid drawerWidth={300} ref={this.DrawerLayoutAndroid} renderNavigationView={() => navigationView}>
                <Header
                    leftComponent={(this.state.visibleResetButton) ? <Icon
                        name='rotate-ccw'
                        type='feather'
                        color='#fff'
                        onPress={() => console.log('pressed')} /> : <Icon
                        name='menu'
                        type='feather'
                        color='#fff'
                        onPress={() => this.DrawerLayoutAndroid.current.openDrawer()} />
                    }
                    centerComponent={{ text: 'ORGANIZER', style: { color: '#fff' } }}
                    rightComponent={(!this.state.calendar) ? (this.state.visibleCheckButton) ? <Icon
                        name='check'
                        type='feather'
                        color='#fff'
                        onPress={() => console.log('pressed')} /> : <Icon
                        name='edit'
                        type='feather'
                        color='#fff'
                        onPress={() => console.log('pressed')} /> : <></>}

                />
                {(this.state.calendar) ? CalendarView : <MainScreen openDrawer={() => this.DrawerLayoutAndroid.current.openDrawer()} />}
            </DrawerLayoutAndroid>
        );
    }
}

export default App;
