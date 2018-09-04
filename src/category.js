import React, { Component } from 'react';

export class Category extends Component {


    render() {
        console.log(this.props.categoryList);
        return (
            <div>
                <h4>Categories</h4>
                <div>
                    <ul>{this.props.categoryList.map((item, index) =>
                        <li key={ index.toString() }>
                            <a href="#"
                                rel="noopen noreferrer"
                                onClick={(e) => this.props.fnHandleCategoryId(item._id, e)}>
                                    { item.categoryName }
                            </a>
                        </li>
                    )}
                    </ul>
                </div>
            </div>
        )
    }
}

