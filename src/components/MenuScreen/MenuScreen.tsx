import * as React from "react";
import MenuScreenProps from './MenuScreenProps';

export default class MenuScreen extends React.Component<MenuScreenProps>{
    public render(){
        return(
            <div>
                <h1>メニュー画面です</h1>
                <form onSubmit={this.handleSubmit}>
                <button type="submit">ホーム画面へ</button>
                </form>
            </div>
        )
    }

    private handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        const {Menu_to_Home} = this.props;
        e.preventDefault();
        Menu_to_Home();
    }
}