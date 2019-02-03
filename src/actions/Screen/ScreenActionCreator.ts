import { IHomeScreenAction, IMenuScreenAction } from './ScreenAction';
import ScreenActiontype from './ScreenActiontype';

export const Home_to_Menu = (): IHomeScreenAction => {
    return{
        type: ScreenActiontype.HOME_SCREEN
    };
};

export const Menu_to_Home = (): IMenuScreenAction => {
    return{
        type: ScreenActiontype.MENU_SCREEN
    };
};