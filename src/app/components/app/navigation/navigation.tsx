import * as React       from "react";
import { Link }         from "react-router-dom";

export class Navigation extends React.Component <any, any> {

    public render() {
        return (
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <Link to={{pathname: 'brands'}} className="nav-link">Brands</Link>
                </li>
                <li className="nav-item">
                    <Link to={{pathname: 'account'}} className="nav-link">Account</Link>
                </li>
            </ul>
        )
    }
}