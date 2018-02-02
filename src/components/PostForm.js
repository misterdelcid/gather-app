import React, { Component } from 'react';
import Modal from 'react-modal';
import '../App.css';

export default class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.post ? props.post.title: '',
      post: props.post ? props.post.post: '',
      category: props.post ? props.post.category: '',
      createdAt: props.post ? props.post.createdAt: '',
      error: props.post ? props.post.error: '',
      modalIsOpen: false,
      modalDelete: false,
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
    const post = e.target.value;
    this.setState({ post });
  };

  onSubmit = e => {
    e.preventDefault();
    if (!this.state.title || !this.state.post) {
      this.setState({
        error: 'Please add title and post'
      })
    } else {
      this.setState({
        error: ''
      })
      this.props.onSubmit({
        title: this.state.title,
        post: this.state.post,
        category: this.state.category,
        createdAt: new Date().getTime()
      })
    }
  };

  onModalCancel = e => {
    e.preventDefault();
    this.setState({
      modalIsOpen: !this.state.modalIsOpen,
      modalDelete: false
    })
  };

  onModalDelete = e => {
    e.preventDefault();
    this.setState({
      modalIsOpen: !this.state.modalIsOpen,
      modalDelete: true
    })
  };

  render () {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <div className="form-buttons">
            <button onClick={this.onModalCancel}>Cancel</button>
            {this.props.onDelete && <button onClick={this.onModalDelete} className="delete-button">Delete</button>}
            <button className="action-button">Save</button>
          </div>
          <input
            type="text"
            placeholder="Add a title"
            autoFocus
            value={this.state.title}
            onChange={this.onTitleChange}
          />
          {/* <select
            onChange={this.onCategoryChange}
            value={this.state.category}
          >
            <option value="general">General</option>
            <option value="moment">Moment</option>
            <option value="lesson">Lesson</option>
            <option value="progress">Progress</option>
            <option value="idea">Idea</option>
            <option value="gratitude">Gratitude</option>
          </select> */}
          <textarea
            placeholder="Begin typing your post..."
            value={this.state.post}
            onChange={this.onEntryChange}
          >
          </textarea>
        </form>
        <Modal
          isOpen={this.state.modalIsOpen}
          className={{
            base: 'content',
            afterOpen: 'content_after-open',
          }}
          overlayClassName={{
            base: 'overlay',
            afterOpen: 'overlay_after-open',
          }}
          >
          <h3>Just a Heads Up...</h3>
          <p>{this.state.modalDelete ? 'This will permenantly remove this post. Are you sure you want to proceed?': 'Any unsaved changes will be lost. Are you sure you want to proceed?'}</p>
          <div>
            <button onClick={this.onModalCancel}>Cancel</button>
            {this.state.modalDelete ? <button onClick={this.props.onDelete} className='delete-button'>Delete</button>: <button onClick={this.props.onCancel} className="action-button">Yes</button>}
          </div>
        </Modal>
      </div>
    );
  }
}
