export enum ScreenType{
    HOME_SCREEN = "HOME_SCREEN",
    MENU_SCREEN = "MENU_SCREEN"
}

export interface IScreenState{
    screenType: ScreenType;
}

export default IScreenState;