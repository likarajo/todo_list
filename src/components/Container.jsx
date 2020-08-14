import React from "react"
//import { v4 as uuidv4 } from "uuid"
import axios from "axios"

import Header from "./Header"
import List from "./List"
import Input from "./Input"

class Container extends React.Component {

    state = {
        todos: [],
        show: false
    };

    handleChange = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo
            }),
            show: !this.state.show,
        })
        //console.log("clicked", id);
    };

    deleteItem = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response =>
            this.setState({
                todos: [
                    ...this.state.todos.filter(todo => {
                        return todo.id !== id;
                    })
                ]
            })
        )
        //console.log("deleted", id);
    };

    addItem = (title) => {
        axios.post("https://jsonplaceholder.typicode.com/todos", {
            title: title,
            completed: false,
        })
        .then(response =>
            this.setState({
                todos: [
                    ...this.state.todos, response.data
                ]
            })
        )
        //console.log(title);
    };

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
            .then(response => 
                    this.setState({
                        todos: response.data
                    })
                    //console.log(response.data
                );
    }

    render() {
        return (
            <div className="container">
                <Header headerSpan={this.state.show} />
                <Input 
                    addItemProps={this.addItem}
                />
                <List 
                    todos={this.state.todos} 
                    handleChangeProps={this.handleChange} 
                    deleteItemProps={this.deleteItem}
                />
            </div>
        );
    }
}

export default Container