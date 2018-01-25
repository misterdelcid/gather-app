import React, { Component } from 'react';
import moment from 'moment';
import '../App.css';

const now = moment();

console.log(now.format('MMMM Do, YYYY h:ma'));

export default class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.post ? props.post.title: '',
      entry: props.post ? props.post.entry: '',
      category: props.post ? props.post.category: '',
      createdAt: props.post ? props.post.createdAt: '',
      error: props.post ? props.post.error: '',
    };
  }


  onTitleChange = e => {
    const title = e.target.value;
    this.setState({ title });
  };

  onCategoryChange = e => {
    const category = e.target.value;
    this.setState({ category });
  };

  onEntryChange = e => {
    const entry = e.target.value;
    this.setState({ entry });
  };

  onSubmit = e => {
    e.preventDefault();
    if (!this.state.title || !this.state.entry) {
      this.setState({
        error: 'Please add title and post'
      })
    } else {
      this.setState({
        error: ''
      })
      this.props.onSubmit({
        title: this.state.title,
        entry: this.state.entry,
        category: this.state.category,
        createdAt: moment()
      })
    }
  };

  render () {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="title your note"
            autoFocus
            value={this.state.title}
            onChange={this.onTitleChange}
          />
          <select
            onChange={this.onCategoryChange}
            value={this.state.category}
          >
            <option value="general">General</option>
            <option value="moment">Moment</option>
            <option value="lesson">Lesson</option>
            <option value="progress">Progress</option>
            <option value="idea">Idea</option>
            <option value="gratitude">Gratitude</option>
          </select>
          <textarea
            placeholder="start typing your post..."
            value={this.state.entry}
            onChange={this.onEntryChange}
          >
          </textarea>
          <button>Save</button>
        </form>
      </div>
    );
  }
}
