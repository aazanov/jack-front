import * as React               from "react";
import { Switch }               from "react-router-dom";
import { Route }                from "react-router-dom";

import 'bootstrap/scss/bootstrap.scss';

import {Header}             from "./components/app/header/header";
import {Navigation}         from "./components/app/navigation/navigation";
import {Brands}             from "./components/app/parts/brands/brands";
import {Account}            from "./components/app/parts/account/account";


export class App extends React.Component {
    private title = "hello";

    public render(){
        return (
            <div>
                <Header/>
                <div className="container">
                    <Navigation/>
                    <Switch>
                        <Route path="/brands" component={Brands}/>
                        <Route path="/account" component={Account}/>
                    </Switch>
                </div>
            </div>
        )
    }
}