import React, { useContext, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { ButtonGroup, Text, Button, Icon, CheckBox } from '@rneui/base';
import { showAlert, showDeleteConfirmation } from '../../../../global/tools/show-alert';
import { ITransactionEntry } from '../../types/definitions';
import { TransactionEntryContext } from '../../contexts/Contexts';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';

type Props = {
    item: ITransactionEntry;
}

type IState = {
    expense: boolean;
}

const EntrySectionListItem: React.FC<Props> = ({ item }) => {

    const transactionEntryContext = useContext(TransactionEntryContext);
    
    const navigation = useNavigation();
    
    const { deleteEntry } = transactionEntryContext!

    const [state, setState] = useState<IState>({
        expense: true
    })
    
    return (
        <View style={styles.inputContainerStyle}>
            <Text style={{ fontSize: 18 }}>Date Of Birth: {moment([item.dxnYear!, item.dxnMonth!, item.dxnDay!]).format('LL')}</Text>
            <Text style={{ fontSize: 18 }}>Patients name: {item.firstName} {item.middleName} {item.surname}</Text>
            <Text style={{ fontSize: 18 }}>Date of Registration: {moment([item.rxnYear!, item.rxnMonth!, item.rxnDay!]).format('LL')}</Text>
            <Text style={{ fontSize: 18 }}>Clinic Date: {moment([item.cdxnYear!, item.cdxnMonth!, item.cdxnDay!]).format('LL')}</Text>
            <Text style={{ fontSize: 18 }}>Aliment: {item.aliment}</Text>
            <Text style={{ fontSize: 18 }}>Medicine: {item.medicine}</Text>
            <Text style={{ fontSize: 18 }}>Dental Procedure: {item.procedure}</Text>
            <Text style={{ fontSize: 18 }}>Date of Next appointment: {moment([item.nxnYear!, item.nxnMonth!, item.nxnDay!]).format('LL')}</Text>
            <CheckBox
                    title='_2010112211'
                    containerStyle={[styles.inputContaineStyle, { marginTop: 10 }]}
                    checked={!state.matricStatus}
                    onPress={() => { setState({ ...state, matricStatus: !state.matricStatus }) }}
                    style={styles.inputStyle}
                />
            <ButtonGroup
                containerStyle={{ backgroundColor: 'skyblue', width: '40%', borderColor: 'skyblue' }}
                buttons={
                    [<Button
                        icon={<Icon
                            name="edit"
                            color="green"
                        />}
                        type="clear"
                        title="Edit"
                        titleStyle={{ fontSize: 15 }}
                        onPress={() => navigation.navigate("EditEntryScreen" as never,{transactionEntryToEdit: item} as never)}
                    />,
                    <Button
                        icon={<Icon
                            name="delete"
                            color="red"
                        />}
                        type="clear"
                        title="Delete"
                        titleStyle={{ fontSize: 15 }}
                        onPress={() => {
                            //deleteEntry(item.id!)
                            showDeleteConfirmation(
                                "About to Delete",
                                "Are you sure that you want to delete this entry?",
                                item.id!,
                                deleteEntry
                            )
                        }}
                    />
                    
                    ]
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainerStyle: {
        width: '100%',
        padding: 9
    },
    inputContaineStyle: {
        alignItems: 'flex-end',
    },    
    inputStyle: {
        backgroundColor: '#1D2434',
        borderRadius: 6,
        height: '100%',
        padding: 6
    }
});

export default EntrySectionListItem;