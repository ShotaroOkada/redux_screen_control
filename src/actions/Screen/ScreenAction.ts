import ScreenActiontype from './ScreenActiontype';

export interface IHomeScreenAction{
    type: ScreenActiontype.HOME_SCREEN;
}

export interface IMenuScreenAction{
    type: ScreenActiontype.MENU_SCREEN;
}

type ScreenAction = IHomeScreenAction | IMenuScreenAction;

export default ScreenAction;