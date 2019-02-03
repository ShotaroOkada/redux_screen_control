import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import ScreenAction from '../../actions/Screen/ScreenAction';
import { IHomeScreenProps } from '../../components/HomeScreen/HomeScreenProps';
import { Home_to_Menu } from '../../actions/Screen/ScreenActionCreator';
import HomeScreen from '../../components/HomeScreen/HomeScreen';

const mapDispatchToProps = (dispatch: Dispatch<ScreenAction>): IHomeScreenProps => {
    return{
        Home_to_Menu: () => {
            dispatch(Home_to_Menu());
        }
    };
}

export default connect(
    null, mapDispatchToProps
)(HomeScreen)