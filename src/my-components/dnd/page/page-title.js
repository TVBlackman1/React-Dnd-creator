import React from "react";
import './page-title.css'

class PageTitle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pos: 0
        }
    }

    render() {
        return (
            <div className="page-title">
                {this.props.children}
            </div>
        );
    }
}

export default PageTitle