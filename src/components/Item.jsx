import React, { useEffect } from "react"


/** class-based component */
/*
class Item extends React.Component {
    componentWillUnmount() {
        alert("Item about to be deleted!");
    }

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
*/

/** funtion component */

const Item = (props) => {
    const completedStyle = {
        forntStyle: "italic",
        color: "#d35e0f",
        opacity: 0.4,
        textDecoration: "line-through",
    }

    const { completed, id, title } = props.todo

    useEffect(() => {
        return () => {
            alert("Item about to be deleted!")
        }    
    }, [])

    return(
        <li className="item">
            <input 
                type="checkbox" 
                checked={completed}
                onChange={() => props.handleChangeProps(id)} 
            />
            <button onClick={() => props.deleteItemProps(id)}>
                Delete
            </button>
            <span style={completed ? completedStyle : null}>
                {title}
            </span>       
        </li>
    )
}

export default Item