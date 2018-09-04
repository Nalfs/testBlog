import React, { Component } from 'react';
import { config } from './config';

export class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
            category: [],
            post: {
                author: '',
                title: '',
                blogText: '',
                dateTime: '',
                categoryId:''
            }
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('linje 25', this.state.post);
        const fetchURL = config.baseURL + '/save/article?token=' + config.token;
        fetch(fetchURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                data: this.state.post
            })
        })
            .then(collection => collection.json())
            .then(collection => {
                console.log('linje 36', collection.entries) // Using for testing
                alert('Your message was posted!');
                this.setState({post: {
                    author: '',
                    title: '',
                    blogText: '',
                    dateTime: '',
                    categoryId: ''
                }});
            });


        console.log(this.state.post);

    }
    onChange(key, e) {
        let post = this.state.post;
        post[key] = e.target.value;
        this.setState({post});
    }


    render() {
        return (
            <div>
                <h4>Create a new post</h4>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <select ref="categoryId" onChange={this.onChange.bind(this, 'categoryId')}> {this.props.categoryList.map((item, index) =>
                             <option key={ index.toString() } value={item._id}>{item.categoryName}</option>
                            )}
                        </select><br />
                        <input ref="author" onChange={this.onChange.bind(this, 'author')} value={this.state.post.author} placeholder="Author Name" type="text" name="authorName"/><br />
                        <input ref="dateTime" onChange={this.onChange.bind(this, 'dateTime')} value={this.state.post.date} type="date"
                                 id="start" name="trip" value="2018-07-22"
                                 min="2018-01-01" max="2018-12-31" /><br />
                        <input ref="title" onChange={this.onChange.bind(this, 'title')} value={this.state.post.title} placeholder="Title" type="text" name="titleName"/><br />
                        <textarea ref="blogText" id="text-area" onChange={this.onChange.bind(this, 'blogText')} value={this.state.post.blogText} name="blogText" placeholder="enter comment"></textarea><br />
                        <button type="Submit">Start</button>
                    </form>
                 </div>
            </div>
        )
    }
}

