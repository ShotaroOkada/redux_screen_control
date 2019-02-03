export enum ScreenType{
    HOME_SCREEN = "HOME_SCREEN",
    MENU_SCREEN = "MENUSCREEN"
}

export interface IScreenState{
    screenType: ScreenType;
}

export default IScreenState;