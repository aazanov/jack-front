import * as React               from 'react';

import {Radio}                  from "../../../buttons/radio/radio";

export class Account extends React.PureComponent {

    //Just for example
    public action(state: any){
        console.log(state)
    };

    // --- SECTION [REACT FUNCTIONS] ----------------------------------------------------------------------------------

    public render(){
        return (
            <Radio title="title" onClick={this.action}/>
        )
    }
}