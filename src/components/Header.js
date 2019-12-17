import React from "react";
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import { Jumbotron, Container, Col, Row } from "react-bootstrap";

class Header extends React.Component {

    render() {
        return (
            <Router>
                <header className="page-header">
                    <Link to="/">
                        <img 
                            src="assets/logo-header.png" 
                            alt="logo"/>
                    </Link>
                </header>
            </Router>)

    };
}

export default Header;