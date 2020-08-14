import React from "react";
//import { Component } from "react"
import { useEffect, useRef } from "react";

/** Class-based component */
/*
class Header extends Component {

    componentDidUpdate(prevProps, prevState) {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";

        if (prevProps.headerSpan !== this.props.headerSpan) {
            document.getElementById("inP").innerHTML = "clicked";
            document.getElementById("inP").style.backgroundColor = bgColor;
            //console.log("props change");
        }
    }

    render() {
        const headerStyle = {
            padding: "20px 0",
            lineHeight: "2em",
        } 

        return (
            <header style={headerStyle}>
                <h1 style={{ fontSize: "25px", marginBottom: "15px" }}>Todo App</h1>
                <p style={{ fontSize: "19px" }}>Add to-do item(s) <span id="inP"></span></p>
            </header>
        )
    }      
}
*/

/** Function component */
//function Header() {
const Header = (props) => {

    const headerStyle = {
        padding: "20px 0",
        lineHeight: "2em",
    };

    const isInitialMount = useRef(true)
    console.log(isInitialMount)

    useEffect(() => {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";

        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            document.getElementById("inP").innerHTML = "clicked"
            document.getElementById("inP").style.backgroundColor = bgColor
        } 
    }, [props.headerSpan])

    return (
        <header style={headerStyle}>
            <h1 style={{ fontSize: "25px", marginBottom: "15px" }}>Todo App</h1>
            <p style={{ fontSize: "19px" }}>Add to-do item(s)<span id="inP"></span></p>
        </header>
    )
}

export default Header