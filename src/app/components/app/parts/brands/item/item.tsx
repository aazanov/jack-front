import * as React               from "react";
import {Link}                   from "react-router-dom";
import "./item.css"

export class BrandItem extends React.PureComponent<any, any> {
    public render(){
        return (
            <Link
                to={{pathname: '/brands/vimar'}}
                className="card"
            >
                <img className="card-img-top" src="images/vimar.jpg" alt="Card image cap"/>
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk
                            of the card's content.</p>
                    </div>
            </Link>
        )
    }

}