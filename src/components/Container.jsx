import React from "react"
import { v4 as uuidv4 } from "uuid"

import Header from "./Header"
import List from "./List"
import Input from "./Input"

class Container extends React.Component {

    state = {
        todos: [
            {
              id: uuidv4(),
              title: "Setup development environment",
              completed: true
            },
            {
              id: uuidv4(),
              title: "Develop website and add content",
              completed: false
            },
            {
              id: uuidv4(),
              title: "Deploy to live server",
              completed: false
            }
          ]
    };

    handleChange = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        });
        //console.log("clicked", id);
    };

    deleteItem = (id) => {
        this.setState({
            todos: [
                ...this.state.todos.filter(todo => {
                    return todo.id !== id;
                })
            ]
        });
        //console.log("deleted", id);
    };

    addItem = (title) => {
        const newItem = {
            id: uuidv4(),
            title: title,
            completed: false
        };
        this.setState({
            todos: [
                ...this.state.todos, newItem
            ]
        });
        //console.log(title);
    };

    render() {
        return (
            <div className="container">
                <Header />
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