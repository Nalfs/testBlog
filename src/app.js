import React, { Component } from 'react';
import { Category } from './category'
import { Article } from './article'
import { config } from './config'
import { Post } from './newpost';

export default class App extends Component {
    //Do stuff
    constructor(props) {
        super(props);
        this.state = {
            categoryId: '',
            category: [],
            article: []
        };
    }

    componentDidMount() {
        const fetchURL = config.baseURL + '/get/category?token=' + config.token;
        fetch(fetchURL)
            .then(collection => collection.json())
            .then(collection => {
                console.log('ahdfsyw', collection.entries) // Using for testing
                this.setState({ category: collection.entries })
            });
            console.log('provar detta', this.state.category)
    }


    handleCategoryId (catId, e) {//ES7
        e.preventDefault();

        console.log(catId);
        const fetchURL = config.baseURL + '/get/article?token=' + config.token;
        const fetchParams = {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                filter: { categoryId: catId },
            })
        };

        fetch(fetchURL, fetchParams)
            .then(res => res.json())
            .then(res => {
                console.log(res.entries);
                this.setState({ article: res.entries, categoryId: catId });
            });
    }

    //Render
    render() {
        return (
            <div>
            <h2>My Blog</h2>
                <Category
                    categoryList={this.state.category}
                    fnHandleCategoryId={(catId, e) => this.handleCategoryId(catId, e)} />
                <Article article={this.state.article} />
                <Post
                categoryList={this.state.category} />
            </div>
        );
    }
};
