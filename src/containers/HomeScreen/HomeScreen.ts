import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import ScreenAction from '../../actions/Screen/ScreenAction';
import { IHomeScreenProps } from '../../components/HomeScreen/HomeScreenProps';
import { homeToMenu } from '../../actions/Screen/ScreenActionCreator';
import HomeScreen from '../../components/HomeScreen/HomeScreen';

const mapDispatchToProps = (dispatch: Dispatch<ScreenAction>): IHomeScreenProps => {
    return{
        homeToMenu: () => {
            dispatch(homeToMenu());
        }
    };
}

export default connect(
    null, mapDispatchToProps
)(HomeScreen)