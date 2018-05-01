import * as React           from 'react';

export class Button extends React.Component<any, any>{

    private title: string;

    constructor(
        props: any,
        context: any
    ){
        super(props, context);
        this.title = props.title;
    }

    public render() {
        return (
            <input type="button" value={this.title}/>
        )
    }

}