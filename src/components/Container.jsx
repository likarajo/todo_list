import React, { useState, useEffect } from "react"
//import uuid from "uuid"
import axios from "axios"

import Header from "./Header"
import List from "./List"
import Input from "./Input"

/** Class-based component */
/*
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
*/

/** Function component */
const Container = (props) => {
    const [todos, setTodos] = useState([])
    const [show, setShow] = useState(false)

    const handleChange = (id) => { 
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo
            })   
        )
        setShow(!show)
    }

    const deleteItem = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response =>
            setTodos([
                ...todos.filter(todo => {
                    return todo.id !== id
                })
            ])
        )
    }

    const addItem = (title) => {
        axios.post("https://jsonplaceholder.typicode.com/todos", {
            title: title,
            completed: false,
        })
        .then(response =>
            setTodos([
                ...todos, response.data
            ])
        )
    }

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
            .then(response => setTodos(response.data))
    }, [])

    return (
        <div className="container">
            <Header headerSpan={show} />
            <Input 
                addItemProps={addItem}
            />
            <List 
                todos={todos} 
                handleChangeProps={handleChange} 
                deleteItemProps={deleteItem}
            />
        </div>
    )


}

export default Container