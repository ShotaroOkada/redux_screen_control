import { Dispatch } from "redux";
import ScreenAction from '../../actions/Screen/ScreenAction';
import { IMenuScreenProps } from '../../components/MenuScreen/MenuScreenProps';
import { Menu_to_Home } from '../../actions/Screen/ScreenActionCreator';
import { connect } from 'react-redux';
import MenuScreen from '../../components/MenuScreen/MenuScreen';

const mapDispatchToProps = (dispatch: Dispatch<ScreenAction>): IMenuScreenProps => {
    return{
        Menu_to_Home: () => {
            dispatch(Menu_to_Home());
        }
    };
}

export default connect(
    null, mapDispatchToProps
)(MenuScreen)