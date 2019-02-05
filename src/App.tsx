import * as React from 'react';
import HomeScreen from './containers/HomeScreen/HomeScreen';
import MenuScreen from './containers/MenuScreen/MenuScreen';
import { IScreenState,  ScreenType  } from './states/ScreenState';

export interface IAppConnectedProps{
  screenState: IScreenState 
}

class App extends React.Component<IAppConnectedProps> {
  public render() {
    const { screenState } = this.props;
    alert(screenState.screenType);
    return (
      <div>
       {screenState.screenType === ScreenType.HOME_SCREEN || screenState.screenType === undefined  &&
        <HomeScreen />}
       {screenState.screenType === ScreenType.MENU_SCREEN &&
        <MenuScreen />}
        {/* <MenuScreen />
        <HomeScreen /> */}
      </div>
    );
  }
}

export default App;
