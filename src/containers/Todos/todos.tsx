import * as React from "react";
import { connect } from "react-redux";
import { fectchTodos, createTodos } from "../../actions/todoActions";
import { ITodos } from "../../models/index";

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";

export interface IProps {
  fectchTodos: () => void;
  createTodos: (val: any) => void;
  todos: ITodos[];
  title: string;
}
export interface IState {
  openModal: boolean;
  isEditing: boolean;
  todo: {
    id: number;
    title: string;
    completed: any;
  };
}

class Todos extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      openModal: false,
      isEditing: false,
      todo: {
        id: 201,
        title: "",
        completed: ""
      }
    };
  }
  componentDidMount() {
    this.props.fectchTodos();
  }
  componentWillReceiveProps(nextProps: any) {
    if (nextProps.newTodo) {
      this.props.todos.unshift(nextProps.newTodo);
    }
  }
  handleChange = (e: any) => {
    this.setState({
      todo: {
        ...this.state.todo,
        [e.target.name]: e.target.value
      }
    });
  };
  handleChecked = (e: any) => {
    this.setState({
      todo: {
        ...this.state.todo,
        [e.target.checked]: e.target.checked
      }
    });
  };
  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.createTodos(this.state.todo);
    this.setState({ openModal: false });
  };
  renderModalBody = (): JSX.Element => {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="col-6">
            <Input
              type="number"
              labelname="id"
              placeholder="id"
              onChange={this.handleChange}
              value={this.state.todo.id}
              name="id"
            />
          </div>
          <div className="col-6">
            <Input
              type="text"
              labelname="Post title"
              placeholder="Post title"
              onChange={this.handleChange}
              value={this.state.todo.title}
              name="title"
            />
          </div>
          <div className="col-2">
            <Input
              type="checkbox"
              labelname="Is Completed"
              onChange={this.handleChecked}
              value={this.state.todo.completed}
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
  render(): JSX.Element {
    const todoItems = this.props.todos.map(todos => (
      <div key={todos.id}>
        <p> ID: {todos.id}</p>
        <p> User ID: {todos.userId}</p>
        <h3> User Title: {todos.title}</h3>
        <p>
          Task Completed:
          {todos.completed === true ? " completed" : "Not Complete"}
        </p>
        <p>Edit</p>
        <p>Delete</p>
      </div>
    ));
    return (
      <div>
        <Button
          btnName="Add Task"
          onClick={() => this.setState({ openModal: true })}
        />
        <Modal
          modalTitle="Create Todo item"
          showModal={this.state.openModal}
          handleClose={() => this.setState({ openModal: false })}
          modalBody={this.renderModalBody()}
        />
        <h1>Todos List</h1>
        {todoItems}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  todos: state.todos.items,
  newTodo: state.todos.item
});

export default connect(mapStateToProps, { fectchTodos, createTodos })(Todos);
