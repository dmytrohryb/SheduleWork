import React from 'react'
import {Header, Icon} from 'react-native-elements';
import {CalendarList, LocaleConfig} from 'react-native-calendars';
import {View, Modal, StyleSheet, TextInput, Text, DrawerLayoutAndroid, Button} from 'react-native';
import { DateTime } from "luxon";

LocaleConfig.locales['fr'] = {
    monthNames: ['Січень','Лютий','Березень','Квітень','Травень','Червень','Липень','Серпень','Вересень','Жовтень','Листопад','Грудень'],
    monthNamesShort: ['Січень','Лютий','Березень','Квітень','Травень','Червень','Липень','Серпень','Вересень','Жовтень','Листопад','Грудень'],
    dayNames: ['Неділя','Понеділок','Вівторок','Середа','Четверг','П\`ятниця','Субота'],
    dayNamesShort: ['Нд','Пн','Вт','Ср','Чт','Пт','Сб'],
    today: 'Aujourd\'hui'
};
LocaleConfig.defaultLocale = 'fr';

class MainScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            month: "",
            editMode: false,
            visibleCheckButton: false,
            visibleResetButton: false,
            tempDates: [],
            dates: {},
            countMonth: 12,
            selectedDate: false
        }
        this.setModalVisible = this.setModalVisible.bind(this)
        this.getMonthName = this.getMonthName.bind(this)
        this.setEditMode = this.setEditMode.bind(this)
        this.setCountMonthVisible = this.setCountMonthVisible.bind(this)
        this.setDates = this.setDates.bind(this)
    }

    setModalVisible = (visible, day) => {
        this.setState({ modalVisible: visible , month: this.getMonthName(day.month), day: day.day, year: day.year});
    }

    getMonthName = (month) => {
        switch (month){
            case 1:
                return "Січня"
            case 2:
                return "Лютого"
            case 3:
                return "Березня"
            case 4:
                return "Квітня"
            case 5:
                return "Травня"
            case 6:
                return "Червня"
            case 7:
                return "Липня"
            case 8:
                return "Серпня"
            case 9:
                return "Вересня"
            case 10:
                return "Жовтня"
            case 11:
                return "Листопада"
            case 12:
                return "Грудня"
        }
    }

    setCountMonthVisible(count){
        let date = []
        let startDate = '2020-08-10'
        let endDate = JSON.stringify(DateTime.fromISO(JSON.stringify(startDate).substr(1, 10)).plus({month: count}).toISODate()).substr(1, 10)
        let curDateISO, curDate
        let j = 0
        while(curDate !== endDate){
            if(j === 0){
                curDate = JSON.stringify(startDate).substr(1, 10)
                j++
            }else{
                curDateISO = DateTime.fromISO(JSON.stringify(startDate).substr(1, 10)).plus({day: 1}).toISODate()
                startDate = curDateISO
                curDate = JSON.stringify(curDateISO).substr(1, 10)
            }
            date.push(curDate)

        }
        return date
    }

    setDates(date){
        let j = 0

        let data = {}

        for(let i = 0; i < date.length; i++){
            if(j === 0){
                data[date[i]] = {selected: true, selectedColor: 'grey'}
                j++
            }else if(j === 1){
                data[date[i]] = {selected: true, selectedColor: '#e37f68'}
                j++
            }else if(j === 2){
                data[date[i]] = {selected: true, selectedColor: '#68afe3'}
                j++
            }else if(j === 3){
                data[date[i]] = {selected: true, selectedColor: '#6a68e3'}
                j = 0
            }

        }

        this.setState({dates: data})
    }

    componentDidMount() {
        this.setState({countMonth: 15}, () => {
            this.setDates(this.setCountMonthVisible(15))
        })

    }

    setEditMode = (value) => {
        if (value){
            this.setState({
                editMode: true,
                visibleCheckButton: true,
                visibleResetButton: true
            })
        }else{
            this.setState({
                editMode: false,
                visibleCheckButton: false,
                visibleResetButton: false
            })
        }
    }

    render() {
        const DateScreen = (
            <View>
                <Header
                    leftComponent={ <Icon
                        name='menu'
                        type='feather'
                        color='#fff'
                        onPress={() => this.props.openDrawer()} />
                    }
                    centerComponent={{ text: '2020-11-15', style: { color: '#fff' } }}
                />

            </View>
        )
        const Calendar = (
            <View>
            <Header
                leftComponent={(this.state.visibleResetButton) ? <Icon
                    name='rotate-ccw'
                    type='feather'
                    color='#fff'
                    onPress={() => this.props.openDrawer()} /> : <Icon
                    name='menu'
                    type='feather'
                    color='#fff'
                    onPress={() => this.props.openDrawer()} />
                }
                centerComponent={{ text: 'РАБОТА', style: { color: '#fff' } }}
                rightComponent={(this.state.visibleCheckButton) ? <Icon
                    name='check'
                    type='feather'
                    color='#fff'
                    onPress={() => this.setEditMode(false)} /> : <Icon
                    name='edit'
                    type='feather'
                    color='#fff'
                    onPress={() => this.setEditMode(true)} />}

            />
            <CalendarList
                style={{height: '88%'}}
                markedDates={this.state.dates}
                onDayPress={(this.state.editMode) ? (day) => {this.setModalVisible(true, day)} : (day) => {this.setModalVisible(true, day)}}
                onDayLongPress={(day) => {
                    this.setModalVisible(true, day)
                }}
                pastScrollRange={0}
                futureScrollRange={this.state.countMonth}
                scrollEnabled={true}
                showScrollIndicator={true}
            />
            </View>
        )
        const visionMode = (
            <View style={{justifyContent: 'space-between'}}>
                <TextInput placeholder={"..."} />
            </View>
        )

        const editMode = (
            <View style={{justifyContent: 'space-between'}}>
                <Text>Dsctiption</Text>
            </View>
        )
        return (
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={{width: 200, height: 150, flexDirection: 'column'}}>
                                <View style={{alignItems: 'center'}}>
                                    <Text style={{fontWeight: 'bold', fontSize: 18}}>
                                        {this.state.day + ' ' + this.state.month + ' ' + this.state.year}
                                    </Text>
                                </View>
                                {(!this.state.editMode) ? editMode : visionMode}
                                <Button title={'ОК'} onPress={() => this.setModalVisible(false, {day: '', year: '', month: ''})} />
                            </View>
                        </View>
                    </View>
                </Modal>
                {(!this.state.selectedDate) ? Calendar : DateScreen}
            </View>

        );
    }
}

export default MainScreen;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});
