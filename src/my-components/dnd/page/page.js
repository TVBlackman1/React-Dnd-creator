import React from "react";
import "./page.css"
import List from "./race/list/list";

let pageProps = {
    color: "white"
}

function setStyle(color) {
    if (color != "") {
        return {
            backgroundColor: color
        }
    }
    return {
        backgroundColor: "white"
    }
}

class Page extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pos: 0
        }
        this.style_set = setStyle(props.color)}

    render() {
        return (
            <div className="page-app" style={this.style_set}>
                <List />
            </div>
        );
    }
}

export default Page