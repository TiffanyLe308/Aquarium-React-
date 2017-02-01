import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";

class Comment extends Component {
  render() {
    return <div className="comment">
    <h3 className="commentAuthor">{this.props.author}</h3>
    {this.props.children}
    </div>
  }
}

class CommentList extends Component {
  render() {
    let CommentNotes = this.props.data.map((comment) => {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      )
    });

    return (
      <div className="commentList">
        {CommentNotes}
      </div>
  )
  }
}

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] }
  }

  handleSubmit(e) {
    e.preventDefault();
    var author = ReactDOM.findDOMNode(this.refs.author).value.trim();
    var text = ReactDOM.findDOMNode(this.refs.text).value.trim();
    if (!text || !author) {
      return;
    }
    this.props.onCommentSubmit({author: author, text: text});
    ReactDOM.findDOMNode(this.refs.author).value = '';
    ReactDOM.findDOMNode(this.refs.text).value = '';
    return;
  }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   var author = this.state.author.trim();
  //   var text = this.state.text.trim();
  //   if (!text || !author) {
  //     return;
  //   }
  //   this.props.onCommentSubmit({author: author, text: text});
  //   this.setState({author: '', text: ''});
  // }

  render() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
        <h3>Create New Comment</h3>

        <label>Name</label>
        <input type="text" placeholder="Your name" ref="author" />

        <label>Comment</label>
        <input type="text" placeholder="Your comment" ref="text" />

        <input type="submit" value="Post" />
      </form>
    )
  }
}

export default class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] }
  }

  loadCommentsFromServer() {
      $.ajax({
        url: this.props.url,
        dataType: 'json',
        success: (data) => {
          this.setState({data: data});
        },
        error: (xhr, status, err) => {
          console.error(this.props.url, status, err.toString());
        }
      });
    }

  handleCommentSubmit(comment) {
      let comments = this.state.data;
      comment.id = Date.now();
      let newComments = comments.concat([comment]);
      this.setState({data: newComments});
      $.ajax({
        url: this.props.url,
        dataType: 'json',
        type: 'POST',
        data: comment,
        success: (data) => {
          this.setState({data: data});
        },
        error: (xhr, status, err) => {
          console.error(this.props.url, status, err.toString());
        }
      });
    }

    componentDidMount() {
      this.loadCommentsFromServer();
      setInterval(this.loadCommentsFromServer.bind(this), this.props.pollInterval);
    }

  render() {
      return (
        <div className="commentBox container">
          <h2>Comments</h2>
          <CommentList data={this.state.data} />
          <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)}/>
        </div>
      );
  }
}
