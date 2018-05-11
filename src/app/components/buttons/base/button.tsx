import * as React           from 'react';
import {EventEmitter}       from "events";

import "./button.css";

export interface ButtonProps {
    title       : string,
    onClick     : Function
}

export class Button extends React.PureComponent<ButtonProps>{

    constructor(
        props       : any,
        context?    : any
    ){
        super(props, context);
        if (props.onClick) this.onClick(props.onClick);
    }

    // --- SECTION [MEMBERS] ------------------------------------------------------------------------------------------

    protected eventEmitter      = new EventEmitter();
    public state                = {
        disabled: false
    };

    // --- SECTION [METHODS] ------------------------------------------------------------------------------------------

    protected click(){
        this.eventEmitter.emit('click', this.state);
    }

    public onClick(action: Function){
        this.eventEmitter.on('click', action.bind(this));
    }

    // --- SECTION [REACT FUNCTIONS] ----------------------------------------------------------------------------------

    public componentWillUnmount(){
        this.eventEmitter.removeAllListeners();
    }

    public render(){
        return (
            <button disabled={this.state.disabled}
                    onClick={this.click.bind(this)}
                    className="btn btn-primary"
            >{this.props.title}</button>
        );
    }

}