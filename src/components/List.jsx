import React from "react"

import Item from "./Item";

/** Class-based component */
/*
class List extends React.Component {
    render() {
        return(
            <div> 
                {this.props.todos.map(todo => (
                    <Item 
                        key={todo.id} 
                        todo={todo} 
                        handleChangeProps={this.props.handleChangeProps} 
                        deleteItemProps={this.props.deleteItemProps}
                    />
                ))}
            </div>
        );
    }
}
*/

/** Function component */
const List = (props) => {
    return(
        <div> 
            {props.todos.map(todo => (
                <Item 
                    key={todo.id} 
                    todo={todo} 
                    handleChangeProps={props.handleChangeProps} 
                    deleteItemProps={props.deleteItemProps}
                />
            ))}
        </div>
    )
}

export default List