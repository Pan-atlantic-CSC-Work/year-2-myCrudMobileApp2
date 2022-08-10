import { TransactionEntry } from "../entities/transaction-entry.entity";

export interface ITransactionEntry {
    id?: number;
    dxnDay?: number;
    dxnMonth?: number;
    dxnYear?: number;
    firstName: string;
    surname: string;
    middleName: string;
    address: string;
    rxnDay?: number;
    rxnMonth?: number;
    rxnYear?: number;
    cdxnDay?: number;
    cdxnMonth?: number;
    cdxnYear?: number;
    aliment: string;
    medicine: string;
    procedure: string;
    nxnDay?: number;
    nxnMonth?: number;
    nxnYear?: number;
    matricStatus?: boolean
}

/**
 * Below is used for data passed to SectionList display
 */
export interface EntriesInDateSections {
    data: ITransactionEntry[],
    title: string
}

/**
* Display options
*/
export enum DisplayOptions {
    SECTION_LIST_BY_DATE = 1,
    FLAT_LIST = 2,
    SPREADSHEET = 3
}

export type ISettings = {
    onSettings: boolean,
    displayOption: DisplayOptions
}

//As we are using TypeScript, we can optionally let stack navigator know which
//screens to expect and which initial parameters may be passed to them during navigation
//We will then have to use initialParams in each Stack.Screen to indicate the params specified in types
//e.g. for EditEntryScreen would be initialParams={transactionEntryToEdit:TransactionEntry}

export type AppStackParamList = {
    TransactionEntryHomeScreen: undefined; //no parameters expected to be passed to route when called
    AddEntryScreen: undefined;
    EditEntryScreen: { transactionEntryToEdit: TransactionEntry }; //means that transactionEntryToEdit must be passed
    SettingsScreen: undefined;
};
