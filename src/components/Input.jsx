import React, {Component} from "react"

class Input extends Component {

    state = {
        title: ""
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
        //console.log("input detected");
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addItemProps(this.state.title);
        this.setState({
            title: ""
        });
        //console.log(this.state.title);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form-container">
                <input 
                    type="text" 
                    placeholder="Add Item..." 
                    name="title"
                    value={this.state.title} 
                    onChange={this.handleChange}
                    className="input-text"
                />
                <input 
                    type="submit" 
                    value="Submit" 
                    className="input-submit"
                />
            </form>
        )
    }
}

export default Input