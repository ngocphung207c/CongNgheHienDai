import Api from '../api/Api';
import AuthModel from '../../containers/auth/redux/AuthModel';
import PlayModel from '../../containers/play/redux/PlayModel';
import MapsModel from '../../containers/maps/redux/MapsModel';

export default () => {
    const api = new Api();

    return {
        authModel: new AuthModel(api),
        playModel: new PlayModel(api),
        mapsModel: new MapsModel(api),
    }
}
