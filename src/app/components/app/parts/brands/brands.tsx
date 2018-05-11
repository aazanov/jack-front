import * as React               from 'react';

import {TransportService}       from "../../../../infrastructure/transport/transport.service";

import {BrandItem}              from "./item/item";
import './brands.scss';

export class Brands extends React.PureComponent {

    // --- SECTION [REACT FUNCTIONS] ----------------------------------------------------------------------------------

    public async componentWillMount(){
        let result = await TransportService.dialog({
            message: 'hello'
        });
        console.log(result);
    }

    public render(){
        return (
            <div className="brands card-deck">
                <BrandItem/>
                <BrandItem/>
                <BrandItem/>
                <BrandItem/>
                <BrandItem/>
                <BrandItem/>
                <BrandItem/>
            </div>
        )
    }
}