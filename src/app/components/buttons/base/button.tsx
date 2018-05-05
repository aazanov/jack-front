import * as React           from 'react';
import "./button.css";

export class Button extends React.PureComponent<any, any>{

    public state = {
        disabled: false
    };

    constructor(
        props: any,
        context: any
    ){
        super(props, context);
    }

    private click(params: any){
        return this.props.action && this.props.action(params) || null;
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