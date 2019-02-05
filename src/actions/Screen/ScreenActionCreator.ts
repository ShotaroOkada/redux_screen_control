import { IHomeScreenAction, IMenuScreenAction } from './ScreenAction';
import ScreenActiontype from './ScreenActiontype';

export const homeToMenu = (): IHomeScreenAction => {
    return{
        type: ScreenActiontype.HOME_SCREEN
    };
};

export const menuToHome = (): IMenuScreenAction => {
    return{
        type: ScreenActiontype.MENU_SCREEN
    };
};