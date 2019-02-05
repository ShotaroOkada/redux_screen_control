import * as React from "react"
import HomeScreenProps from './HomeScreenProps';

export default class HomeScreen extends React.Component<HomeScreenProps>{
    public render(){
        return(
            <div>
                <h1>ホーム画面です</h1>
                <form onSubmit={this.handleSubmit}>
                <button type="submit">メニュー</button>
                </form>
            </div>
        )
    }

    private handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        const {homeToMenu} = this.props;
        e.preventDefault();
        homeToMenu();
    }

}