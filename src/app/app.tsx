import * as React from "react";
import {Button} from "./components/button/button";

import 'bootstrap/dist/css/bootstrap.css';

export class App extends React.Component {

    public render(){
        return (
            <div className="container">
                <Button title="Hell"/>
            </div>
        )
    }
}