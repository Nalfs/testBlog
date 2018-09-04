import React, { Component } from 'react';
import { Post } from './newpost'

export class Article extends Component {
    render() {
        return (
            <div>
                <ul>{this.props.article.map((item, index) =>
                    <li key={index.toString()}>
                            <p>{item.author}</p>
                            <p>{item.dateTime}</p>
                            <p>{item.categoryId}</p>
                            <p>{item.title}</p>
                            <p>{item.blogText}</p>
                    </li>
                )}
                </ul>
            </div>
        )
    }
}