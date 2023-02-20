import FingerPrintSheet from './FingerPrintSheet';
import {registerSheet} from 'react-native-actions-sheet';
import TransferBottomSheet from '../HomeComponents/TransferPageComponents/TransferBottomSheet';
registerSheet('fingerPrint-sheet', FingerPrintSheet);
registerSheet('transfer-sheet', TransferBottomSheet);

export default {};
