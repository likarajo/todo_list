import React from "react"

/** class-based component */
class Item extends React.Component {
    render() {

        const completedStyle = {
            forntStyle: "italic",
            color: "#d35e0f",
            opacity: 0.4,
            textDecoration: "line-through",
        }

        const { completed, id, title } = this.props.todo

        return(
            <li className="item">
                <input 
                    type="checkbox" 
                    checked={completed}
                    onChange={() => this.props.handleChangeProps(id)} 
                />
                <button onClick={() => this.props.deleteItemProps(id)}>
                    Delete
                </button>
                <span style={completed ? completedStyle : null}>
                    {title}
                </span>       
            </li>
        );
    }
}

/** funtion component */
/*
function Item(props) {
    return <li><input type="checkbox" />{props.todo.title}</li>
}
*/

export default Item