import React, { useContext, useState } from 'react';
import { View, ScrollView, StyleSheet, Platform } from 'react-native';
import { Button, Input, Text, CheckBox } from '@rneui/base';
import DateTimePicker from '@react-native-community/datetimepicker'; //installation required
import { TransactionEntryContext } from '../../contexts/Contexts';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import { color } from 'react-native-reanimated';

/**
 * Type for state variable for the form
 */
type IState = {
    firstName: string;
    surname: string;
    middleName: string;
    dxnDay: number | null;
    dxnMonth: number | null;
    dxnYear: number | null;
    date: Date;
    address: string;
    rxnDay: number | null;
    rxnMonth: number | null;
    rxnYear: number | null;
    cdxnDay: number | null;
    cdxnMonth: number | null;
    cdxnYear: number | null;
    aliment: string;
    medicine: string;
    procedure: string;
    nxnDay: number | null;
    nxnMonth: number | null;
    nxnYear: number | null;
}

const AddEntry: React.FC = () => {

    const { createEntry } = useContext(TransactionEntryContext)!;

    const navigation = useNavigation();

    const date = new Date(); // for initializing all the dates.
    const [state, setState] = useState<IState>({
        firstName: '',
        surname: '',
        middleName: '',
        dxnDay: date.getDate(),
        dxnMonth: date.getMonth(),
        dxnYear: date.getFullYear(),
        date,
        address: '',
        rxnDay: date.getDate(),
        rxnMonth: date.getMonth(),
        rxnYear: date.getFullYear(),
        cdxnDay: date.getDate(),
        cdxnMonth: date.getMonth(),
        cdxnYear: date.getFullYear(),
        aliment: '',
        medicine: '',
        procedure: '',
        nxnDay: date.getDate(),
        nxnMonth: date.getMonth(),
        nxnYear: date.getFullYear()
    })

    const [showDatePicker, setShowDatePicker] = useState(Platform.OS === "ios" ? true : false);

    return (
        <ScrollView>
        <View style={styles.container}>
            <Text h3 style={styles.inputContainerStyle}>Add a New Patient</Text>
            {/* Only show button below if the OS is not ios. IOS DateTimePicker is visible by default */}
            <Input
                label="First name"
                placeholder="Patient fist Name"
                multiline
                inputContainerStyle={styles.inputContainerStyle}
                leftIcon={{ type: 'font-awesome', name: '' }}
                onChangeText={firstName => setState({ ...state, firstName })}
                style={styles.inputStyle}
            />
                        <Input
                label="middleName"
                placeholder="Patient middle name"
                multiline
                inputContainerStyle={styles.inputContainerStyle}
                leftIcon={{ type: 'font-awesome', name: '' }}
                onChangeText={middleName => setState({ ...state, middleName })}
                style={styles.inputStyle}
            />
            <Input
                label="Surname"
                placeholder="Patient surname"
                multiline
                inputContainerStyle={styles.inputContainerStyle}
                leftIcon={{ type: 'font-awesome', name: '' }}
                onChangeText={surname => setState({ ...state, surname })}
                style={styles.inputStyle}
            />
                        <View style={[styles.inputContainerStyle, { flexDirection: 'row', alignSelf: 'flex-start' }]}>
                {Platform.OS !== "ios" &&  <Button
                    radius={6}
                    title={moment(state.date).format("LL")}
                    onPress={() => {
                        setShowDatePicker(true);
                    }}
                />}
                {showDatePicker && <DateTimePicker
                    style={styles.inputContainerStyle}
                    value={state.date}
                    mode={'date'}
                    //is24Hour={true}
                    display="default"
                    onChange={(_event: any, selectedDate: any) => {
                        const date: Date = selectedDate as Date;
                        setState({
                            ...state,
                            date: selectedDate,
                            dxnDay: date.getDate(),
                            dxnMonth: date.getMonth(),
                            dxnYear: date.getFullYear()
                        })
                        setShowDatePicker(Platform.OS === "ios" ? true : false);
                    }}
                />}
            </View>
            <Input
                label="address"
                placeholder="Patients Address"
                multiline
                inputContainerStyle={styles.inputContainerStyle}
                leftIcon={{ type: 'font-awesome', name: 'address-card' }}
                onChangeText={address => setState({ ...state, address })}
                style={styles.inputStyle}
            />
            <Text h4 style={styles.inputContainerStyle}>Date of Registration</Text>
                        <View style={[styles.inputContainerStyle, { flexDirection: 'row', alignSelf: 'flex-start' }]}>
                {Platform.OS !== "ios" &&  <Button
                    radius={6}
                    title={moment(state.date).format("LL")}
                    onPress={() => {
                        setShowDatePicker(true);
                    }}
                />}
                {showDatePicker && <DateTimePicker
                    style={styles.inputContainerStyle}
                    value={state.date}
                    mode={'date'}
                    //is24Hour={true}
                    display="default"
                    onChange={(_event: any, selectedDate: any) => {
                        const date: Date = selectedDate as Date;
                        setState({
                            ...state,
                            date: selectedDate,
                            rxnDay: date.getDate(),
                            rxnMonth: date.getMonth(),
                            rxnYear: date.getFullYear()
                        })
                        setShowDatePicker(Platform.OS === "ios" ? true : false);
                    }}
                />}
            </View>
            <Text h4 style={styles.inputContainerStyle}>Clinic Date</Text>
            <View style={[styles.inputContainerStyle, { flexDirection: 'row', alignSelf: 'flex-start' }]}>
                {Platform.OS !== "ios" &&  <Button
                    radius={6}
                    title={moment(state.date).format("LL")}
                    onPress={() => {
                        setShowDatePicker(true);
                    }}
                />}
                {showDatePicker && <DateTimePicker
                    style={styles.inputContainerStyle}
                    value={state.date}
                    mode={'date'}
                    //is24Hour={true}
                    display="default"
                    onChange={(_event: any, selectedDate: any) => {
                        const date: Date = selectedDate as Date;
                        setState({
                            ...state,
                            date: selectedDate,
                            cdxnDay: date.getDate(),
                            cdxnMonth: date.getMonth(),
                            cdxnYear: date.getFullYear()
                        })
                        setShowDatePicker(Platform.OS === "ios" ? true : false);
                    }}
                />}
            </View>

            <Input
                label="aliment"
                placeholder="Patients Diagnosis"
                multiline
                inputContainerStyle={styles.inputContainerStyle}
                leftIcon={{ type: 'font-awesome', name: '' }}
                onChangeText={aliment => setState({ ...state, aliment })}
                style={styles.inputStyle}
            />
            <Input
                label="medicine"
                placeholder="Prescribed Medicine"
                multiline
                inputContainerStyle={styles.inputContainerStyle}
                leftIcon={{ type: 'font-awesome', name: '' }}
                onChangeText={medicine => setState({ ...state, medicine })}
                style={styles.inputStyle}
            />
            <Input
                label="procedure"
                placeholder="Dental Procedure done"
                multiline
                inputContainerStyle={styles.inputContainerStyle}
                leftIcon={{ type: 'font-awesome', name: 'user' }}
                onChangeText={procedure => setState({ ...state, procedure })}
                style={styles.inputStyle}
            />
                        <View style={[styles.inputContainerStyle, { flexDirection: 'row', alignSelf: 'flex-start' }]}>
                {Platform.OS !== "ios" &&  <Button
                    radius={6}
                    title={moment(state.date).format("LL")}
                    onPress={() => {
                        setShowDatePicker(true);
                    }}
                />}
                {showDatePicker && <DateTimePicker
                    style={styles.inputContainerStyle}
                    value={state.date}
                    mode={'date'}
                    //is24Hour={true}
                    display="default"
                    onChange={(_event: any, selectedDate: any) => {
                        const date: Date = selectedDate as Date;
                        setState({
                            ...state,
                            date: selectedDate,
                            nxnDay: date.getDate(),
                            nxnMonth: date.getMonth(),
                            nxnYear: date.getFullYear()
                        })
                        setShowDatePicker(Platform.OS === "ios" ? true : false);
                    }}
                />}
            </View>


           

            <View style={{ flexDirection: 'row' }}>
                <Button style={[styles.inputContainerStyle, { paddingRight: 1 }]}
                    title="Submit"
                    onPress={() => {
                        //call create which will also make the form disappear
                        createEntry(state, navigation);
                    }}
                /><Button style={[styles.inputContainerStyle, { paddingLeft: 1 }]}
                    title="Cancel"
                    onPress={() => {
                        //call create which will also make the form disappear
                        navigation.goBack();
                    }}
                    buttonStyle={{ backgroundColor: 'orange' }}
                />
            </View>
        </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 18
    },
    inputContainerStyle: {
        width: '100%',
        padding: 10,
        backgroundColor: '#BA30A3'
    },
    inputStyle: {
        backgroundColor: '#BA30A3',
        borderRadius: 6,
        height: '100%',
        padding: 6,
        color: 'pink'
    }
});

export default AddEntry;