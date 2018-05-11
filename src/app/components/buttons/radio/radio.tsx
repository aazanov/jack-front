import * as React                   from 'react';

import {Button, ButtonProps}        from "../base/button";
import {promisify}                  from "es6-promisify";

interface RadioProps extends ButtonProps {
    checked?     : boolean
}

export class Radio<RadioProps> extends Button {

    // --- SECTION [MEMBERS] ------------------------------------------------------------------------------------------

    public state                = {
        disabled: false,
        checked: false
    };

    // --- SECTION [METHODS] ------------------------------------------------------------------------------------------

    protected async click(){
        await promisify(this.setState.bind(this))({
            checked: !this.state.checked
        });
        super.click();
    }

    // --- SECTION [REACT FUNCTIONS] ----------------------------------------------------------------------------------

    public render(){
        return (
            <button disabled={this.state.disabled}
                    onClick={this.click.bind(this)}
                    className={"btn " + (this.state.checked ? "btn-primary" : "btn-secondary")}
            >{this.props.title}</button>
        );
    }

}