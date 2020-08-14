import React from 'react'
import {Header, Icon} from 'react-native-elements';
import {CalendarList, LocaleConfig} from 'react-native-calendars';
import {View, Modal, StyleSheet, TextInput, Text, DrawerLayoutAndroid} from 'react-native';
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
            visibleCheckButton: false,
            visibleResetButton: false,
            dates: {},
            countMonth: 12
        }
        this.setModalVisible = this.setModalVisible.bind(this)
        this.getMonthName = this.getMonthName.bind(this)
    }

    setModalVisible = (visible, day) => {
        this.setState({ modalVisible: visible , month: this.getMonthName(day.month), day: day.day, year: day.year});
    }

    componentDidMount() {
        let date = [
        ]

        let now = '2020-08-10'
        let endDate = JSON.stringify(DateTime.fromISO(JSON.stringify(now).substr(1, 10)).plus({month: 12}).toISODate()).substr(1, 10)
        let curDateISO, curDate
        let j = 0
        while(curDate !== endDate){
            if(j === 0){
                curDate = JSON.stringify(now).substr(1, 10)
                j++
            }else{
                curDateISO = DateTime.fromISO(JSON.stringify(now).substr(1, 10)).plus({day: 1}).toISODate()
                now = curDateISO
                curDate = JSON.stringify(curDateISO).substr(1, 10)
            }
            date.push(curDate)

        }

        j = 0

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

    render() {
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
                                <View style={{justifyContent: 'space-between'}}>
                                    <TextInput placeholder={"..."} />
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
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
                        name='edit'
                        type='feather'
                        color='#fff'
                        onPress={() => console.log("press")} /> : <Icon
                        name='edit'
                        type='feather'
                        color='#fff'
                        onPress={() => this.props.openDrawer()} />}

                />
                <CalendarList
                    style={{height: '88%'}}
                    markedDates={this.state.dates}
                    onVisibleMonthsChange={(months) => {console.log('now these months are visible', months)}}
                    onDayLongPress={(day) => {
                        this.setModalVisible(true, day)
                    }}
                    pastScrollRange={0}
                    futureScrollRange={this.state.countMonth}
                    scrollEnabled={true}
                    showScrollIndicator={true}
                />
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
