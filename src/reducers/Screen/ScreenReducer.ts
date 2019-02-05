import { IScreenState, ScreenType } from "../../states/ScreenState";
import ScreenAction from '../../actions/Screen/ScreenAction';
import ScreenActiontype from '../../actions/Screen/ScreenActiontype';

const initialState: IScreenState = {
    screenType: ScreenType.HOME_SCREEN
}

const screenReducer = (state: IScreenState = initialState, action: ScreenAction): IScreenState => {
    // alert("initialstateは" + state.screenType)
    switch(action.type){
        case ScreenActiontype.HOME_SCREEN:
        return{
            ...state,
            screenType: ScreenType.MENU_SCREEN
        };
        case ScreenActiontype.MENU_SCREEN:
        return{
            ...state,
            screenType: ScreenType.HOME_SCREEN
        };
        default:
        return initialState;
    }
};

export default screenReducer;