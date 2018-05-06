import * as React               from 'react';

import {BrandItem}              from "./item/item";
import './brands.scss';

export class Brands extends React.PureComponent {
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