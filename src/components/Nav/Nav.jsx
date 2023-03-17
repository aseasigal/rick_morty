import React from "react";
import SearchBar from "../SearchBar/SearchBar"
import { Link } from "react-router-dom";

class Nav extends React.Component {
    render() {
    return (
        <div>
        <SearchBar onSearch={this.props.onSearch} />
        <Link to="/About">About</Link>
        <hr />
        <Link to="/Home">Home</Link>
        </div>
    );
    }
}

export default Nav