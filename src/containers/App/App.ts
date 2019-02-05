import App, { IAppConnectedProps } from "src/App";
import { connect } from 'react-redux';
// import IRootState from '../../states';
import IScreenState from 'src/states/ScreenState';

const mapStateToProps = (state: IScreenState): IAppConnectedProps => {
    return{
        screenState: state
    };
};

export default connect(
    mapStateToProps, null
)(App)