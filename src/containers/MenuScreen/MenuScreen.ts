import { Dispatch } from "redux";
import ScreenAction from '../../actions/Screen/ScreenAction';
import { IMenuScreenProps } from '../../components/MenuScreen/MenuScreenProps';
import { menuToHome } from '../../actions/Screen/ScreenActionCreator';
import { connect } from 'react-redux';
import MenuScreen from '../../components/MenuScreen/MenuScreen';

const mapDispatchToProps = (dispatch: Dispatch<ScreenAction>): IMenuScreenProps => {
    return{
        menuToHome: () => {
            dispatch(menuToHome());
        }
    };
}

export default connect(
    null, mapDispatchToProps
)(MenuScreen)