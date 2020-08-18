import React from 'react'
import {Button, Text, TextInput, View} from 'react-native';
import RNDateTimePicker from '@react-native-community/datetimepicker';

export class CalendarInfoBlock extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            addAlarm: false
        }
    }

    render() {
        return(
            <View>
                <View style={{width: '100%', backgroundColor: '#cfdfec', alignItems: 'center', justifyContent: 'center', height: 50, marginVertical: 10}}>
                    <Text style={{fontSize: 22}}>{this.props.selectedDate}</Text>
                    {(this.state.addAlarm) ? <RNDateTimePicker mode="time" value={2} onChange={this.setTime} /> : <></>}
                </View>
                <View style={{backgroundColor: '#f7f9fa', marginVertical: 10}}>
                    <TextInput placeholder={"заметка"} multiline={true} numberOfLines={2} style={{borderWidth: 1}}/>
                </View>
                <View style={{ alignItems: 'center', marginVertical: 10}}>
                    <Button title={"Добавить напоминание"}/>
                </View>
            </View>
        )
    }
}
