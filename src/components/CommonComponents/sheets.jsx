import FingerPrintSheet from './FingerPrintSheet';
import {registerSheet} from 'react-native-actions-sheet';
import TransferBottomSheet from '../HomeComponents/TransferPageComponents/TransferBottomSheet';
import TransferAccountsBottomSheet from '../HomeComponents/TransferPageComponents/TransferAccountsBottomSheet';
registerSheet('fingerPrint-sheet', FingerPrintSheet);
registerSheet('transfer-sheet', TransferBottomSheet);
registerSheet('transferAccounts-sheet', TransferAccountsBottomSheet);

export default {};
