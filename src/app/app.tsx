import * as React               from "react";
import { Switch }               from "react-router-dom";
import { Route }                from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';

import {Button}             from "./components/buttons/base/button";
import {Header}             from "./components/app/header/header";
import {Navigation}         from "./components/app/navigation/navigation";
import {Brands}             from "./components/app/parts/brands/brands";


export class App extends React.Component {
    private title = "hello";
    public action = () => {console.log(this.title)};

    public render(){
        return (
            <div>
                <Header/>
                <div className="container">
                    <Navigation/>
                    <Switch>
                        <Route path="/brands" component={Brands}/>
                    </Switch>
                </div>
            </div>
        )
    }
}