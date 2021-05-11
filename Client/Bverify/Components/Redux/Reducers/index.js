import {combineReducers} from 'redux';
import LaraReducer from './LaraReducer'
import FormhandlerReducer from './FormhandlerReducer';
import InternetConnection from './Internet_Reducer';
import ChartReducer from './ChartsReducer';
import Authentication from './AuthReducer';
import SettingsFormReducer from './SettingsFormReducer';
import BarcodeReducer from './BarcodeGenerateReducer';
export default combineReducers({


Crud_Data: LaraReducer,
FormHandler: FormhandlerReducer,
Connection:  InternetConnection,
Charts_Data: ChartReducer,
Authentication: Authentication,
SettingsForm: SettingsFormReducer,
BarcodeGenerator:BarcodeReducer,
})