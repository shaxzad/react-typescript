import * as React from "react";
import { IPost } from "../../models";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";
import { connect } from "react-redux";
import { fetchPosts } from "../../actions/postActions";
import { createPosts } from "../../actions/postActions";
import { IRoutes } from "../../models";

export interface IProps {
  fetchPosts: () => void;
  createPosts: (val: any) => void;
  posts: IPost[];
  post: {};
  history: any;
}
export interface IState {
  openModal: boolean;
  isEditing: boolean;
  post: {
    title: string;
    body: string;
  };
}

class Post extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      openModal: false,
      isEditing: false,
      post: {
        title: "",
        body: ""
      }
    };
  }
  componentWillMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps: any) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.createPosts(this.state.post);
    // this.props.history.push(IRoutes.POST);
    this.setState({ openModal: false });
  };

  handleChange = (e: any) => {
    this.setState({
      post: {
        ...this.state.post,
        [e.target.name]: e.target.value
      }
    });
  };

  renderModalBody = (): JSX.Element => {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="col-6">
            <Input
              type="text"
              labelname="Post title"
              placeholder="Post title"
              onChange={this.handleChange}
              value={this.state.post.title}
              name="title"
            />
          </div>
          <div className="col-6">
            <Input
              type="text"
              labelname="Description"
              placeholder="Post Description"
              onChange={this.handleChange}
              value={this.state.post.body}
              name="body"
            />
          </div>
          <div className="col-12">
            {this.state.isEditing ? (
              <Button btnName="Update" />
            ) : (
              <Button btnName="Create" />
            )}
          </div>
        </form>
      </div>
    );
  };

  renderModalFooter = (): JSX.Element => {
    return <div>Footer</div>;
  };

  render(): JSX.Element {
    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <Button
          btnName="Add Post"
          onClick={() => this.setState({ openModal: true })}
        />
        <Modal
          showModal={this.state.openModal}
          modalTitle={this.state.isEditing ? "Update Post" : "Add post"}
          modalBody={this.renderModalBody()}
          // modalFooter={this.renderModalFooter()}
          handleClose={() => this.setState({ openModal: false })}
        />
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  posts: state.posts.items,
  newPost: state.posts.item
});

export default connect(mapStateToProps, { fetchPosts, createPosts })(Post);
