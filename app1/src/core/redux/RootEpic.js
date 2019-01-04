import {combineEpics} from 'redux-observable';
import {
    createSessionRequestEpic,
    createSessionSuccessEpic
} from '../../containers/auth/redux/AuthEpic';
import {
    createRawInputRequestEpic
} from '../../containers/play/redux/PlayEpic';
import {createFinedInputRequestEpic} from "../../containers/maps/redux/MapsEpic";

const RootEpic = combineEpics(
    createSessionRequestEpic,
    createSessionSuccessEpic,
    createRawInputRequestEpic,
    createFinedInputRequestEpic
);

export default RootEpic
